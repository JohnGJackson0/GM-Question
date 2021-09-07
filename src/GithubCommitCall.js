import React from "react";
import { Octokit } from "@octokit/core";

export async function GithubCommitCall() {
  return new Promise((resolve) => {
    const octokit = new Octokit({
      auth: "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",
    });

    const commits = octokit.request("GET /search/commits", {
      q: "q",
      mediaType: {
        previews: ["cloak"],
      },
    });

    resolve(commits);
  });
}
