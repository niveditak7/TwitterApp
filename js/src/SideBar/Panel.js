import React, { Component } from 'react';
import {Button,Right,Thumbnail,List,ListItem} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import {StyleSheet,Text,View,Image,TouchableHighlight,Animated} from 'react-native';
import styles from "./../styles";
const dp = require("./../../../images/my_dp.jpg");

class Panel extends Component{
    constructor(props){
        super(props);

        this.icons = {
            'up'    : 'angle-up',
            'down'  : 'angle-down'
        };

        this.state = {

            expanded    : true,
            animation   : new Animated.Value()
        };
    }

    toggle(){
        let initialValue    = this.state.expanded? this.state.maxHeight + this.state.minHeight : this.state.minHeight,
            finalValue      = this.state.expanded? this.state.minHeight : this.state.maxHeight + this.state.minHeight;

        this.setState({
            expanded : !this.state.expanded
        });

        this.state.animation.setValue(initialValue);
        Animated.spring(
            this.state.animation,
            {
                toValue: finalValue
            }
        ).start();
    }

    _setMaxHeight(event){
        this.setState({
            maxHeight   : event.nativeEvent.layout.height
        });
    }

    _setMinHeight(event){
        this.setState({
            minHeight   : event.nativeEvent.layout.height+100
        });
    }


    _renderShow(){
      if(this.state.expanded===false){
        return(
          <View style={{ borderTopWidth:0.5, borderColor:'gainsboro' ,paddingTop:5, paddingBottom:10 }}>
          <List>
            <ListItem noBorder>
              <Text style={{color:'#1DA1F2'}}>Create a new account</Text>
            </ListItem>
            <ListItem noBorder>
              <Text style={{color:'#1DA1F2'}}>Add an existing account</Text>
            </ListItem>
          </List>
  				</View>
        );
      }
      else{
        return null;

      }
    }

    render(){
        let icon = this.icons['up'];

        if(this.state.expanded){
            icon = this.icons['down'];
        }

        return (
            <Animated.View style={[styles.container,{height: this.state.animation}]}>
              <View style={styles.container} onLayout={this._setMinHeight.bind(this)}>
                <View style={{paddingBottom:10}}><View>
                  <Thumbnail style={styles.drawerImage} source={dp} />

                <View style={{flexDirection:'row'}}>
                   <View style={{marginLeft:25}}>
                      <Text style={{fontWeight:'bold',fontSize:18}}>Nivedita Kamath</Text>
                      <Text style={{color:'grey', fontSize:14}}>@niveditak</Text>
                   </View>
                   <Right>
                     <Button transparent style={styles.button} onPress={this.toggle.bind(this)}>
                       <Icon name={icon} style={{fontSize:18, color:'#1da1f2',marginRight:25}} />
                     </Button>
                   </Right>
                   </View>
                  </View>
                   <Text />
                   <Text />
                   <View style={{flexDirection:'row',marginBottom:5, marginLeft:25}}>
                    <Text style={styles.bold}>97 </Text>
                    <Text style={styles.grey}>Following</Text>
                    <Text style={styles.bold}>  55 </Text>
                    <Text style={styles.grey}>Followers</Text>
                   </View>
                   </View>
                   <View style={{marginLeft:10}}>
                    {this._renderShow()}
                   </View>

                </View>
                <View style={styles.panelBody} onLayout={this._setMaxHeight.bind(this)}>
                    {this.props.children}
                </View>
              </Animated.View>
        );
    }
}



export default Panel;
