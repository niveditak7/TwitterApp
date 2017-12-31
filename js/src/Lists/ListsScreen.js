import React, { Component } from "react";

import { Container, Content, Card, CardItem, Text, Body, View, Header, Title, Left, Button, Icon, Right } from "native-base";
import styles from "./../styles"
import { Dimensions } from "react-native";
const deviceWidth = Dimensions.get("window").width;
export default class ListsScreen extends Component {
  render() {
    return (
      <Container>
        <Header style={styles.headerBck}>
          <Left style={styles.headerIconMargin}>
            <Button transparent onPress={()=> this.props.navigation.goBack()}>
              <Icon name='arrow-back'style={styles.blue} />
            </Button>
          </Left>
          <Body>
          <Title style={styles.title}>Lists</Title>
          </Body>
          <Right />
          <Right />
        </Header>
        <View style={styles.view}>
          <Text style={[styles.bold,{fontSize:25}]}>
            No lists.
          </Text>
        </View>
      </Container>
    );
  }
}
