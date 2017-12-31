import React, { Component } from 'react';
import { Container, Content, Text, View } from 'native-base';
import Footer from "./Footer";
import { Dimensions } from "react-native";
const deviceWidth = Dimensions.get("window").width;

export default class Notifications extends Component {
	render() {
		return (
			<Container>
				<View style={{alignItems:'center', justifyContent:'center', marginTop:deviceWidth/2}}>
					<Text style={{fontSize:25, fontWeight:'bold'}}>
						Nothing to see here. Yet.
					</Text>
				</View>
				<Content/>
				<Footer />
			</Container>
		);
	}
}
