import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";

const API = "https://can-i-eat-that-api.herokuapp.com/api/foods/";


class FoodsToAvoid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: [],
      textInput: "",
      modalVisible: false
    };
  }

  componentDidMount = () => {
    this.initData();
  };

  initData = () => {
  }

  deleteItem = id => {
  }

  submitFoodToAPI = () => {
  }

  render() {
    return <View>
        <ScrollView style={styles.container}>
          {/* <Textfield style={styles.textfield} onChangeText={text => this.setState({ textInput: text })} /> */}
          <Button title="Press me" onPress={() => this.submitFoodToAPI()} style={styles.RaisedButton} />
          {this.state.foods.map(food => <View key={food.id} style={styles.card}>
                <Text style={styles.foodsLabel}>{food.name.charAt(0).toUpperCase() + food.name.slice(1)}</Text>
                <View style={styles.toggleRow}>
                  {/* <MKSwitch checked={true} onPress={() => this.deleteItem(food.id)} /> */}
                  <Button title="Press me" onPress={this._handleButtonPress} />;
                </View>
              </View>)}
        </ScrollView>
      </View>;
  }
}

export default FoodsToAvoid;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  card: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#d6d7da",
    margin: 10,
    borderRadius: 20
  },
  textfield: {
    height: 50,
    margin: 15
  },
  RaisedButton: {
    marginLeft: 10,
    marginRight: 10,
    padding: 15,
    borderRadius: 20,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowColor: "black"
  },
  RaisedBottomButton: {
    marginLeft: 10,
    marginRight: 10,
    padding: 15,
    borderRadius: 20,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowColor: "black"
  },
  toggleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  foodsLabel: {
    paddingTop: 10,
    fontSize: 20,
    textAlign: "center"
  },
  removeText: {
    textAlign: "center",
    color: "#666666",
    marginTop: 10,
    marginBottom: 20,
    fontSize: 12,
    fontWeight: "300"
  }
});