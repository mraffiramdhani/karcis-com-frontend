import React, {Component} from 'react';
import HeaderOrder from '../../components/FormOrder/HeaderOrder';
import BodyForm from '../../components/FormOrder/BodyForm';

export default class FormOrder extends Component {
    render() {
        return (
            <>
                <HeaderOrder />
                <BodyForm />
            </>
        )
    }
}