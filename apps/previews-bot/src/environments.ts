import { randomUUID } from 'crypto';
import { App } from 'aws-cdk-lib';
// import * as ec2 from "aws-cdk-lib/aws-ec2";
// import * as ecs from "aws-cdk-lib/aws-ecs";
import * as ecr from "aws-cdk-lib/aws-ecr";
import { PreviewsEnvironment, PreviewsEnvironmentStack } from "./previews-environment"
import { execa } from "@esm2cjs/execa";
import { join } from 'path';
import { readFile } from 'fs/promises';

export class PreviewEnvironment {
  app: App;
  assemblyDir: string;
  constructor(name: string, code = "") {
    this.assemblyDir = `/tmp/cdk.out.${name + randomUUID()}`;
    console.log('preview env', name, this.assemblyDir);

    this.app = new App({ outdir: this.assemblyDir });
    // const env = { account: process.env.AWS_ACCOUNT!, region: 'us-east-1' };
    const stack = new PreviewsEnvironmentStack(this.app, "PreviewsStack" + name, {
      // env,
      
    });

    // const vpc = ec2.Vpc.fromLookup(stack, "PreviewsVpc", {
    //   // vpcId: process.env.VPC_ID!,
    //   tags: {
    //     Name: "WingPlayground/DefaultVpc"
    //   }
    // })
    // console.log(99, vpc, vpc.vpcId)
    // const cluster = ecs.Cluster.fromClusterAttributes(stack, "PreviewsCluster", {
    //   clusterName: process.env.CLUSTER_NAME!,
    //   securityGroups: [],
    //   vpc
    // })
    const repoArn = process.env.REPO_ARN!
    // console.log(11, repoArn)
    const arnParts = repoArn.split("/");
    // console.log(22, arnParts, arnParts[0], arnParts[1], arnParts[2])
    const imageParts = arnParts[2].split(":")
    // console.log(33, imageParts[0], imageParts[1])
    const repo = ecr.Repository.fromRepositoryArn(stack, "PreviewsRepo", `${arnParts[0]}/${imageParts[0]}`);
    // const tag = imageParts[1];
    // const image = ecs.ContainerImage.fromEcrRepository(repo, tag);
    new PreviewsEnvironment(stack, name, code, repo, imageParts[1]);
    this.app.synth();
  }

  async create() {
    const outputsFile = join(this.assemblyDir, 'outputs.json');
    await execa('cdk', ['deploy', '--app', this.assemblyDir, '--all', '--require-approval=never', '--outputs-file', outputsFile], {
      stdout: process.stdout,
      stderr: process.stderr,
    });
    // `Outputs: serviceUrl = serice.url.com
    const outputs: any = await readFile(outputsFile, "utf-8");
    return Object.values(Object.values(JSON.parse(outputs))[0] as Object)[0];
  }

  async destroy() {
    await execa('cdk', ['destroy', '--app', this.assemblyDir, '--all', '-f'], {
      stdout: process.stdout,
      stderr: process.stderr,
    });
  }
}
