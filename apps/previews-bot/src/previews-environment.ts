import { Construct } from 'constructs';
import { CfnOutput } from 'aws-cdk-lib';
import { Stack } from 'aws-cdk-lib';
// import * as ec2 from "aws-cdk-lib/aws-ec2";
// import * as ecs from "aws-cdk-lib/aws-ecs";
import * as ecr from "aws-cdk-lib/aws-ecr";
// import * as ecs_patterns from "aws-cdk-lib/aws-ecs-patterns";
// import { CfnIntegration, CfnRoute } from 'aws-cdk-lib/aws-apigatewayv2';
// import { HttpApi } from '@aws-cdk/aws-apigatewayv2-alpha';
import * as apprunner from '@aws-cdk/aws-apprunner-alpha';

export class PreviewsEnvironment extends Construct {
  constructor(scope: Construct, id: string, code: string, repo: ecr.IRepository, tag: string) {
    super(scope, id);

    // const vpc = new ec2.Vpc(this, "DefaultVpc" + id, {
    //   availabilityZones: ["us-east-1a", "us-east-1b"]
    // });

    // const cluster = new ecs.Cluster(this, "WingCluster" + id, {
    //   vpc: vpc,
    // });

    // const fargate = new ecs_patterns.ApplicationLoadBalancedFargateService(this, "PreviewEnv" + id, {
    //   cluster,
    //   desiredCount: 1,
    //   taskImageOptions: { 


    //     image,
    //     containerPort: 3000,
    //     environment: {
    //       WING_CODE: code
    //     }
    //   },
    //   cpu: 256,
    //   memoryLimitMiB: 512,
    //   publicLoadBalancer: true
    // });


    // const httpVpcLink = new CfnResource(this, 'HttpVpcLink' + id, {
    //   type: 'AWS::ApiGatewayV2::VpcLink',
    //   properties: {
    //     Name: 'V2 VPC Link' + id,
    //     SubnetIds: vpc.privateSubnets.map(m => m.subnetId)
    //   }
    // });


    // const api2 = new HttpApi(this, 'HttpApiGateway' + id, {
    //   apiName: 'ApigwFargate' + id,
    //   description: 'Integration between apigw and Application Load-Balanced Fargate Service',
    // });


    // const integration = new CfnIntegration(this, 'HttpApiGatewayIntegration' + id, {
    //   apiId: api2.httpApiId,
    //   connectionId: httpVpcLink.ref,
    //   connectionType: 'VPC_LINK',
    //   description: 'API Integration with AWS Fargate Service',
    //   integrationMethod: 'ANY', // for GET and POST, use ANY
    //   integrationType: 'HTTP_PROXY',
    //   integrationUri: fargate.listener.listenerArn,
    //   payloadFormatVersion: '1.0', // supported values for Lambda proxy integrations are 1.0 and 2.0. For all other integrations, 1.0 is the only supported value
    // });


    // new CfnRoute(this, 'Route' + id, {
    //   apiId: api2.httpApiId,
    //   routeKey: 'ANY /{proxy+}',  // for something more general use 'ANY /{proxy+}'
    //   target: `integrations/${integration.ref}`,
    // })


    
    // new CfnOutput(this, 'APIGatewayUrl' + id, {
    //   description: 'API Gateway URL to access the GET endpoint',
    //   value: api2.url!
    // })
    // const vpcConnector = new apprunner.VpcConnector(this, 'VpcConnector' + id, {
    //   vpc,
    //   vpcSubnets: vpc.selectSubnets({ subnetType: ec2.SubnetType.PUBLIC }),
    //   vpcConnectorName: ('VpcConnector' + id).slice(-39),
    // });    
    console.log(code, code.replace(/\s/g,''), code.length);
    const service = new apprunner.Service(this, "wing-preview" + id, {
      source: apprunner.Source.fromEcr({
        repository: repo,
        tagOrDigest: tag,
        imageConfiguration: {
          port: 34443,
          environmentVariables: {
            "WING_CODE": code.replace(/\s/g,'')

          },
          
        }
      }),
      cpu: apprunner.Cpu.FOUR_VCPU,
      memory: apprunner.Memory.EIGHT_GB,
      // vpcConnector
    });

    

    new CfnOutput(this, 'ServiceUrl' + id, {
      description: 'Service Url',
      value: service.serviceUrl
    })
  }
}

export class PreviewsEnvironmentStack extends Stack {
  get availabilityZones() {
    return ["us-east-1a", "us-east-1b"];
  }
}