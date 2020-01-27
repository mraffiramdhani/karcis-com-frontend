import React, { Component } from 'react';
import { Text } from 'native-base';
import HeaderOrder from '../../components/FormOrder/HeaderOrder';
import BodyForm from '../../components/FormOrder/BodyForm';
import { connect } from 'react-redux'

class FormOrder extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        const orderData = this.props.navigation.getParam('orderData')
        const cost = this.props.navigation.getParam('cost')
        const hotelDetail = this.props.hotel.dataDetail
        return (
            <>
                <HeaderOrder />
                <BodyForm orderData={orderData} hotelDetail={hotelDetail} costRoom={cost} />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        hotel: state.hotel
    }
}
export default connect(mapStateToProps)(FormOrder)