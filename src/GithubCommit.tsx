import React from "react";
import { View, Text } from "react-native";

export function GithubCommit(props: any) {
  return (
    <View testID="github-commit">
      <Text>{props.message}</Text>
    </View>
  );
}
