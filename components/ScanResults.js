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
    let found = array1 && array1.some(food => array2.indexOf(food) >= 0);

    console.log("FOUND: ", found);
    console.log("array1: ", array1);
    console.log("array2: ", array2);

    return (
      <View>
        <Text>This food is</Text>
        {
          (isFoundTrue = () => {
            {
              if (found === true) {
                <Text>This food is not safe to eat</Text>;
              } else {
                <Text>This food is safe to eat.</Text>;
              }
            }
          })
        }
        <Button title="Product Ingredients" onPress={() => this.showProductIngredients()} style={styles.button} />
        {/* <Button title="Product Nutrition" onPress={() => this.showProductNutrition()} style={styles.button} /> */}
      </View>
    );
  }
}

return (
  <View>
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
