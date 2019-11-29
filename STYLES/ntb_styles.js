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
        justifyContent: 'center',
        fontFamily: 'Avenir',
        paddingHorizontal:wp('4.7%'),
        display: 'flex',  
      },
      Container_Text: {
        fontFamily: 'Avenir',
        marginVertical:hp('1%'),
        fontSize: wp('4%'),
        textAlign:'justify'
      },
      Container_Title: {
        fontFamily: 'Avenir',
        marginVertical:hp('1%'),
        fontSize: wp('5%'),
        fontWeight:'bold',
      },
      Container_Title_Gray: {
        fontFamily: 'Avenir',
        marginVertical:hp('1%'),
        fontSize: wp('4%'),
        fontWeight:'bold',
        color:'#999999'
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
      Header:{
        borderBottomColor:'#EE3031',
        borderBottomWidth:15
      },
      Header_Title:{
        color: ntb_white,
        fontSize: wp('6%'),
        textAlign: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        fontFamily: 'Avenir'
      },
      Header_Subtitle:{
        color: ntb_white,
        fontSize: wp('4%'),
        fontFamily: 'Avenir',
        marginTop: hp('0.3%')
      },
      ImageBgTop: {
        width: wp('100%'),
        height: hp ('22%'),
        resizeMode: 'cover',
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
      Text_Red: {
        paddingLeft: wp('3%'),
        paddingRight: wp('2.5%'),
        fontSize: wp('3.8%'),
        color : ntb_red,
        textAlign: 'left', alignSelf: 'stretch',
        fontFamily: 'Avenir'
      },
      Modal_Container: {
        width: wp('90%'), 
        height: hp('39%'),
        justifyContent: 'center',
        backgroundColor: ntb_white,
        paddingHorizontal:wp('5%'),
        borderRadius:10,
        fontFamily: 'Avenir'
      },
      Text_Red_Modal_Title: {
        fontSize: wp('5.8%'),
        color : ntb_red,
        fontWeight: 'bold',
        textAlign: 'center', alignSelf: 'stretch',
        fontFamily: 'Avenir',
      },
      Modal_Title_Horizontal_Line:{
        borderBottomColor:'#E0E1E1',
        borderBottomWidth:1,
        paddingVertical: 5
      },
      Modal_Content: {
        fontFamily: 'Avenir',
        fontSize: wp('3.7%'),
        textAlign:'justify',
        paddingVertical:wp('2%')
      },
      ModalButtonContainer: {
        width: wp('80%'), 
        height: hp('5.5%'),
        borderRadius: 15,
        marginTop: hp('2%'),
        backgroundColor: ntb_blue,
      },

      ModalButtonText: {
        color: ntb_white,
        fontWeight: 'bold',
        alignSelf: 'center', 
        fontSize: wp('4.1%'),
        fontFamily: 'Avenir',
        paddingTop: hp('1.5%'),
      },
      Terms_And_Condition_Send_Email_Container:{
        backgroundColor:'#E0E1E1',
        paddingVertical: hp('1%'),
        paddingHorizontal: wp('2%'),
        display: 'flex',  
        flexDirection: 'row-reverse',
        alignItems: 'center'
      },
      Terms_And_Condition_Send_Email_Text:{
        fontFamily: 'Avenir',
        fontSize: wp('3.5%'),
        paddingHorizontal: wp('2%'),
      },
      ID_Submission_List_Breadcrumbs: {
        width: wp('100%'),
        height: hp ('9.5%'),
        resizeMode: 'cover',
      },
      ID_Submission_List_Container: {
        borderColor: ntb_light_gray,
        borderWidth:1,
        borderRadius: 5,
        paddingHorizontal: wp('6%'),
        paddingVertical: hp('3%'),
      },
      ID_Submission_List_Container_Title: {
        fontSize: wp('3.9%'),
        color : ntb_blue,
        fontWeight: 'bold',
        fontFamily: 'Avenir'
      },
      ID_Submission_List_Items: {
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: ntb_light_gray,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      ID_Submission_List_Text: {
        color: '#4f603c',
        fontSize: wp('3.5%'),
        fontFamily: 'Avenir'
      },
      ID_Submission_Note_Container: {
        display: 'flex',
        flexDirection: 'column'
      },
      ID_Submission_Note_Text: {
        color: '#4f603c',
        fontSize: wp('3.5%'),
        fontFamily: 'Avenir',
        marginTop: hp('1%'),
        marginLeft: wp('3%')
      },
      Summary_List_Items: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        height: hp('10%'),
        paddingHorizontal:wp('4.7%'),
      },
      Summary_List_Items_Combination: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
      },
      Summary_List_Items_Field_Name: {
        display: 'flex',
        flexDirection: 'row',
        paddingVertical: hp('3%'),
        paddingRight:wp('4%'),
        borderRightWidth: 1,
      },
      Summary_List_Items_Field: {
        display: 'flex',
        flexDirection: 'row',
        paddingVertical: hp('3%'),
        paddingLeft:wp('4%'),
      },
      Summary_List_Items_Caret: {
        display: 'flex',
        flexDirection: 'row',
        paddingVertical: hp('3%'),
      
      },
      Summary_List_Items_Edit: {
        backgroundColor:'red'
      }

      
  });