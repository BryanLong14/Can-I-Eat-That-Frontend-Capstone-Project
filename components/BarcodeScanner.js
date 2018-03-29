import React, { Component } from "react";
import { Text, View, StyleSheet, ScrollView, Button, Alert } from "react-native";
import { Constants, BarCodeScanner, Permissions } from "expo";
import ScanResults from "./ScanResults";
import APIresults from "./APIresult";

export default class BarcodeScan extends Component {
  state = {
    hasCameraPermission: null,
    UPC: "",
    results: ""
  };

  componentDidMount() {
    this._requestCameraPermission();
  }

  // lookupUPC = () => {
  //   this.setState({
  //     results: APIresults
  //   });
  // };

  lookupUPC = UPC => {
    fetch(`https://can-i-eat-that-api.herokuapp.com/api/scan/${UPC}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          results: data
        });
      });
  };

  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === "granted"
    });
  };

  _handleBarCodeRead = data => {
    const UPC = this.state.UPC;
    if (data.data === UPC) {
      return;
    }
    this.setState({
      UPC: data.data
    });
    this.lookupUPC(data.data);
    Alert.alert(`Scan successful!\nRetrieving Product Information from barcode ${data.data}`);
  };

  render() {
    return (
      <View style={styles.scrollcontainer}>
        <ScrollView style={styles.container}>
          {this.state.hasCameraPermission === null ? (
            <Text>Requesting for camera permission</Text>
          ) : this.state.hasCameraPermission === false ? (
            <Text>Camera permission is not granted</Text>
          ) : this.state.results === "" ? (
            <View style={styles.barcodeContainer}>
              <Text style={styles.H2}>Scan Your Barcode Below</Text>
              {/* <Button title="Dummy Data" onPress={() => this.lookupUPC()} /> */}
              <BarCodeScanner info={this.state} torchMode="on" onBarCodeRead={this._handleBarCodeRead} style={{ height: 200, width: 200 }} />
            </View>
          ) : (
            <View>
              <ScanResults data={this.state.results} />
              <Button
                title="Scan Another Barcode"
                onPress={() => {
                  this.setState({ results: "", UPC: "" });
                }}
              />
            </View>
          )}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollcontainer: {
    flex: 1,
    marginBottom: 20
  },
  container: {
    flex: 1
  },
  innercontainer: {
    // marginTop: 50,
    flex: 1
  },
  barcodeContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 15
    // marginTop: 20
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  },
  H2: {
    fontSize: 25,
    fontFamily: "Dosis-Regular",
    paddingBottom: 12,
    textAlign: "center"
  }
});
