import React, { Component } from "react";
import { Text, View, StyleSheet, Button, Image, Alert } from "react-native";
import { Constants, BarCodeScanner, Permissions } from "expo";
import FoodsToAvoid from "./FoodsToAvoid";
import ProductIngredients from "./ProductIngredients";
import axios from "axios";

const API = "https://can-i-eat-that-api.herokuapp.com/api/foods/";

showProductIngredients = () => {
  return <ProductIngredients />;
};

class ScanResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: []
    };
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

  render() {
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
    console.log("bad food", badFood);

    isFoundTrue = () => {
      if (found === true) {
        return <Text>{badFood} is not safe to eat</Text>;
      } else {
        return <Text>This food is safe to eat.</Text>;
      }
    };
    console.log("this.props:", this.props);
    console.log("this.state:", this.state);

    return (
      <View>
        {isFoundTrue()}

        <Button title="Product Ingredients" onPress={() => this.showProductIngredients()} style={styles.button} />
        {/* <Button title="Product Nutrition" onPress={() => this.showProductNutrition()} style={styles.button} /> */}
      </View>
    );
  }
}

export default ScanResults;

const styles = {
  image: {
    width: 100,
    height: 100
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
