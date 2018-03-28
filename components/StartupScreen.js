import React from "react";
import { Text, ImageBackground, View, Image, StyleSheet } from "react-native";
import { Font } from "expo";

const StartupScreen = () => {
  return (
    <ImageBackground source={{ uri: "../assets/images/FullScreenBackground.jpg" }} style={{ resizeMode: "stretch" }}>
      <View style={styles.textBox}>
        <Text style={styles.title}>POOP I Eat That?</Text>
      </View>
    </ImageBackground>
  );
};

export default StartupScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 45,
    fontFamily: "Dosis-Regular",
    padding: 1,
    textAlign: "center"
  },
  image: {
    fontSize: 40,
    fontFamily: "Dosis-Regular",
    paddingTop: 40,
    textAlign: "center"
  }
});
