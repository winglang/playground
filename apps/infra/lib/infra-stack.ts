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

    const handler = new lambda.DockerImageFunction(this, "compiler", {
      code: lambda.DockerImageCode.fromImageAsset(join(__dirname, "../../compiler"), {
        file: 'Dockerfile',
        buildArgs: {
          "--platform": "linux/amd64"
        }
      }),
      timeout: cdk.Duration.minutes(1),
      memorySize: 3008,
      ephemeralStorageSize: cdk.Size.mebibytes(1024)
      // role
    });

    const api = new apigateway.RestApi(this, "wing-compiler", {
      restApiName: "Wing Compiler",
      defaultCorsPreflightOptions: {
        allowHeaders: ['*'],
        allowMethods: ['OPTIONS', 'GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
        allowCredentials: true,
        allowOrigins: ['*'],
      },
    });

    const wingIntegration = new apigateway.LambdaIntegration(handler, {
      requestTemplates: { "application/json": '{ "statusCode": "200" }' },
    });

    api.root.addMethod("GET", wingIntegration);
    api.root.addMethod("POST", wingIntegration);
  }
}