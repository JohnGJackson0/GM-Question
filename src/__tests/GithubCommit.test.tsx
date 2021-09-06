import React from "react";
import { render } from "@testing-library/react-native";
import { GithubCommit } from "../GithubCommit";

describe("GithubCommit", () => {
  test("Should render correctly", () => {
    const component = render(<GithubCommit />);
    component.getByTestId("github-commit");
  });
  test("Should contain commit message passed as prop", () => {
    const { getByText } = render(<GithubCommit message="example" />);
    getByText(/example/);
  });
  
});
