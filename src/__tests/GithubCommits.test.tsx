import React from "react";
import { render } from "@testing-library/react-native";
import { GithubCommits } from "../GithubCommits";

describe("GithubCommits", () => {
  beforeEach(() => {
    jest.mock("../__mocks__/octokit");
  });

  test("Should render correctly", () => {
    const component = render(<GithubCommits />);
    component.getByTestId("github-commits");
  });
  test("Should render Github message", async () => {
    const { getByTestId } = render(<GithubCommits />);
    await getByTestId("commit-item-0");
  });
});
