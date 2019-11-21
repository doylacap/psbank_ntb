/**
 * OnBoarding NTB Styles
 * Vincent Nidea
 * Nov 19, 2019
 */

import React, { Component } from 'react';
import React_Styles from '../../../STYLES/ntb_styles';
import {View,Image,TouchableOpacity,Text} from 'react-native';

/* Navigation */
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

/* Initial Screen 2 */
import Initial_Screen_2 from '../INITIAL_SCREEN/Initial_Screen_2'

class Initial_Screen_1 extends Component {

  NavigateToInitialScreen_2 = () => {
   this.props.navigation.navigate('Initial_Screen_2');
  }
  
 render() {
   return (

     <View style = {React_Styles.Container}>

        <View style = {React_Styles.Container_New}>
           <Image
             style={React_Styles.ResponsiveBox}
             source={require('../../../assets/images/psbank_logo.jpg')} />


     <View style={{ justifyContent: 'center', textAlign: 'center' }}>
           <TouchableOpacity style={React_Styles.ButtonContainer} onPress={this.NavigateToInitialScreen_2}>
           <Text style={React_Styles.ButtonText}>Open an account
           </Text>
           </TouchableOpacity>
     </View>
     

     <View style={{ justifyContent: 'center', textAlign: 'center' }}>
           <TouchableOpacity style={React_Styles.ButtonContainer}>
           <Text style={React_Styles.ButtonText}>Use PSBank Mobile
           </Text>
           </TouchableOpacity>
     </View>
     </View>

     <View style={React_Styles.RedLine} />

     </View>
           
   );
   }
};

const ONBOARDING_INITIAL_SCREEN = createStackNavigator ({
  Initial_Screen_1: {
    screen: Initial_Screen_1, navigationOptions: { header: null }
  },
  Initial_Screen_2: {
    screen: Initial_Screen_2, navigationOptions: { header: null }
  },
});

const ON_BOARDING = createAppContainer(ONBOARDING_INITIAL_SCREEN);

export default ON_BOARDING;