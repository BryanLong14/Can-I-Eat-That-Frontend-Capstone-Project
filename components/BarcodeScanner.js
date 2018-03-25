import React, { Component } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import { Constants, BarCodeScanner, Permissions } from "expo";
import ScanResults from "./ScanResults";


export default class BarcodeScan extends Component {
  state = {
    hasCameraPermission: null,
    UPC: "",
    results: {}
  };

  componentDidMount() {
    this._requestCameraPermission();
  }

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
    return <View style={styles.container}>
        {this.state.hasCameraPermission === null ? <Text>
            Requesting for camera permission
          </Text> : this.state.hasCameraPermission === false ? <Text>
            Camera permission is not granted
          </Text> : <BarCodeScanner torchMode="on" onBarCodeRead={this._handleBarCodeRead} style={{ height: 200, width: 200 }} />}
        <ScanResults data={this.state.results} />
      </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1"
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#34495e"
  }
});
