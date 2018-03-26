import React from "react";
import { ScrollView, Image, StyleSheet } from "react-native";
import { ExpoLinksView } from "@expo/samples";
import BarcodeScan from "../components/BarcodeScanner";
import Header from "../components/Header";

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: "Foods to Avoid",
    header: null
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Header headerText={"Product Info"} />
        <BarcodeScan />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1
  }
});
