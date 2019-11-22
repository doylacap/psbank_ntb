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
import Open_Account_Welcome from '../OPEN_ACCOUNT_SCREEN/Open_Account_Welcome';

class Initial_Screen_2 extends Component {

  NavigateToInitialScreen_2 = () => {
   this.props.navigation.navigate('Open_Account_Welcome');
  }
  
 render() {
   return (

     <View style = {React_Styles.container_bins_bins}>

        <View style = {React_Styles.Container_New}>
           <Image
             style={React_Styles.ResponsiveBox}
             source={require('../../../assets/images/psbank_logo.jpg')} />


     <View style={{ justifyContent: 'center', textAlign: 'center' }}>
           <TouchableOpacity style={React_Styles.ButtonContainer} onPress={this.NavigateToInitialScreen_2}>
           <Text style={React_Styles.ButtonText}>I am new to PSBank
           </Text>
           </TouchableOpacity>
     </View>
     

     <View style={{ justifyContent: 'center', textAlign: 'center' }}>
           <TouchableOpacity style={React_Styles.ButtonContainer}>
           <Text style={React_Styles.ButtonText}>I am an existing PSBank client
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
  Initial_Screen_2: {
    screen: Initial_Screen_2, navigationOptions: { header: null }
  },
  Open_Account_Welcome: {
    screen: Open_Account_Welcome , navigationOptions: { header: null }
  },
});

const ON_BOARDING = createAppContainer(ONBOARDING_INITIAL_SCREEN);

export default ON_BOARDING;