import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { Font } from "expo";

const Header = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  container: {
    height: 100,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 3,
    elevation: 2
  },
  header: {
    fontSize: 40,
    fontFamily: "Dosis-Regular",
    paddingTop: 40,

    textAlign: "center"
  }
};

export default Header;
