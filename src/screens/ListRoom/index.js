import React, { Component } from 'react'
import HeaderRoom from '../../components/ListRoom/HeaderRoom';
import BodyRoom from '../../components/ListRoom/BodyRoom';

export default class ListRoom extends Component {
    render() {
        return (
            <>
                <HeaderRoom />
                <BodyRoom />
            </>
        )
    }
}
