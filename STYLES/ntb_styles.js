/**
 * OnBoarding NTB Styles
 * Vincent Nidea
 * Nov 15, 2019
 */

import {StyleSheet,} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp}
from 'react-native-responsive-screen';


/*DEFAULT COLORS*/
ntb_red: '#EE3031';
ntb_blue: '#0055A%';
ntb_gray: '#999999';
ntb_white: '#FFFFFF';
ntb_green: '#00C300';
ntb_light_gray: '#E0E1E1';

/*DEFAULT FONT*/
ntb_myriad_bold: 'myriad_pro_bold.ttf';
ntb_myriad_italic: 'myriad_pro_italic.ttf';
ntb_myriad_regular: 'myriad_pro_regular.ttf';


export default styles = StyleSheet.create({
      Container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: ntb_white
      },

      // Initial Screen Styles
      ResponsiveBox: {
        width: wp('90%'), 
        height: hp('20%'),
        flexDirection: 'column'
      },

      ButtonContainer: {
        width: wp('75%'), 
        height: hp('6%'),
        borderRadius: 15,
        marginTop: hp('2%'), 
        backgroundColor: '#0055a5',
      
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
      ImageBgTop: {
        width: wp('100%'),
        height: hp ('25%'),
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

  });