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
import { RaisedTextButton } from 'react-native-material-buttons';
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
     

      
      <ScrollView style={{paddingLeft:wp('1.5%'), paddingRight:wp('1.5%'), paddingTop:wp('3%')}}
            contentInsetAdjustmentBehavior="automatic"
            horizontal={false}>
          <View style={React_Styles.Container}>
            <Text style={React_Styles.Container_Title_Gray_Personal}>{"Complete Name"}</Text>
            <View style={{paddingLeft:wp('3%'), paddingRight:wp('3%')}}> 
            <TextField
                fontSize = {13.5}
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
                returnKeyType='next'
                keyboardType='default'
                label='First Name'
              />
              <TextField
                fontSize = {12}
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
                returnKeyType='next'
                keyboardType='default'
                label='Middle Name'
              />
              <TextField
              fontSize = {12}
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
                returnKeyType='next'
                keyboardType='default'
                label='Last Name'
              />
            </View>
            <Text style={React_Styles.Container_Title_Gray_Personal}>{"Birthdate"}</Text>
            <View style={{paddingLeft:wp('3%'), paddingRight:wp('3%')}}> 
            </View>
              
            <Text style={React_Styles.Container_Title_Gray_Personal}>{"Contact Number"}</Text>
            <View style={{paddingLeft:wp('3%'), paddingRight:wp('3%')}}> 
            <TextField 
                fontSize = {12}
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
                returnKeyType='next'
                keyboardType='number-pad'
                returnKeyType='next'
                onChangeText={(text)=> this.onChanged(text)}
                characterRestriction={11} 
                />
              </View>
            <Text style={React_Styles.Container_Title_Gray_Personal}>{"Nationality"}</Text>
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
            

            <Text style={React_Styles.Container_Title_Gray_Personal}>{"Permanent Address"}</Text>
            <View style={{paddingLeft:wp('3%'), paddingRight:wp('3%')}}> 
            <TextField
                fontSize = {12}
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
                returnKeyType='next'
                label='House No./Building/Street'
              />
              <TextField
                fontSize = {12}
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
                returnKeyType='next'
                label='Barangay'
              />
              <TextField
                fontSize = {12}
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
                returnKeyType='next'
                label='City'
              />
              <TextField
                fontSize = {12}
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
                returnKeyType='next'
                label='Zipcode'
              />
              <TextField
                fontSize = {12}
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
                returnKeyType='next'
                label='Country'
              />
              </View>
            <Text style={React_Styles.Container_Title_Gray_Personal}>{"This is also my "}</Text>
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
  
