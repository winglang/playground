"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CdkStack = void 0;
const cdk = require("aws-cdk-lib");
const lambda = require("aws-cdk-lib/aws-lambda");
const apigateway = require("aws-cdk-lib/aws-apigateway");
const path_1 = require("path");
class CdkStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        // The code that defines your stack goes here
        // const role = new iam.Role(this, "compilerRole", {
        //   assumedBy: new iam.ServicePrincipal("lambda.amazonaws.com"),
        //   managedPolicies: [iam.ManagedPolicy.fromAwsManagedPolicyName("service-role/AWSLambdaBasicExecutionRole")]
        // });
        const handler = new lambda.DockerImageFunction(this, "compiler", {
            code: lambda.DockerImageCode.fromImageAsset((0, path_1.join)(__dirname, "../../server")),
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
exports.CdkStack = CdkStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXN0YWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2RrLXN0YWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1DQUFtQztBQUduQyxpREFBaUQ7QUFDakQseURBQXlEO0FBQ3pELCtCQUE0QjtBQUU1QixNQUFhLFFBQVMsU0FBUSxHQUFHLENBQUMsS0FBSztJQUNyQyxZQUFZLEtBQWdCLEVBQUUsRUFBVSxFQUFFLEtBQXNCO1FBQzlELEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXhCLDZDQUE2QztRQUU3QyxvREFBb0Q7UUFDcEQsaUVBQWlFO1FBQ2pFLDhHQUE4RztRQUM5RyxNQUFNO1FBRU4sTUFBTSxPQUFPLEdBQUcsSUFBSSxNQUFNLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRTtZQUMvRCxJQUFJLEVBQUUsTUFBTSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsSUFBQSxXQUFJLEVBQUMsU0FBUyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1lBQzVFLE9BQU8sRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDaEMsVUFBVSxFQUFFLElBQUk7WUFDaEIsb0JBQW9CLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO1lBQzlDLE9BQU87U0FDUixDQUFDLENBQUM7UUFFSCwwREFBMEQ7UUFDMUQseUNBQXlDO1FBQ3pDLDhDQUE4QztRQUM5Qyw2QkFBNkI7UUFDN0IsbUJBQW1CO1FBRW5CLE1BQU07UUFDTixNQUFNO1FBRU4sTUFBTSxHQUFHLEdBQUcsSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxlQUFlLEVBQUU7WUFDeEQsV0FBVyxFQUFFLGVBQWU7WUFDNUIsMkJBQTJCLEVBQUU7Z0JBQzNCLFlBQVksRUFBRSxDQUFDLEdBQUcsQ0FBQztnQkFDbkIsWUFBWSxFQUFFLENBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUM7Z0JBQ2xFLGdCQUFnQixFQUFFLElBQUk7Z0JBQ3RCLFlBQVksRUFBRSxDQUFDLEdBQUcsQ0FBQzthQUNwQjtTQUNGLENBQUMsQ0FBQztRQUVILE1BQU0sZUFBZSxHQUFHLElBQUksVUFBVSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRTtZQUNoRSxnQkFBZ0IsRUFBRSxFQUFFLGtCQUFrQixFQUFFLHlCQUF5QixFQUFFO1NBQ3BFLENBQUMsQ0FBQztRQUVILEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxlQUFlLENBQUMsQ0FBQztRQUMzQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFDOUMsQ0FBQztDQUNGO0FBN0NELDRCQTZDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNkayBmcm9tICdhd3MtY2RrLWxpYic7XG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGlhbSBmcm9tICdhd3MtY2RrLWxpYi9hd3MtaWFtJztcbmltcG9ydCAqIGFzIGxhbWJkYSBmcm9tICdhd3MtY2RrLWxpYi9hd3MtbGFtYmRhJztcbmltcG9ydCAqIGFzIGFwaWdhdGV3YXkgZnJvbSBcImF3cy1jZGstbGliL2F3cy1hcGlnYXRld2F5XCI7XG5pbXBvcnQgeyBqb2luIH0gZnJvbSAncGF0aCc7XG5cbmV4cG9ydCBjbGFzcyBDZGtTdGFjayBleHRlbmRzIGNkay5TdGFjayB7XG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzPzogY2RrLlN0YWNrUHJvcHMpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHByb3BzKTtcblxuICAgIC8vIFRoZSBjb2RlIHRoYXQgZGVmaW5lcyB5b3VyIHN0YWNrIGdvZXMgaGVyZVxuXG4gICAgLy8gY29uc3Qgcm9sZSA9IG5ldyBpYW0uUm9sZSh0aGlzLCBcImNvbXBpbGVyUm9sZVwiLCB7XG4gICAgLy8gICBhc3N1bWVkQnk6IG5ldyBpYW0uU2VydmljZVByaW5jaXBhbChcImxhbWJkYS5hbWF6b25hd3MuY29tXCIpLFxuICAgIC8vICAgbWFuYWdlZFBvbGljaWVzOiBbaWFtLk1hbmFnZWRQb2xpY3kuZnJvbUF3c01hbmFnZWRQb2xpY3lOYW1lKFwic2VydmljZS1yb2xlL0FXU0xhbWJkYUJhc2ljRXhlY3V0aW9uUm9sZVwiKV1cbiAgICAvLyB9KTtcblxuICAgIGNvbnN0IGhhbmRsZXIgPSBuZXcgbGFtYmRhLkRvY2tlckltYWdlRnVuY3Rpb24odGhpcywgXCJjb21waWxlclwiLCB7XG4gICAgICBjb2RlOiBsYW1iZGEuRG9ja2VySW1hZ2VDb2RlLmZyb21JbWFnZUFzc2V0KGpvaW4oX19kaXJuYW1lLCBcIi4uLy4uL3NlcnZlclwiKSksXG4gICAgICB0aW1lb3V0OiBjZGsuRHVyYXRpb24ubWludXRlcygxKSxcbiAgICAgIG1lbW9yeVNpemU6IDMwMDgsXG4gICAgICBlcGhlbWVyYWxTdG9yYWdlU2l6ZTogY2RrLlNpemUubWViaWJ5dGVzKDEwMjQpXG4gICAgICAvLyByb2xlXG4gICAgfSk7XG5cbiAgICAvLyBjb25zdCBoYW5kbGVyID0gbmV3IGxhbWJkYS5GdW5jdGlvbih0aGlzLCBcIkNvbXBpbGVyXCIsIHtcbiAgICAvLyAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU18xOF9YLFxuICAgIC8vICAgY29kZTogbGFtYmRhLkNvZGUuZnJvbUFzc2V0KFwicmVzb3VyY2VzXCIpLFxuICAgIC8vICAgaGFuZGxlcjogXCJ3aWRnZXRzLm1haW5cIixcbiAgICAvLyAgIGVudmlyb25tZW50OiB7XG4gICAgICAgIFxuICAgIC8vICAgfVxuICAgIC8vIH0pO1xuXG4gICAgY29uc3QgYXBpID0gbmV3IGFwaWdhdGV3YXkuUmVzdEFwaSh0aGlzLCBcIndpbmctY29tcGlsZXJcIiwge1xuICAgICAgcmVzdEFwaU5hbWU6IFwiV2luZyBDb21waWxlclwiLFxuICAgICAgZGVmYXVsdENvcnNQcmVmbGlnaHRPcHRpb25zOiB7XG4gICAgICAgIGFsbG93SGVhZGVyczogWycqJ10sXG4gICAgICAgIGFsbG93TWV0aG9kczogWydPUFRJT05TJywgJ0dFVCcsICdQT1NUJywgJ1BVVCcsICdQQVRDSCcsICdERUxFVEUnXSxcbiAgICAgICAgYWxsb3dDcmVkZW50aWFsczogdHJ1ZSxcbiAgICAgICAgYWxsb3dPcmlnaW5zOiBbJyonXSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBjb25zdCB3aW5nSW50ZWdyYXRpb24gPSBuZXcgYXBpZ2F0ZXdheS5MYW1iZGFJbnRlZ3JhdGlvbihoYW5kbGVyLCB7XG4gICAgICByZXF1ZXN0VGVtcGxhdGVzOiB7IFwiYXBwbGljYXRpb24vanNvblwiOiAneyBcInN0YXR1c0NvZGVcIjogXCIyMDBcIiB9JyB9LFxuICAgIH0pO1xuXG4gICAgYXBpLnJvb3QuYWRkTWV0aG9kKFwiR0VUXCIsIHdpbmdJbnRlZ3JhdGlvbik7XG4gICAgYXBpLnJvb3QuYWRkTWV0aG9kKFwiUE9TVFwiLCB3aW5nSW50ZWdyYXRpb24pO1xuICB9XG59XG4iXX0=