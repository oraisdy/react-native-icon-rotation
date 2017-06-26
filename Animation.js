import React from "react";
import { StyleSheet, Text, View, Animated, Image } from "react-native";

export default class Animation extends React.Component {
  componentWillMount() {
    this.rotationValue = new Animated.Value(0);
    this.zoomValue = new Animated.Value(0);
  }

  componentDidMount() {
    Animated.parallel([
      Animated.sequence(
        [0.25, 0.5, 0.75, 1].map(v =>
          Animated.timing(this.rotationValue, {
            toValue: v,
            duration: 1300
          })
        )
      ),

      Animated.timing(this.zoomValue, {
        toValue: 1,
        duration: 6000
      })
    ]).start();
  }

  render() {
    const interpolateRotation = this.rotationValue.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "-360deg"]
    });

    const animatedStyle = {
      transform: [{ rotate: interpolateRotation }]
    };

    const animatedStyle2 = {
      left: this.zoomValue.interpolate({
        inputRange: [0, 1],
        outputRange: [width, -width]
      })
    };

    return (
      <View style={styles.container}>
        <Animated.Image source={require("./2.png")} style={[animatedStyle2]} />
        <Animated.View style={[styles.box, animatedStyle]}>
          <Image source={require("./1.png")} />
        </Animated.View>
        <View style={[styles.overlay]} />
      </View>
    );
  }
}
const width = 180;
const backgroundColor = "white";
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: width,
    height: width,
    backgroundColor: "#333"
  },
  wrapper: {
    width: width,
    height: width,
    alignItems: "center",
    justifyContent: "center"
  },
  box: {
    width: width * 2,
    height: width * 2,
    position: "absolute",
    top: 0
  },
  overlay: {
    width: width * 2,
    height: width * 2,
    position: "absolute",
    top: -width / 2,
    right: width / 2 * 3,
    bottom: width / 2 * 3,
    left: -width / 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    borderRadius: width,
    borderWidth: width / 2 + 5,
    borderColor: backgroundColor
  }
});
