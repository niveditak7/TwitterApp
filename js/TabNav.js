import React, { Component } from "react";
import { BackAndroid,Drawer, StatusBar, Platform,View } from "react-native";
import { variables,Icon,Button,Input,Left,Right,Text,Item, Thumbnail, Header} from "native-base";
import Search from './src/Home/Search';
import SearchPage from "./src/Home/SearchPage";
import NotifPage from './src/Home/Notifications';
import MsgPage from './src/Home/Messages';
import HomeScreen from "./src/Home/HomeScreen";
import SideBar from "./src/SideBar";
import styles from "./src/styles";
import { StackNavigator, TabNavigator } from "react-navigation";
import StackNage from "./StackNav";
import DrawerExample from "./Drawer";
const dp=require("./../images/my_dp.jpg");

const TabNav = TabNavigator ({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions:({navigation})=>({
      title: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="home" style={{color: tintColor}} />
      ),
      headerStyle:{
        elevation:0
      },
      headerLeft:<View style={{flexDirection:'row'}} >
      <Button transparent onPress={() => {navigation.navigate("DrawerOpen")}}>
        <Thumbnail source={dp} small style={styles.headerIconMargin}/>
      </Button>
    </View>
        
    })
  },
  Search:{
    screen: Search,
    navigationOptions: ({navigation})=>({
      title: 'Home',
      headerStyle:{
        elevation:0
      },
      header: <Header rounded style={{elevation:0, backgroundColor:'white'}}>
      <Button transparent onPress={() => {navigation.navigate("DrawerOpen")}}>
        <Thumbnail source={dp} small style={{marginLeft:-6, marginRight:3}} />
      </Button>
      <Item style={{flex:5}}>
        <Input placeholder="   Search Twitter " onFocus={() => {navigation.navigate("SearchPage")}} style={{backgroundColor:'#eef0f1', borderRadius:20, height:40}}/>
        <Icon name="md-person-add" style={{color:'#1DA1F2', marginLeft:10}} />
      </Item>
    </Header>
,
      tabBarIcon: ({ tintColor }) => (
        <Icon name="search" size={24} color="#fff" style={{color: tintColor}} />
      )
    })
  },
  NotifPage:{
    screen: NotifPage,
    navigationOptions: ({navigation})=>({
      title: 'Notifications',
      headerStyle:{
        elevation:0
      },
      headerLeft:
        <View style={{flexDirection:'row'}} >
          <Button transparent onPress={() => {navigation.navigate("DrawerOpen")}}>
            <Thumbnail source={dp} small style={styles.headerIconMargin}/>
          </Button>
        </View>,
      tabBarIcon: ({ tintColor }) => (
        <Icon name="notifications" style={{color: tintColor}} />
      )
    })
  },
  MsgPage:{
    screen: MsgPage,
    navigationOptions: ({navigation})=>({
      title: 'Messages',
      headerStyle:{
        elevation:0
      },
      headerLeft:
        <View style={{flexDirection:'row'}} >
          <Button transparent onPress={() => {navigation.navigate("DrawerOpen")}}>
            <Thumbnail source={dp} small style={styles.headerIconMargin}/>
          </Button>
        </View>,
      tabBarIcon: ({ tintColor }) => (
        <Icon name="mail" style={{color: tintColor}} />
      )
    })
   },
 },
 {
   tabBarPosition: 'top',
   tabBarOptions: {
    showIcon:true,
    showLabel:false,
    indicatorStyle:{
      borderBottomColor:'#1DA1F2',
      borderBottomWidth:2
    },
    activeTintColor:'#1DA1F2',
    inactiveTintColor: 'grey',
    style:{
      backgroundColor: 'white'
    }
  }
});

export default TabNav;
