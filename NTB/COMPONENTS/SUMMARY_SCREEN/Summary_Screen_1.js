/**
 * Terms and Condition
 * John Oliver N. Lacap
 * Nov 21, 2019
 */

import React, { Component } from 'react';
import React_Styles from '../../../STYLES/ntb_styles';
import {Dimensions, View,Image,TouchableOpacity,Text,ImageBackground,TouchableHighlight,Animated, StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';
/* Navigation */
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

class Summary_Screen_1 extends Component {
   constructor(props) {
       super(props);
       this.state = {
           listType: 'FlatList',
           listViewData: Array(20)
               .fill('')
               .map((_, i) => ({ key: `${i}`, text: `item #${i}` })),
           sectionListData: Array(5)
               .fill('')
               .map((_, i) => ({
                   title: `title${i + 1}`,
                   data: [
                       ...Array(5)
                           .fill('')
                           .map((_, j) => ({
                               key: `${i}.${j}`,
                               text: `item #${j}`,
                           })),
                   ],
               })),
       };

       this.rowSwipeAnimatedValues = {};
       Array(20)
           .fill('')
           .forEach((_, i) => {
               this.rowSwipeAnimatedValues[`${i}`] = new Animated.Value(0);
           });
   }

   closeRow(rowMap, rowKey) {
       if (rowMap[rowKey]) {
           rowMap[rowKey].closeRow();
       }
   }

   deleteRow(rowMap, rowKey) {
       this.closeRow(rowMap, rowKey);
       const newData = [...this.state.listViewData];
       const prevIndex = this.state.listViewData.findIndex(
           item => item.key === rowKey
       );
       newData.splice(prevIndex, 1);
       this.setState({ listViewData: newData });
   }

   deleteSectionRow(rowMap, rowKey) {
       this.closeRow(rowMap, rowKey);
       const [section] = rowKey.split('.');
       const newData = [...this.state.sectionListData];
       const prevIndex = this.state.sectionListData[section].data.findIndex(
           item => item.key === rowKey
       );
       newData[section].data.splice(prevIndex, 1);
       this.setState({ sectionListData: newData });
   }

   onRowDidOpen = rowKey => {
       console.log('This row opened', rowKey);
   };

   onSwipeValueChange = swipeData => {
       const { key, value } = swipeData;
       this.rowSwipeAnimatedValues[key].setValue(Math.abs(value));
   };

   render() {
       return (
           <View>
              <Header subHeader='Summary'></Header>
              <View>
                  <ImageBackground style={React_Styles.ID_Submission_List_Breadcrumbs} source={require('../../../assets/images/breadcrumbs/bread_summary.png')}>
                  </ImageBackground>
               </View>
               <View>
               <View style={React_Styles.Container}>
               <Text style={React_Styles.Container_Title_Gray}>Kindly verify if the details you provided are correct.</Text>
               </View>
               {this.state.listType === 'FlatList' && (
                   <SwipeListView
                       data={this.state.listViewData}
                       renderItem={data => (
                           <TouchableHighlight
                               onPress={() => console.log('You touched me')}
                               style={React_Styles.Summary_List_Items}
                               
                           > 
                               <View style={React_Styles.Summary_List_Items_Combination}>
                               <View style={React_Styles.Summary_List_Items_Field_Name}>
                                 <Text>Complete Name</Text>
                              </View>
                              <View style={React_Styles.Summary_List_Items_Field}>
                                 <Text> I am {data.item.text} in a SwipeListView</Text>
                              </View>
                              </View>
                           </TouchableHighlight>
                       )}
                       renderHiddenItem={(data, rowMap) => (
                           <View style={styles.rowBack}>
                               <TouchableOpacity
                                   style={[
                                       styles.backRightBtn,
                                       styles.backRightBtnRight,
                                   ]}
                                   onPress={() =>
                                       this.deleteRow(rowMap, data.item.key)
                                   }
                               >
                                   <Animated.View
                                       style={[
                                           styles.trash,
                                           {
                                               transform: [
                                                   {
                                                       scale: this.rowSwipeAnimatedValues[
                                                           data.item.key
                                                       ].interpolate({
                                                           inputRange: [
                                                               45,
                                                               90,
                                                           ],
                                                           outputRange: [0, 1],
                                                           extrapolate:
                                                               'clamp',
                                                       }),
                                                   },
                                               ],
                                           },
                                       ]}
                                   >
                                       <Image
                                           source={require('../../../assets/images/128x128_edit_white.png')}
                                           style={styles.trash}
                                       />
                                   </Animated.View>
                               </TouchableOpacity>
                           </View>
                       )}
                       rightOpenValue={-75}
                       previewRowKey={'0'}
                       previewOpenValue={-40}
                      
                       onRowDidOpen={this.onRowDidOpen}
                       onSwipeValueChange={this.onSwipeValueChange}
                   />
               )}
               </View>
           </View>
       );
   }
}

const styles = StyleSheet.create({
   container: {
       backgroundColor: 'white',
       flex: 1,
   },
   standalone: {
       marginTop: 30,
       marginBottom: 30,
   },
   standaloneRowFront: {
       alignItems: 'center',
       backgroundColor: '#CCC',
       justifyContent: 'center',
       height: 50,
   },
   standaloneRowBack: {
       alignItems: 'center',
       backgroundColor: '#8BC645',
       flex: 1,
       flexDirection: 'row',
       justifyContent: 'space-between',
       padding: 15,
   },
   backTextWhite: {
       color: '#FFF',
   },
   rowFront: {
       alignItems: 'center',
       backgroundColor: '#CCC',
       borderBottomColor: 'black',
       borderBottomWidth: 1,
       justifyContent: 'center',
       height: 50,
   },
   rowBack: {
       alignItems: 'center',
      
       flex: 1,
       flexDirection: 'row',
       justifyContent: 'space-between',
       paddingLeft: 15,
   },
   backRightBtn: {
       alignItems: 'center',
       bottom: 0,
       justifyContent: 'center',
       position: 'absolute',
       top: 0,
       width: 75,
   },
   backRightBtnLeft: {
       backgroundColor: 'blue',
       right: 75,
   },
   backRightBtnRight: {
       backgroundColor: 'red',
       right: 0,
   },
   controls: {
       alignItems: 'center',
       marginBottom: 30,
   },
   switchContainer: {
       flexDirection: 'row',
       justifyContent: 'center',
       marginBottom: 5,
   },
   switch: {
       alignItems: 'center',
       borderWidth: 1,
       borderColor: 'black',
       paddingVertical: 10,
       width: Dimensions.get('window').width / 4,
   },
   trash: {
       height: 25,
       width: 25,
   },
});

export default Summary_Screen_1;