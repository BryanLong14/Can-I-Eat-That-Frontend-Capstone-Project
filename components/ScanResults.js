import React, { Component } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import { Constants, BarCodeScanner, Permissions } from "expo";

// Compare Scan Results against Foods to Avoid and if there is a food that matches, change the style when the ingredient prints


export default class ScanResults extends Component {
    render (){
        const productIngredients = this.props.data && this.props.data.results && this.props.data.results.product_ingredients || [];
        return <View>
            {productIngredients.map(ingredient => {
              return <Text>{ingredient.name}</Text>;
            })
            }
            <Text />
          </View>;
    }
}