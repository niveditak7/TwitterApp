import React, { Component } from 'react';
import { StatusBar, ScrollView, RefreshControl } from "react-native";
import { Container, Content, Card, View, Fab, Spinner } from 'native-base';
const kpdp=require("./../../../images/katyperry.png");
const kpimg=require("./../../../images/kpwitness.jpg");
const calvindp=require("./../../../images/calvinharris.jpg");
const calvinimg=require("./../../../images/calvinalbum.jpg");
const nasadp=require("./../../../images/Nasa.jpg");
const nasaimg=require("./../../../images/nasa_launch.jpg");
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Tweet from "./Tweet";
import Footer from "./Footer";
export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state={
      refreshing: false,
    };
  }

  _onRefresh() {
    this.setState({refreshing:true});
    setTimeout(()=>{
      this.setState({refreshing:false})},
    2400);
    }

  render() {
    return (
      <Container>
        <Content refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh.bind(this)}
            tintColor='#1DA1F2'
            colors={['#1DA1F2']}
          />
        }
        >
        <ScrollView >
          <Tweet dp={kpdp}
              username="Katy Perry "
              id="@katyperry"
              tweetTime="30m"
              tweetText="WITNESS! THE ALBUM! THE TOUR! ITS ALL HAPPENING!"
              hashtag=" #WITNESSKP4"
              image={kpimg}
              comments="250"
              retweets="3000"
              likes="5000"
          />
          <Tweet dp={nasadp}
              username="NASA "
              id="@NASA"
              tweetTime="Dec 21"
              tweetText="What would a launch look like if you were standing on the pad when it happened?"
              image={nasaimg}
              comments="78"
              retweets="143"
              likes="97"
          />
          <Tweet dp={calvindp}
              username="Calvin Harris "
              id="@CalvinHarris"
              tweetTime="Jun 30"
              tweetText="Funk Wav Bounces Vol. OUT NOW!!"
              image={calvinimg}
              comments="250"
              retweets="3000"
              likes="5000"
          />
        </ScrollView>
      </Content>
      <View style={{flex:0}}>
        <Fab direction="up"
          containerStyle={{flex:0}}
          style={{ backgroundColor: '#1DA1F2' }}
          position="bottomRight">
            <EntypoIcon name="feather" />
        </Fab>
      </View>
     <Footer />
   </Container>
  );}
}

