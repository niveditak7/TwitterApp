import React, { Component } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet,ScrollView } from 'react-native';
import { Content, Text, List, ListItem, Container, Left, Right, Button, View, Footer, FooterTab } from "native-base";
import Panel from "./Panel";
import styles from './../styles';
const datas = [
  {
		name: "Profile",
		route:'Profile',
		icon: "user",
	},
	{
		name: "Lists",
		route: "Lists",
		icon: "list",
	},
	{
		name: "Moments",
		route: "Moments",
		icon: "bolt",
	},
	{
		name:"Highlights",
		route:"Highlights",
		icon:"clone"
	}
  ];

  class SideBar extends Component {
	render() {
		return (
      <Container>
			   <Content style={{ backgroundColor: "white", top: -1 }}>
          <ScrollView>
            <Panel>
					    <View style={{paddingTop:5, paddingBottom:5, borderTopWidth:0.5, borderColor:'gainsboro'}}>
						    <List
							    dataArray={datas}
							    renderRow={data =>
							    <ListItem button noBorder onPress={() => this.props.navigation.navigate(data.route)}>
								    <Left>
									    <Icon active name={data.icon} style={ styles.sidebarIcon } />
									      <Text style={styles.drawerText}>
										      {data.name}
									      </Text>
								      </Left>
							</ListItem>}
						>
					</List>
				</View>
				<View style={{ borderTopWidth:0.5, borderColor:'gainsboro' ,paddingTop:5, paddingBottom:10 }}>
					<List>
						<ListItem noBorder>
							<Text style={styles.drawerText}>Settings and privacy</Text>
						</ListItem>
						<ListItem noBorder>
							<Text style={styles.drawerTtext}>Help Center</Text>
						</ListItem>
					</List>
				</View>
        </Panel>
      </ScrollView>

			</Content>

			<Footer style={styles.footer}>
        <FooterTab style={{ backgroundColor:'white'}}>
					<Button transparent>
            <Icon name="moon-o" style={[styles.blue,{fontSize:20}]}/>
          </Button>
					<Left/><Right/>
					<Button>
            <Icon name="qrcode" style={[styles.blue,{fontSize:20 }]} />
          </Button>
        </FooterTab>
      </Footer>
		</Container>
	);
}
}

export default SideBar;
