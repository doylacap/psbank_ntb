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
    return (
      <View>
      <Header></Header>

        <ScrollView
          contentInsetAdjustmentBehavior="automatic">
          <View style={React_Styles.Container}>
            <Text style={React_Styles.Container_Title_Gray}>Submit a photo of your valid ID</Text>
          </View>
        </ScrollView>
      </View>
    );
  };

  export default ID_Submission_List_Screen;