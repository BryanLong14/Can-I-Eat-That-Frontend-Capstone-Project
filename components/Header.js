import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { Font } from 'expo';


const Header = (props) => {
    return <View style={styles.container}>
        <Image source={require("../assets/images/CanIEatThatLogoMedium.png")} style={styles.image} />
        <Text style={styles.header}>{props.headerText}</Text>
      </View>;
}

const styles = {
  container: {
    flexDirection: "row",
    marginLeft: 10,
    marginBottom: 10
    },
  image: {
    width: 100,
    height: 50
  },
  header: {
    fontSize: 25,
    fontFamily: "RammettoOne-Regular",
    paddingLeft: 10,
    paddingTop: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2
  }
};

export default Header;