import React, { Component } from "react";

import { Container, Content, Text, View, Button  } from "native-base";
import Footer from "./Footer";
import Animated from "react-native";
export default class Messages extends Component {
  render() {
    return (
      <Container>
        <Content>
          <View style={{backgroundColor:'#1DA1F2'}}>
            <Text style={{textAlign:'center',justifyContent:'center', flex:10, color:'white', fontSize:25, padding:35}}>
              Talk privately with anyone who follows you. Start by adding your number and uploading your contacts.
            </Text>
            <Button rounded style={{alignSelf:'center',backgroundColor:'white',marginBottom:35}}>
              <Text style={{color:'#1da1f2'}}>Find friends</Text>
            </Button>
          </View>
      </Content>
      <Footer />
    </Container>
    );
  }
}
