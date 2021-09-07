import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Card } from "react-native-paper";

export function GithubCommit(props: any) {
  const styles = StyleSheet.create({
    container: {
      marginTop: "2%",
      marginBottom: "2%",
      marginRight: "4%",
      marginLeft: "4%",
    },
    largeText: {
      fontSize: 20,
    },
  });

  return (
    <View
      testID={props["data-testid"] || "github-commit"}
      style={styles.container}
    >
      <Card mode="outlined">
        <Card.Content>
          <Text style={styles.largeText}>Message</Text>
          <Text numberOfLines={4}> {props.message}</Text>
          <Text style={styles.largeText}>Author</Text>
          <Text numberOfLines={1}> {props.author}</Text>
          <Text style={styles.largeText}>Hash</Text>
          <Text numberOfLines={1}> {props.hash}</Text>
        </Card.Content>
      </Card>
    </View>
  );
}
