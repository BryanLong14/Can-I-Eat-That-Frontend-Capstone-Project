import React from 'react';
import { ScrollView, Image, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import BarcodeScan from '../components/BarcodeScanner'

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  render() {
    return <ScrollView style={styles.container}>
        <Image source={require("../assets/images/CanIEatThatLogoMedium.png")} />
        <BarcodeScan />
      </ScrollView>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
