import React from "react";
import styles from "./../styles";
import { Footer, FooterTab, Button, Text, Left, Right, Icon} from 'native-base';
const GlobalFooter=()=>{
  return(
    <Footer style={styles.footer}>
      <FooterTab style={styles.footer} >
        <Left style={{flex:0}}>
          <Button transparent>
            <Text style={[styles.blue,styles.bold]}>All</Text>
          </Button>
        </Left>
        <Left style={{flex:0}}>
          <Button transparent>
            <Text style={[{color:'#787878'},styles.bold]}>Mentions</Text>
          </Button>
        </Left>
        <Left/>
        <Right/>
        <Button transparent >
          <Icon name='settings' style={styles.blue} />
        </Button>
      </FooterTab>
    </Footer>
  );
};

export default GlobalFooter;
