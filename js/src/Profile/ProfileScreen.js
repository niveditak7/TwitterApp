import React, { Component } from "react";
import styles from "./../styles";

import { Container, Content, Text, Body, View, Right, Left, Header, Button, Icon, Title } from "native-base";
import Animated from "react-native";
export default class ProfileScreen extends Component {
  // eslint-disable-line

 render() {
    // eslint-disable-line
    return (
    <Container>
    <Header style={styles.headerBck}>
      <Left style={styles.headerIconMargin}>
        <Button transparent onPress={()=> this.props.navigation.goBack()}>
          <Icon name='arrow-back'style={{color:'#1DA1F2'}} />
        </Button>
      </Left>
      <Body>
      <Title style={styles.title}>Profile</Title>
      </Body>
      <Right />
      <Right />
    </Header>
     <Content padder style={{ marginTop: 0 }}>
        <View style={styles.view}>
          <Text style={[styles.bold,{fontSize:25}]}>
            Your Profile will show up here.
          </Text>
        </View>
      </Content>
   </Container>
    );
  }
}
