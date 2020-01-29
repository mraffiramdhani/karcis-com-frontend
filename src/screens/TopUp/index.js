/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import HeaderPoint from '../../components/TopUp/HeaderPoint';
import BodyPoint from '../../components/TopUp/BodyPoint';
import ListPoint from '../../components/TopUp/ListPoint';
import { connect } from 'react-redux';
import { getBalance } from '../../redux/action/balance';
import { withNavigationFocus } from 'react-navigation';

class TopUpOriginal extends Component {
	constructor(props) {
		super(props)
		this.state = {
			page: 'TopUp',
		}
	}

	async componentDidMount() {
		const jwt = this.props.auth.data.token;
		await this.props.navigation.addListener('didFocus', () => this.onScreenFocus(jwt));
		if (jwt) {
			await this.props.dispatch(getBalance(jwt));
		}
		else {
			await this.props.navigation.navigate('Login');
		}
	}

	onScreenFocus(jwt) {
		if (jwt === null && jwt === undefined && jwt === '') {
			this.props.navigation.navigate('Login');
		}
		else {
			this.props.dispatch(getBalance(jwt));
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

const TopUp = withNavigationFocus(TopUpOriginal)

export default connect(mapStateToProps)(TopUp);
