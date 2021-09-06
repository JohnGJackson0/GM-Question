import React from "react";
import { render } from "@testing-library/react-native";
import { GithubCommitCall } from "../GithubCommitCall";

describe("request", () => {
  test("is a function", () => {
    expect(GithubCommitCall).toBeInstanceOf(Function);
  });
});
