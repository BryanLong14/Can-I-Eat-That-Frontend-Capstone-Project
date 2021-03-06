import "expo";
import React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { AppLoading, Asset, Font } from "expo";
import { Ionicons } from "@expo/vector-icons";
import RootNavigation from "./navigation/RootNavigation";
export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
    currentState: {},
    previousState: {}
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return <AppLoading startAsync={this._loadResourcesAsync} onError={this._handleLoadingError} onFinish={this._handleFinishLoading} />;
    } else {
      return (
        <View style={styles.container}>
          {(console.disableYellowBox = true)}
          {Platform.OS === "ios" && <StatusBar barStyle="default" />}
          {Platform.OS === "android" && <View style={styles.statusBarUnderlay} />}
          <RootNavigation
            onNavigationStateChange={(currentState, previousState) => {
              this.setState({ currentState, previousState });
            }}
          />
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([require("./assets/images/robot-dev.png"), require("./assets/images/robot-prod.png")]),
      Font.loadAsync({
        ...Ionicons.font,
        "Dosis-Regular": require("./assets/fonts/Dosis-Regular.ttf")
      })
    ]);
  };

  _handleLoadingError = error => {
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFEFF4"
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: "#EFEFF4"
  }
});
