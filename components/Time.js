import React from "react";
import { StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  text: {
    fontSize: 60
  }
});

const Time = props => {
  return <Text style={styles.text}>{props.time}</Text>;
};

export default Time;
