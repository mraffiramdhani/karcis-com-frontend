import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { Home, LaunchPage, Login, MyOrder, TixPoint, Account } from '../../screens/index'

const AuthStack = createStackNavigator(
  {
    Login
  },
  {
    headerMode: 'none',
    initialRouteName: 'Login'
  }
)

const BottomNavigationStack = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        < Icon
          name="home-variant-outline"
          color={tintColor}
          size={25}
        />
      )
    }
  },
  MyOrder: {
    screen: MyOrder,
    navigationOptions: {
      tabBarLabel: 'My Order',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="format-list-bulleted"
          color={tintColor}
          size={25}
        />
      )
    }
  },
  TixPoint: {
    screen: TixPoint,
    navigationOptions: {
      tabBarLabel: 'TIX Point',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ticket-confirmation"
          color={tintColor}
          size={25}
        />
      )
    }
  },
  Account: {
    screen: Account,
    navigationOptions: {
      tabBarLabel: 'Account',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="account-circle-outline"
          color={tintColor}
          size={25}
        />
      )
    }
  },
},
  {
    tabBarOptions: {
      activeTintColor: '#1483F5',
      inactiveTintColor: '#35405A',
      labelStyle: {
        fontSize: 12,
      },
      style: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 6,
        height: 60
      }
    }
  }
)

const AppStackNavigation = createStackNavigator(
  {
    BottomNavigationStack
  },
  {
    headerMode: 'none'
  }
)

const Router = createSwitchNavigator(
  {
    LaunchPage,
    AuthStack,
    AppStackNavigation
  },
  {
    headerMode: 'none',
    initialRouteName: 'AppStackNavigation'
  }
)

export default createAppContainer(Router);

