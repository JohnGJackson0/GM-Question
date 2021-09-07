import React from "react";
import { View } from "react-native";
import { GithubCommit } from "./GithubCommit";

export const GithubCommits = ({ data }: { data: any }) => {
  return (
    <View testID="github-commits">
      {data == undefined ? (
        <></>
      ) : (
        <View>
          {data.map((item: any, index: number) => (
            <GithubCommit
              data-testid={`commit-item-${index}`}
              message={item.commit.message}
              author={item.commit.author.name}
              hash={item.sha}
              key={item.sha}
            />
          ))}
        </View>
      )}
    </View>
  );
};
