import React from "react";
import { TouchableOpacity, View, Text } from "react-native";

const Btn = props => {
  return (
    <TouchableOpacity
      onPressIn={() => {
        props.activateTimer(props.setTime);
      }}
      onPressOut={props.stopTimer}
    >
      <View>
        <Text>Hold</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Btn;
