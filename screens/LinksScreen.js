import React from "react";
import { ScrollView, View, Image, StyleSheet } from "react-native";
import BarcodeScan from "../components/BarcodeScanner";
import Header from "../components/Header";

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: "Barcode Scanner",
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <Header headerText={"Product Info  "} />
        <ScrollView style={styles.container}>
          <BarcodeScan />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
