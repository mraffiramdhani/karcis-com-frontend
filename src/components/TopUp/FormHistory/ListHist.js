/* eslint-disable react/prop-types */
/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { Text, View, ActivityIndicator, ScrollView } from 'react-native';
import { Container } from 'native-base';
import { connect } from 'react-redux';
import { getBalanceHistory } from '../../../redux/action/balance';
import { withNavigation } from 'react-navigation';
import rupiahFormat from '../../../utils/rupiahFormat';

class ListHists extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      isSuccess: false
    }
  }

  async componentDidMount() {
    const jwt = await this.props.auth.data.token;
    await this.props.dispatch(getBalanceHistory(jwt));
    await this.props.navigation.addListener('didFocus', () => this.onScreenFocus(jwt));
  }

  onScreenFocus(jwt) {
    if (jwt !== null && jwt !== undefined && jwt !== '') {
      this.props.dispatch(getBalanceHistory(jwt));
    }
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.balance.isLoading !== this.state.isLoading) {
      if (prevProps.balance.isLoading) {
        this.setState({ isLoading: true });
      }
      else {
        this.setState({ isLoading: false, isSuccess: prevProps.balance.isSuccess });
      }
    }
  }

  render() {
    return (
      <Container>
        <ScrollView showsVerticalScrollIndicator={false}>
          {
            (!this.state.isLoading && this.state.isSuccess)
              ? this.props.balance.dataHistory.map((v, i) => {
                return (
                  <View key={i} style={{ margin: 20, flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 20, color: 'green' }}>{rupiahFormat(v.balance, 'Rp.')}</Text>
                    <Text>{new Date(v.created_at).toDateString()}</Text>
                  </View>
                )
              })
              : <ActivityIndicator size="large" color="blue" />
          }
        </ScrollView>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    balance: state.balance,
    auth: state.auth
  }
}

const ListHist = withNavigation(ListHists)

export default connect(mapStateToProps)(ListHist)
