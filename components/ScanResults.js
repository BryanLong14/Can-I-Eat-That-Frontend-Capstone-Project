import React, { Component } from "react";
import { Text, View, StyleSheet, Image, Alert } from "react-native";
import { Constants, BarCodeScanner, Permissions } from "expo";


// Compare Scan Results against Foods to Avoid and if there is a food that matches, change the style when the ingredient prints
export default class ScanResults extends Component {
    render (){
        console.log(this.props)
        const productIngredients = this.props.data && this.props.data.results && this.props.data.results.product_ingredients || [];
        const productImage = this.props.data && this.props.data.results && this.props.data.results.product_detail && this.props.data.results.product_detail.product_image || [];
        const productTitle = this.props.data && this.props.data.results && this.props.data.results.product_detail && this.props.data.results.product_detail.title || [];
        return <View>
            {/* <Image source={{ uri: {productImage} }} style={styles.image} /> */}
            <Text style={styles.H2}>{productTitle}</Text>
            <Text style={styles.H3}>Ingredients:</Text>
            {productIngredients.map(ingredient => {
              if (ingredient.name === ("," || "(")) {
                return;
              } else {
                return <Text> {ingredient.name} </Text>;
              }
            })}
            <Text />
          </View>;
    }
}

const styles = {
  image: {
    width: 100,
    height: 100
  },
  H2: {
    fontSize: 12,
    fontFamily: "RammettoOne-Regular",
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10
  },
  H3: {
    fontSize: 10,
    fontFamily: "RammettoOne-Regular",
    textAlign: "center"
  }
};