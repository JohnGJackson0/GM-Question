import React from "react";
import { Octokit } from "@octokit/core";

export async function GithubCommitCall() {
  return new Promise((resolve) => {
    const octokit = new Octokit({
      auth: "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 ",
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
