import { Probot, Context } from "probot";

export = (app: Probot) => {
  app.on("pull_request.reopened", async (context) => {
    await onPullRequestOpened(context);
  });
  app.on("pull_request.opened", async (context) => {
    await onPullRequestOpened(context);
  });
};

async function onPullRequestOpened(context:  Context<"pull_request"> & {
  payload: {
      action: "opened";
  };
} | Context<"pull_request"> & {
  payload: {
      action: "reopened";
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

      await context.octokit.issues.createComment({
        owner: pr.owner,
        repo: pr.repo,
        issue_number: pr.pull_number,
        body: `Preview URL: ${item.path} - https://play.winglang.io/?code=${content}`
      });
    }
  }
}

