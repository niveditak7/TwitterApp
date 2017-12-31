import React, { Component } from 'react';
import { StatusBar } from "react-native";
import { Image, Dimensions } from "react-native";
import { Content, Card, CardItem, Text, View, Left, Right, Body, Icon, Button, Thumbnail } from 'native-base';
import { StyleSheet } from "react-native";
import FAIcon from "react-native-vector-icons/FontAwesome";
import EvilIcon from "react-native-vector-icons/EvilIcons";
import Ionicon from "react-native-vector-icons/Ionicons";
import EntypoIcon from 'react-native-vector-icons/Entypo';
const deviceWidth = Dimensions.get("window").width;
const Tweet =(props)=>{
 const  { dp, username, id, tweetTime, tweetText, hashtag, image, comments, retweets, likes } = props;

return(
    <Card style={{marginTop:-3}}>
      <CardItem >
        <Left>
            <Thumbnail source={dp} />
            <Body>
              <View style={{flexDirection:'row'}} >
                <Text style={styles.username}>{username}<FAIcon name="check-circle" style={styles.checkColor} /></Text>
                <Text style={styles.info}> {id}<EntypoIcon name='dot-single' /> {tweetTime}</Text>
                <Right><FAIcon name="angle-down" style={{fontSize:18}}/></Right>
              </View>
              <Text >
                {tweetText}
                <Text style={{color:'#1DA1F2'}}>{hashtag}</Text>
              </Text>
            </Body>
        </Left>
      </CardItem>
      <CardItem style={styles.itemAlign}>
        <Body>
          <Image
            style={styles.img}
            source={image}
          />
        </Body>
      </CardItem>
      <CardItem style={styles.itemAlign}>
        <Left>
          <Button iconLeft transparent>
            <EvilIcon name="comment" style={styles.iconSize} />
            <Text style={styles.iconText}>{comments}</Text>
          </Button>
        </Left>
        <Left>
          <Button iconLeft transparent>
            <EvilIcon name="retweet" style={styles.iconSize}/>
            <Text style={styles.iconText}>{retweets}</Text>
          </Button>
        </Left>
        <Left>
          <Button transparent>
            <EvilIcon name="heart" style={styles.iconSize} />
            <Text style={styles.iconText}>{likes}</Text>
          </Button>
        </Left>
        <Left>
          <Button iconLeft transparent>
            <Ionicon name="ios-mail-outline" style={styles.iconSize} />
          </Button>
        </Left>
      </CardItem>
    </Card>
  );
};
const styles=StyleSheet.create({
  card:{
    marginTop:-3
  },
  username:{
    fontWeight:'bold'
  },
  checkColor:{
    color:'#1DA1F2'
  },
  info:{
    color:'grey'
  },
  itemAlign:{
    paddingTop:0,
    paddingLeft:80
  },
  img:{
    padding:20,
    height: 150,
    resizeMode: "cover",
    width: deviceWidth / 1.35,
    marginVertical: 5,
  },
  iconSize:{
    fontSize:24
  },
  iconText:{
    paddingLeft:3,
    color:'grey'
  }
});

export default Tweet;
