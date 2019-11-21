/**
 * OnBoarding NTB Styles
 * Vincent Nidea
 * Nov 19, 2019
 */

import React, { Component } from 'react';
import React_Styles from '../../../STYLES/ntb_styles';
import {View,Image,TouchableOpacity,Text,ImageBackground} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

/* Navigation */
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';


export default class Open_Account_Welcome extends Component {

  NavigateToOpenAccountWelcome = () => {
   this.props.navigation.navigate('OpenAccountWelcome');
  }

 render() {
   return (

     <View style = {React_Styles.Open_Account_Container}>

        <ImageBackground
          style={React_Styles.ImageBgTop} source={require('../../../assets/images/open_account.jpg')}>
          <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'transparent' }}>
            <View style={{ backgroundColor: 'transparent', position: 'absolute', bottom: hp('3%'), left: wp('3.2%')  }}>
              <Text style={React_Styles.ButtonTextBlack}>Open an Account</Text></View>
            </View>
        </ImageBackground>
              <View style={{borderBottomColor: 'red',borderBottomWidth: hp('1.7%'),marginBottom: 10}}/>
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

              <View style={{ backgroundColor: 'transparent', top: hp('4%') }}>

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

                  <TouchableOpacity style={React_Styles.ButtonContainer}>
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