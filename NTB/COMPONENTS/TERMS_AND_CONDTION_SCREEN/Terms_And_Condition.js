/**
 * Terms and Condition
 * John Oliver N. Lacap
 * Nov 20, 2019
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

const Terms_And_Condition: () => React$Node = () => {
    return (
      <>
        <SafeAreaView style = {React_Styles.Open_Account_Container}>
        <Modal isVisible={false} style={styles.modal} animationIn="slideInUp">
          <View>
          <Text style={styles.modalTitle}>Important Reminder</Text>
          <View style={styles.horizontalLine}></View>
          <Text style={styles.modalContent}>Before you proceed, please be reminded that the Online Account Opening facility is currently limited to Filipino citizen of legal age</Text>
          <Text style={styles.modalContent}s>Continue your Online Account Opening?</Text>
          <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Yes, I am a Filipino Citizen</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>No, I am not a Filipino Citizen</Text>
          </TouchableOpacity>
          </View>
        </Modal>
        <Header></Header>
        <View style={styles.sendEmail}>
           <Switch value={true}></Switch>
        </View>  
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Terms and Conditions</Text>
                <Text style={styles.sectionDescription}>
                I (the Depositor) hereby certify that all personal, sensitive, privileged, financial and other information (collectively referred to hereinafter as the “information”) contained herein and in all related documents provided by me in the course of establishing relationship and dealing with the Philippine Savings Bank (the Bank) are true, correct, and voluntarily given. I shall promptly communicate to the Bank any changes in the information.
                </Text>
                <Text style={styles.sectionDescription}>
                In providing the Information and related documents to, and in opening any deposit account with the Bank, the Depositor hereby authorizes the Bank, without need of prior notice, to receive, use, process, store, make profile, and/or share any of its affiliates and/or subsidiaries within the Metrobank Group, or its agents or service providers, or third parties which provide related services or have contractual obligations with the Bank, or any government agency/regulatory body/branch, which in turn is/are authorized to receive, the information, relevant account information/data/opinion pertaining to the depositor, including but not limited to personal circumstances, privileged information, sensitive personal information, account opening date, account balances and any and all other information pertaining to all Account/s now existing or which may hereafter to be opened whether or not assigned as collateral, for the following purposes : (a) in order to commence and facilitate the efficient delivery, administration, operation and/or implementation of deposit and other products and services of the Bank; (b) for the protection of the Depositor or the Bank against fraudulent, unauthorized, or illegal transactions; (c) in the validation, verification, and/or updating of the Information and related Documents; (d) in order for the Bank to enforce its rights or perform its obligation by reason of any law, rules and regulations, contract or orders from any court or quasi-judicial and administrative offices with corresponding duty to keep such information confidential in accordance with the Bank’s Data Privacy Policy; (e) in the prosecution or defense of the Bank or its directors/officers/employees with regards to disputes or claims pertaining to the product and services of the Bank; and (f) in order for the Bank, its affiliates and/or subsidiaries within the Metrobank Group to offer or provide other related products and services to the Client, including but not limited to cross-referencing, cross selling, status inquiry, making credit opinion and evaluation. Such consent and authorization shall remain valid and subsisting unless otherwise revoked or cancelled in writing.
                </Text>
                <Text style={styles.sectionDescription}>In granting the above authorities, the Depositor hereby waives his rights to confidentiality and privacy of the information and such other rights as may be provided under Republic Act (RA) 1405 (Law on the Secrecy of Bank Deposits). RA No. 6426 (The Foreign Currency Deposit Act), RA No. 8971 (General Banking Law of 2000), RA No. 10173 (Data Privacy Act of 2012), all other applicable laws which maybe in conflict with the Bank in carrying out the said authorities.</Text>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  };

  export default Terms_And_Condition;