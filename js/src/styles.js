const React = require("react-native");
const { StyleSheet, Platform, Dimensions } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
export default {
  headerBck:{
    backgroundColor:'white',
  },
  title:{
    color:'black'
  },
  bold:{
    fontWeight:'bold'
  },
  view:{
    alignItems:'center',
    justifyContent:'center',
    marginTop:deviceWidth/2
  },
  headerIconMargin:{
    marginLeft:10
  },
  blue:{
    color:'#1DA1F2'
  },
  footer:{
    backgroundColor:'white', 
    borderTopWidth:0.5,
    borderColor:'gainsboro',
    height:45
  },
  drawerImage: {
    marginLeft:20,
    marginTop:10,
    marginBottom:10
  },
  sidebarIcon: {
    color: "#777",
    fontSize: 20,
    width: 30,
    marginLeft: 5
  },
  drawerText: {
    fontWeight: Platform.OS === "ios" ? "500" : "400",
    fontSize: 16,
    marginLeft:0
  },
  bold:{
    fontWeight:'bold'
  },
  grey:{
    color:'grey'
  },
  container   : {
      backgroundColor: '#fff',

  },
  title       : {
      flex    : 1,
      padding : 10,
      color   :'#2a2f43',
      fontWeight:'bold'
  },
  panelBody        : {
      padding     : 10,
      paddingTop  : 0
  }

  
};
