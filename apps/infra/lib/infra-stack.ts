import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as iam from 'aws-cdk-lib/aws-iam';
import { CfnOutput, CfnResource, Stack, StackProps } from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from "aws-cdk-lib/aws-apigateway";
import * as ec2 from "aws-cdk-lib/aws-ec2";
import * as ecs from "aws-cdk-lib/aws-ecs";
import * as ecs_patterns from "aws-cdk-lib/aws-ecs-patterns";
import { CfnIntegration, CfnRoute } from 'aws-cdk-lib/aws-apigatewayv2';
import { HttpApi } from '@aws-cdk/aws-apigatewayv2-alpha';
import * as apprunner from '@aws-cdk/aws-apprunner-alpha';
import { join } from 'path';
import { DockerImageAsset } from 'aws-cdk-lib/aws-ecr-assets';

export class InfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // const handler = new lambda.DockerImageFunction(this, "compiler", {
    //   code: lambda.DockerImageCode.fromImageAsset(join(__dirname, "../../server"), {
    //     file: 'Dockerfile.lambda'
    //   }),
    //   timeout: cdk.Duration.minutes(1),
    //   memorySize: 3008,
    //   ephemeralStorageSize: cdk.Size.mebibytes(1024)
    //   // role
    // });

    // const api = new apigateway.RestApi(this, "wing-compiler", {
    //   restApiName: "Wing Compiler",
    //   defaultCorsPreflightOptions: {
    //     allowHeaders: ['*'],
    //     allowMethods: ['OPTIONS', 'GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    //     allowCredentials: true,
    //     allowOrigins: ['*'],
    //   },
    // });

    // const wingIntegration = new apigateway.LambdaIntegration(handler, {
    //   requestTemplates: { "application/json": '{ "statusCode": "200" }' },
    // });

    // api.root.addMethod("GET", wingIntegration);
    // api.root.addMethod("POST", wingIntegration);

    const vpc = new ec2.Vpc(this, "DefaultVpc", {
      maxAzs: 3 // Default is all AZs in region
    });

    // const cluster = new ecs.Cluster(this, "WingCluster", {
    //   vpc: vpc,
    // });

    // const fargate = new ecs_patterns.ApplicationLoadBalancedFargateService(this, "CompilerService", {
    //   cluster: cluster,
    //   desiredCount: 4,
      
    //   taskImageOptions: { 
    //     image: ecs.ContainerImage.fromAsset(join(__dirname, "../../server")),
    //     containerPort: 3000
    //   },
    //   cpu: 4096,
    //   memoryLimitMiB: 8192,
    //   publicLoadBalancer: true
    // });

    // const httpVpcLink = new CfnResource(this, 'HttpVpcLink', {
    //   type: 'AWS::ApiGatewayV2::VpcLink',
    //   properties: {
    //     Name: 'V2 VPC Link',
    //     SubnetIds: vpc.privateSubnets.map(m => m.subnetId)
    //   }
    // });

    // const api2 = new HttpApi(this, 'HttpApiGateway', {
    //   apiName: 'ApigwFargate',
    //   description: 'Integration between apigw and Application Load-Balanced Fargate Service',
    // });

    // const integration = new CfnIntegration(this, 'HttpApiGatewayIntegration', {
    //   apiId: api2.httpApiId,
    //   connectionId: httpVpcLink.ref,
    //   connectionType: 'VPC_LINK',
    //   description: 'API Integration with AWS Fargate Service',
    //   integrationMethod: 'ANY', // for GET and POST, use ANY
    //   integrationType: 'HTTP_PROXY',
    //   integrationUri: fargate.listener.listenerArn,
    //   payloadFormatVersion: '1.0', // supported values for Lambda proxy integrations are 1.0 and 2.0. For all other integrations, 1.0 is the only supported value
    // });

    // new CfnRoute(this, 'Route', {
    //   apiId: api2.httpApiId,
    //   routeKey: 'ANY /{proxy+}',  // for something more general use 'ANY /{proxy+}'
    //   target: `integrations/${integration.ref}`,
    // })

    // new CfnOutput(this, 'APIGatewayUrl', {
    //   description: 'API Gateway URL to access the GET endpoint',
    //   value: api2.url!
    // })

    const vpcConnector = new apprunner.VpcConnector(this, 'VpcConnector', {
      vpc,
      vpcSubnets: vpc.selectSubnets({ subnetType: ec2.SubnetType.PUBLIC }),
      vpcConnectorName: 'VpcConnector',
    });    

    new apprunner.Service(this, "wing-compiler-apprunner", {
      source: apprunner.Source.fromAsset({
        asset: new DockerImageAsset(this, 'wing-compiler', {
          directory: join(__dirname, "../../server"),
        }),
        imageConfiguration: {
          port: 3000
        }
      }),
      cpu: apprunner.Cpu.FOUR_VCPU,
      memory: apprunner.Memory.EIGHT_GB,
      vpcConnector
    });
  }
}