/**
 * Terms and Condition
 * John Oliver N. Lacap
 * Nov 21, 2019
 */

import React, { Component } from 'react';
import React_Styles from '../../../STYLES/ntb_styles';
import {View,Image,TouchableOpacity,Text,ImageBackground, SafeAreaView, Switch, ScrollView} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Header } from 'react-native/Libraries/NewAppScreen';

/* Navigation */
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Modal from "react-native-modal";

const ID_Submission_List_Screen: () => React$Node = () => {
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
            <Text style={React_Styles.Container_Title_Gray}>Submit a photo of your valid ID</Text>
            <View style={React_Styles.ID_Submission_List_Container}>
            <Text style={React_Styles.ID_Submission_List_Container_Title}>Choose a valid ID</Text>
            {
               this.state.names.map((item, index) => (
                  <TouchableOpacity
                     key = {item.id}
                     style = {React_Styles.ID_Submission_List_Items}
                    >
                     <Text style = {React_Styles.ID_Submission_List_Text}>
                        {item.name}
                     </Text>
                     <Text style = {React_Styles.ID_Submission_List_Text}>
                        >
                     </Text>
                  </TouchableOpacity>
               ))
            }
         </View>
          </View>
        </View>
      </View>
    );
  };

  export default ID_Submission_List_Screen;