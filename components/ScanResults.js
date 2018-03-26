import React, { Component } from "react";
import { Text, View, StyleSheet, Button, Image, Alert } from "react-native";
import FoodsToAvoid from "./FoodsToAvoid";
import axios from "axios";
import BarcodeScanner from "../components/BarcodeScanner";

const API = "https://can-i-eat-that-api.herokuapp.com/api/foods/";
const productTitle =
  (this.props &&
    this.props.data &&
    this.props.data.results &&
    this.props.data.results.product_detail &&
    this.props.data.results.product_detail.title) ||
  [];
const ingredients = (this.props && this.props.data && this.props.data.results && this.props.data.results.product_ingredients) || [];

class ScanResults extends Component {
  constructor(props) {
    super(props);
    this.state = { foods: [], showProductIngredients: false, showProductNutrition: false };
  }

  componentDidMount = () => {
    this.ListOfFoodsToAvoid();
  };

  ListOfFoodsToAvoid = () => {
    axios({
      method: "GET",
      url: API
    })
      .then(response => {
        console.log("response from API (foods to avoid): ", response.data);
        this.setState({ foods: response.data });
      })
      .catch(err => console.error(err));
  };

  _onPress = () => {
    this.setState({ showProductIngredients: !this.state.showProductIngredients });
  };

  _onPressNutrition = () => {
    this.setState({ showProductNutrition: !this.state.showProductNutrition });
  };

  _showNewBarcodeScanner = () => {
    this.setState({ showNewBarcodeScanner: !this.state.showProductNutrition });
  };

  render() {
    const productTitle =
      (this.props &&
        this.props.data &&
        this.props.data.results &&
        this.props.data.results.product_detail &&
        this.props.data.results.product_detail.title) ||
      [];
    const ingredients = (this.props && this.props.data && this.props.data.results && this.props.data.results.product_ingredients) || [];
    const productNutrition = (this.props && this.props.data && this.props.data.results && this.props.data.results.product_nutrition) || [];
    const productImage =
      (this.props.data &&
        this.props.data.results &&
        this.props.data.results.product_detail &&
        this.props.data.results.product_detail.product_image) ||
      [];
    let array1 = this.props.data.results.product_ingredients.map(ingredient => {
      return ingredient.name;
    });
    let array2 = this.state.foods.map(food => {
      return food.name;
    });
    let badFood = [];
    let found =
      array1 &&
      array1.some(food => {
        if (array2.indexOf(food) >= 0) {
          badFood.push(food);
          return true;
        } else {
          return false;
        }
      });

    compareFoodsToAvoidAgainstScan = () => {
      if (found === true) {
        return (
          <View style={styles.container}>
            <Text style={styles.H2red}>Can I Eat That? No! This product contains {badFood}</Text>
            <Image source={{ uri: productImage }} style={styles.image} />
          </View>
        );
      } else {
        return (
          <View style={styles.container}>
            <Text style={styles.H2}>Can I Eat That? Yes! {productTitle} is safe for you to eat.</Text>
            <Image source={{ uri: productImage }} style={styles.image} />
          </View>
        );
      }
    };

    return (
      <View>
        {compareFoodsToAvoidAgainstScan()}
        <Button title="Product Ingredients" onPress={this._onPress} style={styles.button} />
        {this.state.showProductIngredients && (
          <View>
            <Text style={styles.H3}>Ingredients:</Text>
            {ingredients.map(ingredient => {
              if (
                ingredient.name === "," ||
                ingredient.name === "(" ||
                ingredient.name === ")" ||
                ingredient.name === "." ||
                ingredient.name === ":"
              ) {
                return;
              } else {
                return <Text style={styles.text}> {ingredient.name} </Text>;
              }
            })}
            <Text />
          </View>
        )}
        <Button title="Product Nutrition" onPress={this._onPressNutrition} style={styles.button} />
        {this.state.showProductNutrition && (
          <View>
            <Text style={styles.H3}>Nutrition:</Text>
            {productNutrition.map(product => {
              return (
                <Text style={styles.text}>
                  {product.name}: {product.amount}
                </Text>
              );
            })}
          </View>
        )}
      </View>
    );
  }
}

export default ScanResults;

const styles = {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    textAlign: "center",
    fontSize: 18
  },
  image: {
    width: 250,
    height: 250,
    margin: 5
  },
  button: {
    marginLeft: 10,
    marginRight: 10,
    padding: 5
  },
  H2: {
    fontSize: 20,
    fontFamily: "RammettoOne-Regular",
    textAlign: "center",
    padding: 5
  },
  H2red: {
    fontSize: 20,
    fontFamily: "RammettoOne-Regular",
    textAlign: "center",
    color: "red",
    padding: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10
  },
  H3: {
    fontSize: 18,
    fontFamily: "RammettoOne-Regular",
    textAlign: "center"
  }
};
