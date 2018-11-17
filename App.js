import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Btn from "./components/Button";
import Time from "./components/Time";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      time: 0
    };
    this.timer;
  }
  activateTimer = action => {
    this.resetTime();
    this.timer = setInterval(action, 1000);
  };
  stopTimer = () => {
    clearInterval(this.timer);
  };
  resetTime = () => {
    this.setState({
      time: 1
    });
  };
  setTime = () => {
    this.setState({
      time: this.state.time + 1
    });
  };
  render() {
    const { time } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Time time={time} />
        </View>
        <View style={styles.container}>
          <Btn
            activateTimer={this.activateTimer}
            stopTimer={this.stopTimer}
            setTime={this.setTime}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
