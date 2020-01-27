import React, {Component} from 'react';
import HeaderPoint from '../../components/TopUp/HeaderPoint';
import BodyPoint from '../../components/TopUp/BodyPoint';
import ListPoint from '../../components/TopUp/ListPoint';
import {connect} from 'react-redux';
import {getBalance} from '../../redux/action/balance';
import {withNavigation} from 'react-navigation';

class TopUpOriginal extends Component {
	constructor(props){
		super(props)
	}

	componentDidMount(){
		const jwt = this.props.auth.data.token;
		if(jwt !== null && jwt !== undefined && jwt !== ''){
			this.props.dispatch(getBalance(jwt));
		}
		else {
			this.props.navigation.navigate('Login');
		}
	}

  render() {
    return (
      <>
        <HeaderPoint />
        <BodyPoint />
        <ListPoint />
      </>
    );
  }
}

const mapStateToProps = state => {
	return {
		auth: state.auth,
		balance: state.balance
	}
}

const TopUp = withNavigation(TopUpOriginal)

export default connect(mapStateToProps)(TopUp);
