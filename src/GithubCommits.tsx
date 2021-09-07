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
          <GithubCommit
            message={apiResponse.data.items[0].commit.message}
            author={apiResponse.data.items[0].commit.author.name}
            hash={apiResponse.data.items[0].sha}
          />
        </View>
      )}
    </View>
  );
};
