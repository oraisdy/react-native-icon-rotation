import React from "react";
import Animation from "./Animation";
import { StyleSheet, Text, View, Animated, Image } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Animation />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  }
});
