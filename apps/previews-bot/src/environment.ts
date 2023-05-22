import { randomUUID } from 'crypto';
import { App } from 'aws-cdk-lib';
import * as ecs from "aws-cdk-lib/aws-ecs";
import * as ec2 from "aws-cdk-lib/aws-ec2";
import { execa } from "execa";
import { PreviewsEnvironment } from "../../infra/lib/previews-environment"

export async function create(name: string, code: string) {
  const assemblyDir = `/tmp/cdk.out.${randomUUID()}`;
  const app = new App({ outdir: assemblyDir });
  const cluster = ecs.Cluster.fromClusterArn(app, "PreviewsCluster", process.env.CLUSTER_ARN!)
  const vpc = ec2.Vpc.fromLookup(app, "PreviewsVpc", {
    vpcId: process.env.VPC_ID!
  })
  new PreviewsEnvironment(app, name, code, cluster, vpc);
  app.synth();
  
  await execa('cdk', ['deploy', '--app', assemblyDir, '--all', '--require-approval=never'], {
    stdout: process.stdout,
    stderr: process.stderr,
  });
}