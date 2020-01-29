import React from 'react';
// import OneSignal from 'react-native-onesignal'; // Import package from node modules
import { StyleSheet, View, ImageBackground, StatusBar } from 'react-native';
import { connect } from 'react-redux';

import image from '../../image/splash.png';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    width: '90%',
    padding: 10,
  },
  title: {
    alignItems: 'center',
    marginBottom: 10,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 20,
    margin: 10,
    fontSize: 15,
  },
  formItem: {
    marginTop: 5,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#0000FF',
    borderRadius: 8,
    height: 45,
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17,
    textTransform: 'uppercase',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  imagebg: {
    resizeMode: 'cover',
    opacity: 0.9,
  },
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
});

class SplashScreen extends React.Component {
  static navigationOptions = {
    headerShown: null,
  };

  componentDidMount() {
    StatusBar.setBarStyle('light-content', true);
    StatusBar.setBackgroundColor('#0953A6');
    const jwt = this.props.auth.data.token
    // StatusBar.setTranslucent(true);
    setTimeout(() => {
      if (jwt !== null && jwt !== undefined && jwt !== '') {
        this.props.navigation.navigate('Home');
      }
      else {
        this.props.navigation.navigate('Login');
      }
    }, 2000);
  }

  render() {
    return (
      <>
        <StatusBar backgroundColor="#0953A6" barStyle="light-content" />
        <View style={styles.container}>
          <ImageBackground
            style={styles.backgroundImage}
            source={image}
            imageStyle={styles.imagebg}
          />
        </View>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(SplashScreen);
