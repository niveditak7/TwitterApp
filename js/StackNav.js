import React, { Component } from "react";
import { BackAndroid,Drawer, StatusBar, Platform,View,Left,Right,Text} from "react-native";
import { variables,Icon,Button, Header, Item,Input} from "native-base";
import HomeScreen from "./src/Home/HomeScreen";
import Search from "./src/Home/Search";
import SearchPage from "./src/Home/SearchPage";
import SideBar from "./src/SideBar";
import TabNav from "./TabNav";
import { StackNavigator} from "react-navigation";
const StackNav = StackNavigator ({
    Page1:{ screen: TabNav },
    Search:{screen: Search},
    SearchPage :{screen:SearchPage,
    navigationOptions:({navigation})=>({
      header:<Header rounded style={{elevation:0, backgroundColor:'white'}}>
        <Button transparent style={{marginLeft:-12}} >
          <Icon name='arrow-back' onPress={() => {navigation.goBack()}} style={{color:'#1da1f2'}}/>
        </Button>
        <Item style={{flex:7}}>
          <Input placeholder="Search Twitter" />
        </Item>
      </Header>
    }),
  }
});

export default StackNav;
