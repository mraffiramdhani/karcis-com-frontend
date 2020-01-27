import React, { Component } from 'react';
import { Text } from 'native-base';
import HeaderOrder from '../../components/FormOrder/HeaderOrder';
import BodyForm from '../../components/FormOrder/BodyForm';


class FormOrder extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        const orderData = this.props.navigation.getParam('orderData')
        // const {dataDetail} = this.props.hotel
        return (
            <>
                <HeaderOrder />
                <BodyForm orderData={orderData}/>
            </>
        )
    }
}

export default FormOrder