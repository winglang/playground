import { Probot, Context } from "probot";
import { PreviewEnvironment } from "./environments";

export default function (app: Probot): void {
  app.on("pull_request.reopened", async (context: any) => {
    await onPullRequestOpened(context);
  }) as any;
  app.on("pull_request.opened", async (context: any) => {
    await onPullRequestOpened(context);
  }) as any;
  app.on("pull_request.synchronize", async (context: any) => {
    await onPullRequestOpened(context);
  }) as any;
  app.on("pull_request.closed", async (context: any) => {
    await onPullRequestClosed(context);
  }) as any;
};

async function onPullRequestOpened(context:  Context<"pull_request"> & {
  payload: {
      action: "opened";
  };
} | Context<"pull_request"> & {
  payload: {
      action: "reopened";
  };
} | Context<"pull_request"> & {
  payload: {
      action: "synchronize";
  };
}) {
  const pr = context.pullRequest();
  const prData = await context.octokit.pulls.get({
    owner: pr.owner,
    repo: pr.repo,
    pull_number: pr.pull_number
  });
  const tree = await context.octokit.git.getTree({
    owner: pr.owner,
    repo: pr.repo,
    tree_sha: prData.data.head.sha,
    recursive: "true"
  })
  console.log(JSON.stringify(tree.data, null, 2))
  for (const item of tree.data.tree) {
    if (item.path && item.path.endsWith('.w')) {
      const file = await context.octokit.repos.getContent({
        owner: pr.owner,
        repo: pr.repo,
        path: item.path,
        ref: prData.data.head.ref
      });
      const content = (file.data as any).content as string;
      let buffer = Buffer.from(content, 'base64');
      console.log(item.path, buffer.toString('utf-8'));

      const comment = await context.octokit.issues.createComment({
        owner: pr.owner,
        repo: pr.repo,
        issue_number: pr.pull_number,
        body: formatComment(item.path, pr.owner, pr.repo, prData.data.head.ref, "Building...")
      });

      const previewUrl = await new PreviewEnvironment(`${pr.owner}-${pr.repo}-${prData.data.head.ref}-${pr.pull_number}`, content).create();

      await context.octokit.issues.updateComment({
        owner: pr.owner,
        repo: pr.repo,
        comment_id: comment.data.id,
        body: formatComment(item.path, pr.owner, pr.repo, prData.data.head.ref, "Ready", `https://previews-ui-eladcon-gmailcom.vercel.app/?host=${Buffer.from(previewUrl, "utf-8").toString("base64")}`)
      });

      return;
    }
  }
}

async function onPullRequestClosed(context:  Context<"pull_request"> & {
  payload: {
      action: "closed";
  };
}) {
  const pr = context.pullRequest();
  
  const prData = await context.octokit.pulls.get({
    owner: pr.owner,
    repo: pr.repo,
    pull_number: pr.pull_number
  });
  console.log(JSON.stringify(prData.data, null, 2))
  await new PreviewEnvironment(`${pr.owner}-${pr.repo}-${prData.data.head.ref}-${pr.pull_number}`).destroy();
}

const formatComment = (fileName: string, owner: string, repo: string, branch: string, status: string, url?: string) => {
  return `
| Name | Status  | Preview  
|---|---|---
| [${fileName}](https://github.com/${owner}/${repo}/blob/${branch}/${fileName}) |  ${status} | ${url ?? ""} 
  `
}
