import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './screens/Welcome'
import Santa from './Components/Santa'
import {AppTabNavigator} from './Components/AppTabNavigator';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'

export default class App extends React.Component {
  render(){
    return(
      <AppContainer></AppContainer>
    )
  }
}

const switchnavigator = createSwitchNavigator({
  Welcome: {screen:Welcome},
  TabNavigator: {screen:AppTabNavigator}
})

const AppContainer = createAppContainer(
  switchnavigator
)


