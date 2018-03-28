import React from "react";
import { Image, Platform, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { WebBrowser } from "expo";
// import { MonoText } from "../components/StyledText";
import Header from "../components/Header";
import FoodsToAvoid from "../components/FoodsToAvoid";
// import StartupScreen from "../components/StartupScreen";
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Foods to Avoid",
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        {/* <StartupScreen /> */}
        <Header headerText={"Can I Eat That?"} />
        <ScrollView>
          {/* style={styles.container}> */}
          <Image source={require("../assets/images/1shortbackground.jpg")} style={styles.image} />
          <FoodsToAvoid />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex: 0.1,
    width: undefined,
    height: undefined
  }
});
