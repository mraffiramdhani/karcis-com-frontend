import React, {Component} from 'react';
import Headers from '../../components/MyOrder/Headers';
import TabCard from '../../components/MyOrder/TabCard';
import { connect } from 'react-redux';
import { setPage } from '../../redux/action/page';
import { withNavigationFocus } from 'react-navigation';

class MyOrderOriginal extends Component {
	constructor(props){
		super(props)
		this.state = {
			page: 'MyOrder',
		}
	}

	async componentDidMount(){
		const jwt = this.props.auth.data.token
		await this.props.dispatch(setPage('MyOrder'));
		await this.props.navigation.addListener('didFocus', () => this.onScreenFocus(jwt));
		if(jwt === null && jwt === undefined && jwt === ''){
			this.props.navigation.navigate('Login');
		}
	}

	onScreenFocus(jwt){
		if(jwt === null && jwt === undefined && jwt === ''){
			this.props.navigation.navigate('Login');
		}
	}

	// async shouldComponentUpdate(){
	// 	return this.props.navigation.isFocused() === true
	// }

	// async componentDidUpdate(prevProps){
	// 	const jwt = this.props.auth.data.token;

	// 	if(this.props.navigation.isFocused() === true){
	// 		if(jwt){
	// 			this.props.dispatch(setPage('MyOrder'));
	// 		}
	// 		else {
	// 			this.props.navigation.navigate('Login');
	// 		}
	// 	}
	// }

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
		page: state.page
	}
}

const MyOrder = withNavigationFocus(MyOrderOriginal)

export default connect(mapStateToProps)(MyOrder)
