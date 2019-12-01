import * as WebBrowser from 'expo-web-browser';
import React, {useState} from 'react';
import MapView from 'react-native-maps';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View,
  Button
} from 'react-native';

import { MonoText } from '../components/StyledText';

export default function HomeScreen() {
  const [destText, setDest] = useState('');
  const [currText, setCurr] = useState('');
  var location = 'kanata'
  handleSearch = () =>  {
    const urll = `https://geocoder.api.here.com/6.2/geocode.json?
    app_id=KokES6GDawldhiT73aQx
    &app_code=n4lGT8Mrgs18sE-Vr__bQg&searchtext=${location}`
    fetch(urll ,{
      method: 'GET',
      })
    .then((res) => { console.log(res) ; console.log(res["Response"])})
    .then((responseJson) => console.log(responseJson))
      console.log('body', body) 
      .catch((error) => {
        console.error(error);
      });
    });
  } ;

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <Image
            source={
              __DEV__
                ? require('../assets/images/welcome.png')
                : require('../assets/images/welcome.png')
            }
            style={styles.welcomeImage}
          />
        </View>

        <View style={styles.getStartedContainer}>
          <DevelopmentModeNotice />
        
          

          {/* <View
            style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
            <MonoText>screens/LinksScreen.js</MonoText>
          </View>
 */}
          {/* <Text style={styles.getStartedText}>
            Input your destination below:
          </Text> */}
        </View>

        <Text>
              Current Address
            </Text>
            <TextInput
          style={{height: 40}}
          placeholder="Enter current location"
          value={currText}
          onChange={event => setCurr(event.target.value)}
          label="Enter location"
          underlineColorAndroid={'transparent'}
                autoCapitalize={'none'}
                autoCorrect={true}
                enablesReturnKeyAutomatically={false}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {currText}
        </Text>

        <Text>
              Destination Address
            </Text>
            <TextInput
          style={{height: 40}}
          placeholder="Enter destination location"
          value={destText}
          onChange={event =>  { setDest(event.target.value); console.log(event.target.value)}}
          label="Enter location"
          underlineColorAndroid={'transparent'}
          autoCapitalize={'none'}
          autoCorrect={true}
          enablesReturnKeyAutomatically={false}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {destText}
        </Text>
        {/* <View style={styles.helpContainer}>
          <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
            <Text style={styles.helpLinkText}>
              Help, it didn’t automatically reload!
            </Text>
          </TouchableOpacity>
        </View> */}
      </ScrollView>
      <Button style={{width: '100%',
    backgroundColor: '#FC3768',
    paddingTop: 20,
    paddingBottom: 20,
    justifyContent: 'center',
    alignItems: 'center'}} title="Search" onPress={handleSearch}/> 
      <MapView     
            style={{flex: 1}}    
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            showsUserLocation={true}
            showsCompass={true}
            zoomControlEnabled={true}
            showsTraffic={true}    > 
      </MapView>

      <View style={styles.tabBarInfoContainer}>
        <Text style={styles.tabBarInfoText}>
          
          Input your destination below:
        </Text>

        

        {/* <View
          style={[styles.codeHighlightContainer, styles.navigationFilename]}>
          <MonoText style={styles.codeHighlightText}>
            navigation/MainTabNavigator.js
          </MonoText>
        </View> */}
      </View>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
