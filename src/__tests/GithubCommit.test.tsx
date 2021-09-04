import React from "react";
import { render } from "@testing-library/react-native";
import { GithubCommit } from "../GithubCommit";

describe("GithubCommit", () => {
  test("Should render correctly", () => {
    const wrapper = render(<GithubCommit />);
    wrapper.getByTestId("github-commit");
  });
});
