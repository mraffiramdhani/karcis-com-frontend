import React, { Component } from 'react';
import { Text } from 'react-native';
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
			isLoading: true,
		}
	}

	async componentDidMount() {
		const jwt = this.props.auth.data.token;
		await this.props.navigation.addListener('didFocus', this.onScreenFocus);
		if (jwt === null && jwt === undefined && jwt === '') {
			this.props.navigation.navigate('Login');
		}
		else {
			await this.props.dispatch(getHotelOrder(jwt));
		}
	}

	onScreenFocus() {
		const jwt = this.props.auth.data.token;
		if (jwt === null && jwt === undefined && jwt === '') {
			this.props.navigation.navigate('Login');
		}
		else {
			this.props.dispatch(getHotelOrder(jwt));
		}
	}

	async componentDidUpdate(prevProps) {
		if (prevProps.hotelOrder.isLoading !== this.state.isLoading) {
			if (!prevProps.hotelOrder.isLoading) {
				await this.setState({ isLoading: false });
			}
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
