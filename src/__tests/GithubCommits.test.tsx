import React from "react";
import { render } from "@testing-library/react-native";
import { GithubCommits } from "../GithubCommits";

describe("GithubCommits", () => {
  let stub: any[] = [];
  stub.push({
    commit: {
      author: {
        name: "name one",
      },
      message: "commit one",
    },
    sha: "SHA1",
  });

  test("Should render correctly", () => {
    const component = render(<GithubCommits data={stub} />);
    component.getByTestId("github-commits");
  });

  test("Should render Github message", async () => {
    const { getByTestId } = render(<GithubCommits data={stub} />);
    await getByTestId("commit-item-0");
  });
});
