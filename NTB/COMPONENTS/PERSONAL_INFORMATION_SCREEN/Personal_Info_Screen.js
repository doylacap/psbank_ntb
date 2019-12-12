/**
 * Personal Information Screen
 * Vincent Nidea
 * Nov 21, 2019
 */

import React, { Component } from 'react';
import React_Styles from '../../../STYLES/ntb_styles';
import {Text,ImageBackground} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Header } from 'react-native/Libraries/NewAppScreen';

import {
  AppRegistry,
  ScrollView,
  View,
  SafeAreaView,
  Platform,
  TextInput
} from 'react-native';
import { TextField } from 'react-native-material-textfield';

/* Navigation */
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

let styles = {
  scroll: {
    backgroundColor: 'transparent',
  },

  contentContainer: {
    padding: hp('1%')
  },
  buttonContainer: {
    paddingTop: 8,
    margin: 8,
  },

  safeContainer: {
    flex: 1,
    backgroundColor: '#E8EAF6',
  },
};

let defaults = {
  Nationality: 'Filipino',
  emailadd: 'vincentnidea30@gmail.com',

  /*DEFAULT COLORS*/
ntb_red: '#EE3031',
ntb_blue:'#0055A5',
ntb_gray : '#999999',
ntb_white : '#FFFFFF',
ntb_green :'#00C300',
ntb_light_gray : '#E0E1E1',
ntb_black : '#000000',
};


export default class Personal_Info_Screen extends Component{
  constructor(props){
    super(props)
    this.state = {date:"2019-11-28"}
  }

  onChanged (text) {
    this.setState({
        mobile: text.replace(/[^0-9]/g, ''),
    });
  }

  render(){
    return (
      <View style={{ flex: 1 }}>
      <Header subHeader='Personal Information'></Header>
      <View>
        <ImageBackground style={React_Styles.ID_Submission_List_Breadcrumbs} source={require('../../../assets/images/breadcrumbs/bread_personal.png')}>
        </ImageBackground>
      </View>
     
      <ScrollView style={{paddingLeft:wp('1.5%'), paddingRight:wp('1.5%'), paddingTop:wp('2%')}}
            contentInsetAdjustmentBehavior="automatic"
            horizontal={false}>
          <View style={React_Styles.Container}>
            <Text style={React_Styles.Container_Title_Gray_Personal}>{"Complete Name"}</Text>
            <View> 
            <TextField
                fontSize = {hp('2.1%')}
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
                returnKeyType='next'
                keyboardType='default'
                label='First Name'
                textColor={ntb_black}
                tintColor ={ntb_blue}
              />
              <TextField
                fontSize = {hp('2.1%')}
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
                returnKeyType='next'
                keyboardType='default'
                label='Middle Name'
                textColor={ntb_black}
                tintColor ={ntb_blue}
              />
              <TextField
              fontSize = {hp('2.1%')}
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
                returnKeyType='next'
                keyboardType='default'
                label='Last Name'
                textColor={ntb_black}
                tintColor ={ntb_blue}
              />

            <Text style={React_Styles.Container_Title_Gray_Personal}>{"Birthdate"}</Text>


            <Text style={React_Styles.Container_Title_Gray_Personal}>{"Contact Number"}</Text>
            <TextField 
                fontSize = {hp('2.1%')}
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
                returnKeyType='next'
                keyboardType='number-pad'
                returnKeyType='next'
                onChangeText={(text)=> this.onChanged(text)}
                characterRestriction={11}
                textColor={ntb_black}
                tintColor ={ntb_blue}/>
            
            <Text style={React_Styles.Container_Title_Gray_Personal}>{"Email Address"}</Text>
            <TextField 
                fontSize = {hp('2.1%')}
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
                returnKeyType='next'
                value={defaults.emailadd}
                textColor={ntb_black}
                tintColor ={ntb_blue}
              />

            <Text style={React_Styles.Container_Title_Gray_Personal}>{"Nationality"}</Text>
            <TextField 
                fontSize = {hp('2.1%')}
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
                returnKeyType='next'
                value={defaults.Nationality}
                disabled={true}
              />

              <Text style={React_Styles.Container_Title_Gray_Personal}>{"Permanent Address"}</Text>
              <TextField
                fontSize = {hp('2.1%')}
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
                returnKeyType='next'
                label='House No./Building/Street'
                textColor={ntb_black}
                tintColor ={ntb_blue}
              />
              <TextField
                fontSize = {hp('2.1%')}
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
                returnKeyType='next'
                label='Barangay'
                textColor={ntb_black}
                tintColor ={ntb_blue}
              />
              <TextField
                fontSize = {hp('2.1%')}
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
                returnKeyType='next'
                label='City'
                textColor={ntb_black}
                tintColor ={ntb_blue}
              />
              <TextField
                fontSize = {hp('2.1%')}
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
                returnKeyType='next'
                label='Zipcode'
                textColor={ntb_black}
                tintColor ={ntb_blue}
              />
              <TextField
                fontSize = {hp('2.1%')}
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
                returnKeyType='next'
                label='Country'
                textColor={ntb_black}
                tintColor ={ntb_blue}
              />
            </View>
            
            <Text style={React_Styles.Container_Title_Gray_Personal}>{"This is also my mailing address "}</Text>
            <View> 
            <TextField 
                fontSize = {12}
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
                returnKeyType='next'
                value={defaults.Nationality}
                disabled={true}
              />
            </View>
            </View>
        </ScrollView>
        </View>
    
     )
   }
  }
  
