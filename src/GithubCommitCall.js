import React from "react";
import { Octokit } from "@octokit/core";

export async function GithubCommitCall() {
  const octokit = new Octokit({
    auth: "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",
  });

  const commits = await octokit.request("GET /search/commits", {
    q: "q",
    mediaType: {
      previews: ["cloak"],
    },
  });

  return commits;
}
