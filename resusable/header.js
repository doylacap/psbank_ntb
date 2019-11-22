/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

'use strict';
import Colors from './Colors';
import type {Node} from 'react';
import {Text, StyleSheet, ImageBackground, View} from 'react-native';
import React, { Component } from 'react';
import React_Styles from '../../../../../STYLES/ntb_styles';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class Header extends Component {
  render() {
    return (
      <View style={React_Styles.Header}>
      <ImageBackground
      style={React_Styles.ImageBgTop} source={require('../../../../../assets/images/open_account.jpg')}>
        <View style={{ backgroundColor: 'transparent', position: 'absolute', bottom: hp('3%'), left: wp('3.2%')  }}>
          <Text style={React_Styles.Header_Title}>Open an Account</Text>
          <Text style={React_Styles.Header_Subtitle}>{this.props.subHeader}</Text>
        </View>
      </ImageBackground>
      </View>
    );
  }
}
export default Header;
