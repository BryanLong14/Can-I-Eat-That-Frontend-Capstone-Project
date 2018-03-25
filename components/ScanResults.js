import React, { Component } from "react";
import { Text, View, StyleSheet, Button, Image, Alert } from "react-native";
import { Constants, BarCodeScanner, Permissions } from "expo";
import FoodsToAvoid from "./FoodsToAvoid";
import ProductIngredients from "./ProductIngredients";

showProductIngredients = () => {
    return <ProductIngredients />
}

// Need to write the logic and component for ProductNutrition. Could this be a prop of the ProductIngredients component
showProductNutrition = () => {
  return <ProductNutrition />;
};

export default class ScanResults extends Component {
    render (){
               // write a function to compare Foods to Avoid against product scan results with this logic: 
               let array1 = this.props.foods;
               let found = array1.some(food => productIngredients.indexOf(food) >= 0);

               return <View>
                   found === true ? <Text>
                     This food is not safe to eat. {found} is in {productTitle}
                   </Text> : <Text>This product is safe to eat. Learn about this food:</Text>
                   <Button title="Product Ingredients" onPress={() => this.showProductIngredients()} style={styles.button} />
                   <Button title="Product Nutrition" onPress={() => this.showProductNutrition()} style={styles.button} />
                 </View>;
             }
}

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