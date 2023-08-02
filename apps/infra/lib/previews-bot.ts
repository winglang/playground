import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as iam from 'aws-cdk-lib/aws-iam';
import { CfnOutput, CfnResource, Stack, StackProps } from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from "aws-cdk-lib/aws-apigateway";
import * as ec2 from "aws-cdk-lib/aws-ec2";
import * as ecs from "aws-cdk-lib/aws-ecs";
import * as ecr from "aws-cdk-lib/aws-ecr";
import * as ecs_patterns from "aws-cdk-lib/aws-ecs-patterns";
import { CfnIntegration, CfnRoute } from 'aws-cdk-lib/aws-apigatewayv2';
import { HttpApi } from '@aws-cdk/aws-apigatewayv2-alpha';
import * as apprunner from '@aws-cdk/aws-apprunner-alpha';
import { join } from 'path';
import * as sm from "aws-cdk-lib/aws-secretsmanager";
import { DockerImageAsset } from 'aws-cdk-lib/aws-ecr-assets';

export class PreviewsBot extends Construct {
  constructor(scope: Construct, id: string, repo: ecr.IRepository) {
    super(scope, id);

    const appIdSecret = sm.Secret.fromSecretNameV2(this, "App Id", "previews/appId");
    const webhookSecret = sm.Secret.fromSecretNameV2(this, "Webhook Secret", "previews/webhookSecret");
    const privateKey = sm.Secret.fromSecretNameV2(this, "Private Key", "previews/privateKey");

    const handler = new lambda.DockerImageFunction(this, "previews-bot", {
      code: lambda.DockerImageCode.fromImageAsset(join(__dirname, "../../previews-bot")),
      timeout: cdk.Duration.minutes(15),
      memorySize: 3008,
      ephemeralStorageSize: cdk.Size.mebibytes(1024),
      
      environment: {
        "APP_ID": appIdSecret.secretValue.unsafeUnwrap(),
        "WEBHOOK_SECRET": webhookSecret.secretValue.unsafeUnwrap(),
        "PRIVATE_KEY": privateKey.secretValue.unsafeUnwrap(),
        // "AWS_ACCOUNT": "089137819707",
        "REPO_ARN": repo.repositoryArn
      }
    });

    const policy = new iam.PolicyStatement();
    policy.addActions("*");
    policy.addResources("*");
    policy.effect = iam.Effect.ALLOW;
    handler.addToRolePolicy(policy);

    const api = new apigateway.RestApi(this, "wing-previews-bot", {
      restApiName: "Wing Previews Bot",
      defaultCorsPreflightOptions: {
        allowHeaders: ['*'],
        allowMethods: ['OPTIONS', 'GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
        allowCredentials: true,
        allowOrigins: ['*'],
      },
    });

    const integration = new apigateway.LambdaIntegration(handler, {
      requestTemplates: { "application/json": '{ "statusCode": "200" }' },
    });

    api.root.addMethod("GET", integration);
    api.root.addMethod("POST", integration);
  }
}