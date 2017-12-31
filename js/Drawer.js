import React from "react";
import { DrawerNavigator } from "react-navigation";
import Home from "./src/Home/HomeScreen.js";
import Profile from "./src/Profile/ProfileScreen.js";
import Lists from "./src/Lists/ListsScreen.js";
import Moments from "./src/Moments/MomentsScreen.js";
import Highlights from "./src/Highlights/HighlightsScreen.js";
import SideBar from "./src/SideBar";
import StackNav from "./StackNav";
import { Dimensions } from "react-native";

const deviceWidth = Dimensions.get("window").width;
const DrawerNav = DrawerNavigator(
  {
    StackNav:{
      screen: StackNav,
      navigationOptions:{
        drawerLabel:'StackNav',
      },
    },
    Profile: { screen: Profile },
    Lists: { screen: Lists },
    Moments: { screen : Moments },
    Highlights: { screen: Highlights }
  },
  {
    initialRouteName: "StackNav",
    drawerWidth: deviceWidth-75,
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

export default DrawerNav;
