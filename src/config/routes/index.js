import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'

import { Home, LaunchPage, Login, MyOrder, TixPoint } from '../../screens/index'

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
          name="th-large"
          color={tintColor}
          size={25}
        />
      )
    }
  },
  Favourite: {
    screen: MyOrder,
    navigationOptions: {
      tabBarLabel: 'My Order',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="star"
          color={tintColor}
          size={25}
        />
      )
    }
  },
  Profile: {
    screen: TixPoint,
    navigationOptions: {
      tabBarLabel: 'TIX Point',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="user"
          color={tintColor}
          size={25}
        />
      )
    }
  },
},
  {
    tabBarOptions: {
      activeTintColor: 'yellow',
      inactiveTintColor: 'blue',
      labelStyle: {
        fontSize: 12,
      },
      style: {
        backgroundColor: 'cyan',
        borderTopWidth: 2,
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
    initialRouteName: 'LaunchPage'
  }
)

export default createAppContainer(Router);

