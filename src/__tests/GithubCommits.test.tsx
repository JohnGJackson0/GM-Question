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
  stub.push({
    commit: {
      author: {
        name: "name two",
      },
      message: "commit two",
    },
    sha: "SHA2",
  });

  test("Should render correctly", () => {
    const component = render(<GithubCommits data={stub} />);
    component.getByTestId("github-commits");
  });

  test("Should render Github message", async () => {
    const { getByTestId } = render(<GithubCommits data={stub} />);
    await getByTestId("commit-item-0");
  });

  test("Should display Github message", () => {
    const { getByText } = render(<GithubCommits data={stub} />);
    getByText(/commit one/);
  });
  test("Should display SHA code", () => {
    const { getByText } = render(<GithubCommits data={stub} />);
    getByText(/SHA1/);
  });
  test("Should display author", () => {
    const { getByText } = render(<GithubCommits data={stub} />);
    getByText(/name one/);
  });
  test("Should display second commit message", () => {
    const { getByText } = render(<GithubCommits data={stub} />);
    getByText(/commit two/);
  });
});
