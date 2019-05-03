import React, { Component } from 'react';
import {
  StyleSheet,   // CSS-like styles
  Text,         // Renders text
  View,          // Container component
  Image
} from 'react-native';
import { Button } from 'react-native-elements';
import AppNavigator from '../navigation/AppNavigator'
import HomeScreen from '../screens/HomeScreen';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';


const HomeStack = createStackNavigator(
  {
  Home: HomeScreen,
}
);

export default class OnboardingScreen extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={[styles.slide, { backgroundColor: '#ffffff' }]}>
        <Image style={styles.logo} source={require('../assets/images/logo.png')} />
        <Text style={styles.header}>The Future of Mobile
          <Text style={styles.headerYellow}> Finance </Text>
        </Text>
        <Text style={styles.text}>Welcome to Fractal360. Manage and track your business on the go</Text>
        <View style={styles.containerRight}>
          <Button
            onPress={() => navigate('Home')}
            style={styles.button}
            title="Get Started"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerRight: {
    position: 'absolute',
    right: 0,
    bottom:10
  },
  button: {
    marginRight:40,
    marginLeft:40,
    marginTop:10,
    marginBottom:30,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#ecb345',
    color:'#ecb345',
    borderRadius:10,
  },
  headerYellow: {
    color: '#ecb345',
    fontFamily: 'Avenir',
    fontSize: 50,
    fontWeight: 'bold',
  },
  slide: {
    flex: 1,                    // Take up all screen
    justifyContent: 'center',   // Center vertically
    alignItems: 'center',       // Center horizontally
  },
  header: {
    color: '#000000',
    fontFamily: 'Avenir',
    fontSize: 50,
    fontWeight: 'bold',
    marginVertical: 15,
    marginHorizontal: 10,
    justifyContent: "flex-start",
  },
  // Text below header
  text: {
    color: '#000000',
    fontFamily: 'Avenir',
    fontSize: 18,
    marginHorizontal: 10,
    textAlign: 'left',
  },
});
