import React, { Component } from "react";
import styles from "./../styles";
import { Container, Content, Card, CardItem, Text, Body, View, Right, Left, Header, Title, Button, Icon  } from "native-base";
import Animated from "react-native";
export default class MomentsScreen extends Component {
  // eslint-disable-line

 render() {
    // eslint-disable-line
    return (
      <Container>
        <Header style={styles.headerBck}>
          <Left style={styles.headerIconMargin}>
            <Button transparent onPress={()=> this.props.navigation.goBack()}>
              <Icon name='arrow-back'style={styles.blue} />
            </Button>
          </Left>
          <Body>
          <Title style={styles.title}>Moments</Title>
          </Body>
          <Right />
          <Right />
        </Header>
        <View style={styles.view}>
          <Text style={[styles.bold,{fontSize:25}]}>
            No moments.
          </Text>
        </View>
      </Container>
    );
  }
}
