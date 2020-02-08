import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Home,
  SplashScreen,
  Login,
  MyOrder,
  TopUp,
  Account,
  ForgotPassword,
  ForgotPasswordNext,
  Register,
  RegisterNextFirst,
  RegisterNextSecond,
  Setting,
  InputNewPassword
} from '../../screens/index';
import HistoryOrder from '../../screens/HistoryOrder';
import FilterPage from '../../components/HistoryOrder/FilterPage';
import FormTopUp from '../../screens/TopUp/FormTopUp';
import FormHistory from '../../screens/TopUp/FormHistory';
import SearchHotel from '../../screens/SearchHotel';
import ListLocation from '../../screens/ListLocation';
import ListHotel from '../../screens/ListHotel';
import DetailHotel from '../../screens/DetailHotel';
import ListRoom from '../../screens/ListRoom';
import FormOrder from '../../screens/FormOrder';
import Payment from '../../screens/Payment';

const SplashNav = createStackNavigator(
  {
    SplashScreen: {
      screen: SplashScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    headerMode: 'none',
    initialRouteName: 'SplashScreen',
  },
);

const AuthStack = createStackNavigator(
  {
    Login,
    ForgotPassword,
    ForgotPasswordNext,
    Setting,
    InputNewPassword,
    Register,
    RegisterNextFirst,
    RegisterNextSecond
  },
  {
    headerMode: 'none',
    initialRouteName: 'Login',

  },
);

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        headerShown: false,
      },
    },
    SearchHotel: {
      screen: SearchHotel,
      navigationOptions: {
        headerShown: false,
      },
    },
    ListLocation: {
      screen: ListLocation,
      navigationOptions: {
        headerShown: false,
      },
    },
    Filter: {
      screen: FilterPage,
      navigationOptions: {
        headerShown: false,
      },
    },
    ListHotel: {
      screen: ListHotel,
      navigationOptions: {
        headerShown: false,
      },
    },
    DetailHotel: {
      screen: DetailHotel,
      navigationOptions: {
        headerShown: false,
      },
    },
    ListRoom: {
      screen: ListRoom,
      navigationOptions: {
        headerShown: false,
      },
    },
    FormOrder: {
      screen: FormOrder,
      navigationOptions: {
        headerShown: false,
      },
    },
    Payment: {
      screen: Payment,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: 'Home',
  },
);

HomeStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

const MyOrderStack = createStackNavigator(
  {
    MyOrder: {
      screen: MyOrder,
      navigationOptions: {
        headerShown: false,
      },
    },
    SearchHotel: {
      screen: SearchHotel,
      navigationOptions: {
        headerShown: false,
      },
    },
    ListLocation: {
      screen: ListLocation,
      navigationOptions: {
        headerShown: false,
      },
    },
    HistoryOrder: {
      screen: HistoryOrder,
      navigationOptions: {
        headerShown: false,
      },
    },
    Filter: {
      screen: FilterPage,
      navigationOptions: {
        headerShown: false,
      },
    },
    ListHotel: {
      screen: ListHotel,
      navigationOptions: {
        headerShown: false,
      },
    },
    DetailHotel: {
      screen: DetailHotel,
      navigationOptions: {
        headerShown: false,
      },
    },
    ListRoom: {
      screen: ListRoom,
      navigationOptions: {
        headerShown: false,
      },
    },
    FormOrder: {
      screen: FormOrder,
      navigationOptions: {
        headerShown: false,
      },
    },
    Payment: {
      screen: Payment,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: 'MyOrder',
  },
);

MyOrderStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

const TopUpStack = createStackNavigator(
  {
    TopUp: {
      screen: TopUp,
      navigationOptions: {
        headerShown: false,
      },
    },
    FormTopUp: {
      screen: FormTopUp,
      navigationOptions: {
        headerShown: false,
      },
    },
    FormHistory: {
      screen: FormHistory,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: 'TopUp',
  },
);

TopUpStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

const AccountStack = createStackNavigator(
  {
    Account: {
      screen: Account,
      navigationOptions: {
        headerShown: false,
      },
    },
  }
);

AccountStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

const BottomNavigationStack = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home-variant-outline" color={tintColor} size={25} />
        ),
      },
    },
    MyOrder: {
      screen: MyOrderStack,
      navigationOptions: {
        tabBarLabel: 'My Order',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="format-list-bulleted" color={tintColor} size={25} />
        ),
      },
    },
    TopUp: {
      screen: TopUpStack,
      navigationOptions: {
        tabBarLabel: 'Karcis Point',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ticket-confirmation" color={tintColor} size={25} />
        ),
      },
    },
    Account: {
      screen: AccountStack,
      navigationOptions: {
        tabBarLabel: 'Account',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="account-circle-outline" color={tintColor} size={25} />
        ),
      },
    },
  },
  {
    unmountInactiveScreens: true,
    initialRouteName: 'Home',
    backBehaviour: 'history',
    tabBarOptions: {
      activeTintColor: '#1483F5',
      inactiveTintColor: '#35405A',
      labelStyle: {
        fontSize: 12,
      },
      style: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 6,
        height: 60,
      },
    },
  },
);

const AppStackNavigation = createStackNavigator(
  {
    BottomNavigationStack,
  },
  {
    headerMode: 'none',
  },
);

const Router = createSwitchNavigator(
  {
    SplashNav,
    AuthStack,
    AppStackNavigation,
  },
  {
    headerMode: 'none',
    initialRouteName: 'SplashNav',
  },
);


export default createAppContainer(Router);

