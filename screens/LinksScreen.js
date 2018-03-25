import React from 'react';
import { ScrollView, Image, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Header from "../components/Header";

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Foods to Avoid',
    header: null,

  };

  render() {
    return <ScrollView style={styles.container}>
        <Header headerText={"Can I Eat That?"}/>
      </ScrollView>;
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
  }
});
