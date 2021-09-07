import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { GithubCommit } from "./GithubCommit";
import { GithubCommitCall } from "./GithubCommitCall";

export const GithubCommits = () => {
  const [apiResponse, setApiResponse] = useState<any>();

  useEffect(() => {
    GithubCommitCall().then((response) => {
      setApiResponse(response);
    });
  }, []);

  return (
    <View testID="github-commits">
      {apiResponse == undefined ? (
        <></>
      ) : (
        <View>
          {apiResponse.data.items.map((item: any, index: number) => (
            <GithubCommit
              data-testid={`commit-item-${index}`}
              message={item.commit.message}
              author={item.commit.author.name}
              hash={item.sha}
            />
          ))}
        </View>
      )}
    </View>
  );
};
