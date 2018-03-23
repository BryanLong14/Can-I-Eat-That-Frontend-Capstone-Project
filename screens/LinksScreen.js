import React from 'react';
import { ScrollView, Image, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import BarcodeScan from '../components/BarcodeScanner'
import Header from "../components/Header";

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Foods to Avoid',
    header: null,

  };

  render() {
    return <ScrollView style={styles.container}>
        <Header headerText={"Foods To Avoid"}/>
        <BarcodeScan />
      </ScrollView>;
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 44,
    flex: 1,
    backgroundColor: "#fff"
  }
});