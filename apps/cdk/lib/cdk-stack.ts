import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from "aws-cdk-lib/aws-apigateway";
import { join } from 'path';

export class CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // const role = new iam.Role(this, "compilerRole", {
    //   assumedBy: new iam.ServicePrincipal("lambda.amazonaws.com"),
    //   managedPolicies: [iam.ManagedPolicy.fromAwsManagedPolicyName("service-role/AWSLambdaBasicExecutionRole")]
    // });

    const handler = new lambda.DockerImageFunction(this, "compiler", {
      code: lambda.DockerImageCode.fromImageAsset(join(__dirname, "../../server")),
      timeout: cdk.Duration.minutes(1),
      memorySize: 3008,
      ephemeralStorageSize: cdk.Size.mebibytes(1024)
      // role
    });

    // const handler = new lambda.Function(this, "Compiler", {
    //   runtime: lambda.Runtime.NODEJS_18_X,
    //   code: lambda.Code.fromAsset("resources"),
    //   handler: "widgets.main",
    //   environment: {
        
    //   }
    // });

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
