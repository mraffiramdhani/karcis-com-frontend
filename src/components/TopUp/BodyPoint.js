import React, {Component} from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import {Text} from 'native-base';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import usericon from '../../image/membercard.png';
import {connect} from 'react-redux';
import {getBalance} from '../../redux/action/balance';
import rupiahFormat from '../../utils/rupiahFormat';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#000',
    padding: 5,
  },
  banner: {
    height: 50,
    backgroundColor: '#0064D2',
  },
  icon: {
    fontSize: 25,
    color: 'white',
    padding: 5,
    paddingRight: 15,
    paddingBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  info: {
    backgroundColor: '#eee',
    paddingTop: 10,
    alignItems: 'center',
  },
  image: {
    width: '100%',
  },
  coin: {
    fontSize: 20,
    color: 'gold',
    marginRight: 10,
    marginTop: 15,
  },
});

class BodyPoint extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const {first_name, last_name } = this.props.auth.data
    return (
      <View style={styles.info}>
        <View>
          <Text style={{fontSize: 20, marginBottom: 10}}> {`${first_name} ${last_name}`} </Text>
        </View>

        <View style={{overflow: 'hidden', borderRadius: 10}}>
          <ImageBackground
            source={usericon}
            style={{
              height: 200,
              width: 320,
            }}>
            <View
              style={{
                justifyContent: 'flex-end',
                flex: 1,
              }}>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'right',
                  marginRight: 10,
                  fontSize: 25,
                }}>
                {`${first_name} ${last_name}`}
              </Text>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'right',
                  marginRight: 10,
                  marginBottom: 10,
                }}>
                00001
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={{flexDirection: 'row', marginBottom: 5}}>
          <Icons name="ticket-confirmation" style={styles.coin} />
          <Text style={{fontWeight: 'bold', fontSize: 16, marginTop: 15}}>
            {
              !this.props.balance.isLoading &&
              rupiahFormat(this.props.balance.data.balance, '')
            }
          </Text>
          
        </View>

        <View style={{marginBottom: 10}}>
          <Text>Transaksi Terakhir : 20 Januari 2020</Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    balance: state.balance
  }
}

export default connect(mapStateToProps)(BodyPoint);
