/**
 * OnBoarding NTB Styles
 * Vincent Nidea
 * Nov 19, 2019
 */

import {StyleSheet,} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp}
from 'react-native-responsive-screen';


/*DEFAULT COLORS*/
ntb_red = '#EE3031';
ntb_blue = '#0055A5';
ntb_gray = '#999999';
ntb_white = '#FFFFFF';
ntb_green ='#00C300';
ntb_light_gray = '#E0E1E1';
ntb_black = '#000000',

/*DEFAULT FONT*/
ntb_myriad_bold = 'myriad_pro_bold.ttf';
ntb_myriad_italic = 'myriad_pro_italic.ttf';
ntb_myriad_regular = 'myriad_pro_regular.ttf';


export default styles = StyleSheet.create({
      Container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: ntb_white
      },
      Container_New: {
        flex: 1, 
        bottom: hp('10%'),
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: ntb_white
      },

      // Initial Screen Styles
      ResponsiveBox: {
        bottom: hp('5%'),
        width: wp('90%'), 
        height: hp('20%'),
        justifyContent: 'center',
        flexDirection: 'column'
      },

      ButtonContainer: {
        width: wp('80%'), 
        height: hp('5.5%'),
        borderRadius: 15,
        marginTop: hp('4%'),
        backgroundColor: ntb_blue,
      },

      ButtonText: {
        color: ntb_white,
        fontWeight: 'bold',
        alignSelf: 'center', 
        fontSize: wp('4.1%'),
        fontFamily: 'Avenir',
        paddingTop: hp('1.5%'),
      },

      RedLine: {
        bottom: 0,
        width: wp('100%'),
        height: hp('1.5%'),
        position: 'absolute',
        backgroundColor: ntb_red, 
      },

      // Open Account Screen
      Open_Account_Container: {
        flex: 1,
        justifyContent: 'flex-start', 
        backgroundColor: 'transparent'
      },
      
      ImageBgTop: {
        width: wp('100%'),
        height: hp ('22%'),
        resizeMode: 'cover'
      },

      ButtonTextBlack: {
        color: ntb_white,
        fontSize: wp('5%'),
        textAlign: 'center',
        alignSelf: 'center',
        fontWeight: 'normal',
        fontFamily: 'Avenir'
      },

      Text_Blue_Title: {
        paddingLeft: wp('3%'),
        fontSize: wp('5%'),
        color : ntb_blue,
        fontWeight: 'bold',
        textAlign: 'left', alignSelf: 'stretch',
        fontFamily: 'Avenir'
      },
      
      Text_Black: {
        paddingLeft: wp('3%'),
        paddingRight: wp('2.5%'),
        fontSize: wp('3.8%'),
        color : ntb_black,
        textAlign: 'left', alignSelf: 'stretch',
        fontFamily: 'Avenir'
      },
      Text_Blue: {
        paddingLeft: wp('3%'),
        paddingRight: wp('2.5%'),
        fontSize: wp('3.8%'),
        color : ntb_blue,
        textAlign: 'left', alignSelf: 'stretch',
        fontFamily: 'Avenir'
      },

  });