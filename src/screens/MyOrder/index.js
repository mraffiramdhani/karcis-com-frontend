import React, {Component} from 'react';
import {Text} from 'react-native';
import Headers from '../../components/MyOrder/Headers';
import TabCard from '../../components/MyOrder/TabCard';
import { connect } from 'react-redux';
import { setPage } from '../../redux/action/page';
import { getHotelOrder } from '../../redux/action/hotelOrder';
import { withNavigationFocus } from 'react-navigation';

class MyOrderOriginal extends Component {
	constructor(props){
		super(props)
		this.state = {
			page: 'MyOrder',
			isLoading: true,
		}
	}

	async componentDidMount(){
		const jwt = this.props.auth.data.token
		await this.props.dispatch(setPage('MyOrder'));
		await this.props.navigation.addListener('didFocus', () => this.onScreenFocus(jwt));
		if(jwt === null && jwt === undefined && jwt === ''){
			this.props.navigation.navigate('Login');
		}
		else{
			await this.props.dispatch(getHotelOrder(jwt));
		}
	}

	onScreenFocus(jwt){
		if(jwt === null && jwt === undefined && jwt === ''){
			this.props.navigation.navigate('Login');
		}
		else {
			this.props.dispatch(getHotelOrder(jwt));
			this.props.dispatch(setPage('MyOrder'));
		}
	}

	async componentDidUpdate(prevProps){
		if(prevProps.hotelOrder.isLoading !== this.state.isLoading){
			if(!prevProps.hotelOrder.isLoading){
				await this.setState({isLoading: false});
			}
		}
	}

	render() {
    return (
      <>
        <Headers />
        <TabCard loading={this.props.hotelOrder.isLoading} data={this.props.hotelOrder.data} />
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
