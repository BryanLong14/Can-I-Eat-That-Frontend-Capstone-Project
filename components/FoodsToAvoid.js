import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Modal, TouchableHighlight } from "react-native";

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
    axios
      .get(API)
      .then(response => this.setState({ foods: response.data }))
      .catch(err => console.error(err));
  };

  deleteItem = id => {
    axios
      .delete(API + id, {
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify
      })
      .catch(err => console.error(err))
      .then(this.initData());
  };

  submitFoodToAPI = () => {
    axios
      .post(API, {
        name: this.state.textInput
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(err => console.log(err))
      .then(this.initData());
  };

  renderFoods = () => {
    return (
      <View>
        <Textfield style={styles.textfield} onChangeText={text => this.setState({ textInput: text })} />
        <AddFoodButton onPress={() => this.submitFoodToAPI()} style={styles.RaisedButton} />
        {/* Get the ternary operator here working to display a progress loading spinner */}
        {this.state.foods ? (
          this.state.foods.map(food => (
            <View key={food.id} style={styles.card}>
              <Text style={styles.foodsLabel}>{food.name.charAt(0).toUpperCase() + food.name.slice(1)}</Text>
              <View style={styles.toggleRow}>
                <Text style={styles.removeText}>Remove from list</Text>
                <MKSwitch checked={true} onPress={() => this.deleteItem(food.id)} />
              </View>
            </View>
          ))
        ) : (
          <Text>"Loading"</Text>
        )}
        <GoShoppingButton
          onPress={() => {
            console.log(this.state);
          }}
          style={styles.RaisedBottomButton}
        />
      </View>
    );
  };

  render() {
    return <View>{this.renderFoods()}</View>;
  }
}

export default FoodsToAvoid;

const styles = StyleSheet.create({
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

//// customize the material design theme
setTheme({
  primaryColor: MKColor.Indigo,
  primaryColorRGB: MKColor.RGBIndigo,
  accentColor: MKColor.Amber
});
