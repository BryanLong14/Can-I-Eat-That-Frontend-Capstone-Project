import React, { Component } from "react";
import { Text, View, StyleSheet, Image, Alert } from "react-native";

export default class ProductIngredients extends Component {
  render() {
    const ingredients = (this.props.data && this.props.data.results && this.props.data.results.product_ingredients) || [];
    const productImage =
      (this.props.data &&
        this.props.data.results &&
        this.props.data.results.product_detail &&
        this.props.data.results.product_detail.product_image) ||
      [];
    const productTitle =
      (this.props.data && this.props.data.results && this.props.data.results.product_detail && this.props.data.results.product_detail.title) || [];
    return (
      <View>
        {/* <Image source={{ uri: {productImage} }} style={styles.image} /> */}
        <Text style={styles.H2}>{productTitle}</Text>
        <Text style={styles.H3}>Ingredients:</Text>
        {ingredients.map(ingredient => {
          /* Rewrite the line below with regex or filter to clean up code */
          if (ingredient.name === "," || ingredient.name === "(" || ingredient.name === ")") {
            return;
          } else {
            return <Text> {ingredient.name} </Text>;
          }
        })}
        <Text />
      </View>
    );
  }
}

const styles = {
  image: {
    width: 100,
    height: 100
  },
  H2: {
    fontSize: 20,
    fontFamily: "RammettoOne-Regular",
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 5
  },
  H3: {
    fontSize: 15,
    fontFamily: "RammettoOne-Regular",
    textAlign: "center"
  }
};
