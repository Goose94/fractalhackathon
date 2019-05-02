import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import OnboardingScreen from '../screens/OnboardingScreen';

export default createAppContainer(createSwitchNavigator({
  Main: MainTabNavigator,
  Onboarding: OnboardingScreen,
},
{
    initialRouteName: 'Main',
  }));
