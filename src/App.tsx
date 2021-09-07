import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { registerRootComponent } from "expo";
import { GithubCommits } from "./GithubCommits";
import { GithubCommitCall } from "./GithubCommitCall";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const {
        data: { items },
      } = await GithubCommitCall();
      console.log("the items ", items);
      setData(items);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <GithubCommits data={data} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default registerRootComponent(App);
