import React, { Component } from 'react'
import { Text } from 'react-native'
import HeaderRoom from '../../components/ListRoom/HeaderRoom';
import BodyRoom from '../../components/ListRoom/BodyRoom';
import { connect } from 'react-redux';
import { getRoom } from '../../redux/action/hotelRooms'

class ListRoom extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    async componentDidMount() {
        const id = this.props.navigation.getParam('id')
        await this.props.dispatch(getRoom(id))
    }

    render() {
        const { hotelRooms } = this.props
        const orderData = this.props.navigation.getParam('orderData')
        return (
            <>
                <HeaderRoom orderData={orderData} />
                <BodyRoom dataRooms={hotelRooms} orderData={orderData} /> 
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        hotelRooms: state.hotelRooms
    }
}

export default connect(mapStateToProps)(ListRoom)
