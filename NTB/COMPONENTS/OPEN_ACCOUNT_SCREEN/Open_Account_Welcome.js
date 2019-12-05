/**
 * OnBoarding NTB Styles
 * Vincent Nidea
 * Nov 19, 2019
 */

import React, { Component } from 'react';
import React_Styles from '../../../STYLES/ntb_styles';
import { Header } from 'react-native/Libraries/NewAppScreen';
import {View,Image,TouchableOpacity,Text,ImageBackground} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

/* Navigation */
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Open_Account_Terms from '../TERMS_AND_CONDTION_SCREEN/Terms_And_Condition';


class Open_Account_Welcome extends Component {

  NavigateToOpenAccountTerms = () => {
   this.props.navigation.navigate('Open_Account_Terms');
  }

 render() {
   return (

     <View style = {React_Styles.Open_Account_Container}>

          <Header ></Header>
          <View>


        <View style={{ backgroundColor: 'transparent', top: hp('2%') , alignContent: 'center', alignItems: 'center',justifyContent:'center' }}>

          <Text style={React_Styles.Text_Blue_Title}>{"Welcome to PSBank Online"}</Text>
          <Text style={React_Styles.Text_Blue_Title}>{"Account Opening Facility"}</Text>

        

              <View style={{ backgroundColor: 'transparent', top: hp('4%') }}>

                   <Text style={React_Styles.Text_Black}>{"You can now open a PSBank Prepaid Account online."}</Text>

              <View style={{ backgroundColor: 'transparent', top: hp('1.5%') }}>

                   <Text style={React_Styles.Text_Black}>{"PSBank Prepaid Account allows you to save,transfer funds, pay bills, and reload your mobile without a maintaining balance."}</Text>

              <View style={{ backgroundColor: 'transparent', top: hp('1.5%') }}>

                   <Text style={React_Styles.Text_Black}>{"Simply fill out the Online Account Opening form."}</Text>

              <View style={{ backgroundColor: 'transparent', top: hp('3%') }}>

                   <Text style={React_Styles.Text_Black}>{"For more information, please contact our customer experience hotline at "}
                   <Text style={React_Styles.Text_Blue}>{"(02) 8845-8888"}</Text>
                   <Text style={React_Styles.Text_Black}>{"."}</Text></Text>

              <View style={{ backgroundColor: 'transparent', top: hp('1.5%') }}>

                   <Text style={React_Styles.Text_Black}>{"You may also reach us online through the "}
                   <Text style={React_Styles.Text_Blue}>{"PSBank LiveChat "}</Text>
                   <Text style={React_Styles.Text_Black}>{"on our "}</Text>
                   <Text style={React_Styles.Text_Blue}>{"website"}</Text>
                   <Text style={React_Styles.Text_Black}>{"."}</Text></Text>

              <View style={{ backgroundColor: 'transparent', top: hp('8%') ,alignItems: 'center'}}>

                  <TouchableOpacity style={React_Styles.ButtonContainer} onPress={this.NavigateToOpenAccountTerms}>
                  <Text style={React_Styles.ButtonText}>Proceed</Text>
                  </TouchableOpacity>

              </View>
              </View>
              </View>
              </View>
              </View>
              </View>

        </View>
        
        
     </View>


     </View>
           
   );
   }
};

const ONBOARDING_INITIAL_SCREEN = createStackNavigator ({
  Open_Account_Welcome: {
    screen: Open_Account_Welcome, navigationOptions: { header: null }
  },
  Open_Account_Terms: {
    screen: Open_Account_Terms, navigationOptions: { header: null }
  },
});

const ON_BOARDING = createAppContainer(ONBOARDING_INITIAL_SCREEN);

export default ON_BOARDING;