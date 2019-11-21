import React from 'react';
import ResponsiveImage from 'react-native-responsive-image';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Button,
  Switch,
  TouchableOpacity,
  FlatList,
  Dimensions
} from 'react-native';


import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const IDSubmissionListScreen: () => React$Node = () => {
    var {width} = Dimensions.get('window');
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
        <Header/>
        <View style={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
          <ResponsiveImage source={require('./bread_id.png')} initWidth="412" initHeight="110"/>
        </View>
        <View >
        <Text style={styles.sectionTitle}>Submit a photo of your valid ID</Text>
        </View>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={styles.body}>
            <FlatList
            data={[
                {key: 'Philippine Passport'},
                {key: 'Driver License'},
                {key: 'Unified Multi-purpose ID (UMIDs)'},
                {key: 'Firearms License'},
                {key: 'IBP ID'},
                {key: 'Seaman Book'},
                {key: 'School ID'}
            ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  };

  const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: Colors.white,
      paddingHorizontal:40,
      paddingVertical:40
    },
    body: {
      backgroundColor: Colors.white,
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: Colors.black,
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      color: Colors.dark,
      textAlign: "justify"
    },
    highlight: {
      fontWeight: '700',
    },
    background: {
      paddingTop: 120,
      marginVertical: 100,
      marginHorizontal:50
    },
    text: {
      fontSize: 30,
      fontWeight: '600',
      textAlign: 'left',
      color: Colors.white,
    }
  });

  export default IDSubmissionListScreen;