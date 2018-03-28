import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet, ScrollView, Button } from "react-native";
import { TabNavigator, TabBarBottom } from "react-navigation";

import axios from "axios";

const API = "https://can-i-eat-that-api.herokuapp.com/api/foods/";

class FoodsToAvoid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: [],
      textInput: ""
    };
  }

  componentDidMount = () => {
    this.initData();
  };

  initData = () => {
    axios({
      method: "GET",
      url: API
    })
      .then(response => {
        this.setState({ foods: response.data });
      })
      .catch(err => console.error(err));
  };

  deleteItem = id => {
    axios
      .delete(API + id, {
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify
      })
      .catch(err => console.error(err))
      .then(() => this.initData());
  };

  submitFoodToAPI = () => {
    axios
      .post(API, { name: this.stringCapitalizer(this.state.textInput) })
      .catch(err => console.log(err))
      .then(() => this.initData());
  };

  onPress = () => {
    this.setState({ showTitle: !this.state.showTitle });
  };

  stringCapitalizer = string => {
    return string
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  titleFoodsToAvoid = number => {
    if (foods.name.length > 0) {
      return;
    }
  };
  render() {
    return (
      <View>
        <ScrollView style={styles.container}>
          <Text style={styles.H2}>Foods to Avoid</Text>
          <TextInput
            placeholder="Add Foods to Avoid"
            style={styles.textfield}
            value={this.state.textInput}
            onChangeText={text =>
              this.setState({
                textInput: text
              })
            }
          />
          <Button title="Add Food Item to List" onPress={() => this.submitFoodToAPI()} style={styles.button} />
          {this.state.foods.map(food => (
            <View key={food.id} style={styles.card}>
              <Text key={food.name} style={styles.foodsLabel}>
                {food.name
                  .split(" ")
                  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </Text>
              <View>
                <Button title="Remove Food From List" checked={true} onPress={() => this.deleteItem(food.id)} />
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

export default FoodsToAvoid;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  card: {
    borderWidth: 1,
    borderColor: "#ccc",
    margin: 10,
    borderRadius: 20
  },
  H2: {
    fontSize: 25,
    fontFamily: "Dosis-Regular",
    textAlign: "center",
    marginTop: 15
  },
  textfield: {
    margin: 10,
    marginBottom: 0,
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    fontSize: 16
  },
  button: {
    marginLeft: 10,
    marginRight: 10,
    padding: 5
  },
  foodsLabel: {
    paddingTop: 5,
    fontSize: 20,
    fontFamily: "Dosis-Regular",
    textAlign: "center"
  }
});
