/**
 * Terms and Condition
 * John Oliver N. Lacap
 * Nov 21, 2019
 */

import React, { Component } from 'react';
import React_Styles from '../../../STYLES/ntb_styles';
import {View,Image,TouchableOpacity,Text,ImageBackground } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Header } from 'react-native/Libraries/NewAppScreen';

/* Navigation */
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const ID_Submission_Note_Screen: () => React$Node = () => {
    state = {
      names: [
         {
            id: 0,
            name: 'Philippine Passport',
         },
         {
            id: 1,
            name: 'Driver License',
         },
         {
            id: 2,
            name: 'UMID',
         },
         {
            id: 3,
            name: 'Firearms License',
         },
         {
            id: 4,
            name: 'Company ID',
         },
         {
            id: 5,
            name: 'School ID',
         },
         {
            id: 6,
            name: 'PRC',
         }
      ]
   }
      return (
        <View>
        <Header subHeader='ID Submission'></Header>
        <View>
          <ImageBackground style={React_Styles.ID_Submission_List_Breadcrumbs} source={require('../ID_SUBMISSION_LIST_SCREEN/bread_id.png')}>
          </ImageBackground>
        </View>
          <View
            contentInsetAdjustmentBehavior="automatic">
            <View style={React_Styles.Container}>
              <Text style={React_Styles.Container_Title_Gray}>Please take note of the following</Text>
              <View>
                  <Text style={React_Styles.ID_Submission_Note_Text}>Make sure you're in a well lit area</Text>
                  <Text style={React_Styles.ID_Submission_Note_Text}>Turn off your camera flash</Text>
                  <Text style={React_Styles.ID_Submission_Note_Text}>Make sure ID surface has no glare</Text>
                  <TouchableOpacity style={React_Styles.ButtonContainer}>
                     <Text style={React_Styles.ButtonText}>Yes, I am a Filipino Citizen</Text>
                  </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      );
    };
  
    export default ID_Submission_Note_Screen;