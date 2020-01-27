import React, { Component } from 'react'
import HeaderLoc from '../../components/ListLocation/HeaderLoc';
import BodyLoc from '../../components/ListLocation/BodyLoc';
import {connect} from 'react-redux';
import {getCities} from '../../redux/action/city';

class ListLocation extends Component {
	constructor(props){
		super(props)
	}

	async componentDidMount(){
		await this.props.dispatch(getCities());
	}

   render() {
   	console.log(this.props.city)
       return (
           <>
           <HeaderLoc />
   	       <BodyLoc />
           </>
       )
   }
}

const mapStateToProps = state => {
	return {
		city: state.city
	}
}

export default connect(mapStateToProps)(ListLocation)