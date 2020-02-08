import React, { Component } from 'react';
import { Text } from 'native-base';
import HeaderOrder from '../../components/FormOrder/HeaderOrder';
import BodyForm from '../../components/FormOrder/BodyForm';
import { connect } from 'react-redux'
import { setCount } from '../../redux/action/order';

class FormOrder extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    onConfirmOrder(orderData, cost){
        const {daterange, roomValue, personValue} = orderData
        const totCost = cost * daterange;
        this.props.dispatch(setCount(roomValue, personValue, daterange, totCost));
        this.props.navigation.navigate('Payment', {orderData: this.props.order, auth: this.props.auth.data, balance: this.props.balance.data.balance, search: this.props.hotelSearch});
    }

    render() {
        const orderData = this.props.navigation.getParam('orderData')
        const cost = this.props.navigation.getParam('cost')
        const hotelDetail = this.props.hotel.dataDetail
        const auth = this.props.auth.data
        return (
            <>
                <HeaderOrder />
                <BodyForm orderData={orderData} hotelDetail={hotelDetail} costRoom={cost} auth={auth} handleConfirmOrder={() => this.onConfirmOrder(orderData, cost)} />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        hotel: state.hotel,
        auth: state.auth,
        order: state.order,
        balance: state.balance,
        hotelSearch: state.hotelSearch
    }
}
export default connect(mapStateToProps)(FormOrder)