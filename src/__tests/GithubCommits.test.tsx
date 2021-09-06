import React from "react";
import { render } from "@testing-library/react-native";
import { GithubCommits } from "../GithubCommits";

describe("GithubCommits", () => {
  test("Should render correctly", () => {
    const component = render(<GithubCommits />);
    component.getByTestId("github-commits");
  });
});