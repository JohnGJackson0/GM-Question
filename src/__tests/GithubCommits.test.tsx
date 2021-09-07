import React from "react";
import { render } from "@testing-library/react-native";
import { GithubCommits } from "../GithubCommits";
import { GithubCommitCall } from "../GithubCommitCall";

describe("GithubCommits", () => {
  let data: any[] = [];
  beforeAll(async () => {
    const response = await GithubCommitCall();
    data = response.data.items;
  });

  test("Should render correctly", () => {
    const component = render(<GithubCommits data={data} />);
    component.getByTestId("github-commits");
  });

  test("Should render Github message", async () => {
    const { getByTestId } = render(<GithubCommits data={data} />);
    await getByTestId("commit-item-0");
  });
});
