import React from "react";
import { Image, Platform, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { WebBrowser } from "expo";
import Header from "../components/Header";
import FoodsToAvoid from "../components/FoodsToAvoid";
import { MonoText } from "../components/StyledText";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <Header headerText={"Can I Eat That?"} />
        <ScrollView style={styles.container}>
          <FoodsToAvoid />
        </ScrollView>
        <Image source={require("../assets/images/1shortbackground.jpg")} style={styles.image} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex: 0.27,
    width: undefined,
    height: undefined
  }
});
