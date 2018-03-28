import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { Font } from "expo";

const Header = props => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/logologologo.png")} style={styles.image} />
      <Text style={styles.header}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  container: {
    height: 120,
    paddingTop: 20,
    paddingRight: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 3,
    elevation: 2
  },
  header: {
    fontSize: 40,
    fontFamily: "Dosis-Regular"
  },
  image: {
    height: 70,
    width: 80
  }
};

export default Header;
