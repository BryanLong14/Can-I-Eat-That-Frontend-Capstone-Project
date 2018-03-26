import React, { Component } from "react";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TabNavigator, TabBarBottom } from "react-navigation";

import Colors from "../constants/Colors";

import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";
import SettingsScreen from "../screens/SettingsScreen";

// Trying to pass props to ScanResults
// import ScanResults from "../components/ScanResults";
// const Tabs = TabNavigator({ ScanResults: { LinksScreen: props => <ScanResults {...props} foods={this.state.foods} /> } });

// Taken from FoodstoAvoid.js
// import { View, Text, TextInput, StyleSheet, ScrollView, Button } from "react-native";

// import axios from "axios";

// const API = "https://can-i-eat-that-api.herokuapp.com/api/foods/";

// class ListOfFoodsToAvoid extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       foodsToAvoid: []
//     };
//   }

//   componentDidMount = () => {
//     this.initData();
//   };

//   initData = () => {
//     axios({ method: "GET", url: API })
//       .then(response => {
//         console.log("RESPONSE DATA : ", response.data);
//         this.setState({ foodsToAvoid: response.data });
//       })
//       .catch(err => console.error(err));
//   };

//   render() {
//     return (
//       <View>
//         <ListOfFoodsToAvoid foods={this.state.foodsToAvoid} />
//       </View>
//     );
//   }
// }

export default TabNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Links: {
      screen: LinksScreen
    },
    Settings: {
      screen: SettingsScreen
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case "Home":
            iconName = Platform.OS === "ios" ? `ios-information-circle${focused ? "" : "-outline"}` : "md-information-circle";
            break;
          case "Links":
            iconName = Platform.OS === "ios" ? `ios-link${focused ? "" : "-outline"}` : "md-link";
            break;
          case "Settings":
            iconName = Platform.OS === "ios" ? `ios-options${focused ? "" : "-outline"}` : "md-options";
        }
        return <Ionicons name={iconName} size={28} style={{ marginBottom: -3 }} color={focused ? Colors.tabIconSelected : Colors.tabIconDefault} />;
      }
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: "bottom",
    animationEnabled: false,
    swipeEnabled: false
  }
);
