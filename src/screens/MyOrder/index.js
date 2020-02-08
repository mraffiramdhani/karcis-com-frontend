/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import Headers from '../../components/MyOrder/Headers';
import TabCard from '../../components/MyOrder/TabCard';
import { connect } from 'react-redux';
import { getHotelOrder } from '../../redux/action/hotelOrder';
import { withNavigationFocus } from 'react-navigation';

class MyOrderOriginal extends Component {
	constructor(props) {
		super(props)
		this.state = {
			page: 'MyOrder',
			isLoading: false,
			isSuccess: false,
		}
	}

	async componentDidMount() {
		const jwt = this.props.auth.data.token;
		await this.props.navigation.addListener('didFocus', () => this.onScreenFocus(jwt));
		if (jwt === null && jwt === undefined && jwt === '') {
			this.props.navigation.navigate('Login');
		}
		else {
			await this.props.dispatch(getHotelOrder(jwt));
		}
	}

	onScreenFocus(jwt) {
		if (jwt === null && jwt === undefined && jwt === '') {
			this.props.navigation.navigate('Login');
		}
		else {
			this.props.dispatch(getHotelOrder(jwt));
		}
	}

	render() {
		return (
			<>
				<Headers />
				<TabCard />
			</>
		);
	}
}

const mapStateToProps = state => {
	return {
		auth: state.auth,
		page: state.page,
		hotelOrder: state.hotelOrder
	}
}

const MyOrder = withNavigationFocus(MyOrderOriginal)

export default connect(mapStateToProps)(MyOrder)
