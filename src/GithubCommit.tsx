import React from "react";
import { View, Text } from "react-native";

export function GithubCommit(props: any) {
  return (
    <View testID={props["data-testid"] || "github-commit"}>
      <Text>{props.message}</Text>
      <Text>{props.author}</Text>
      <Text>{props.hash}</Text>
    </View>
  );
}
