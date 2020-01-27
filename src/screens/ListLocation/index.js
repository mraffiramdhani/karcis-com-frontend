import React, { Component } from 'react'
import HeaderLoc from '../../components/ListLocation/HeaderLoc';
import BodyLoc from '../../components/ListLocation/BodyLoc';
import { connect } from 'react-redux';
import { getCities } from '../../redux/action/city';

class ListLocation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchValue: ''
        }
    }

    async handleInputSearch(e) {
        await this.setState({ searchValue: e });
        console.log(this.state.searchValue);
    }

    componentDidMount() {
        this.props.dispatch(getCities());
    }

    componentDidUpdate(prevProsp, prevState) {
        if (prevState.searchValue !== this.state.searchValue) {
            if (this.state.searchValue.length >= 1) {
                this.props.dispatch(getCities(this.state.searchValue))
            }
            else if (this.state.searchValue.length === 0) {
                this.props.dispatch(getCities())
            }
        }
    }

    render() {
        return (
            <>
                <HeaderLoc onInputSearch={(e) => this.handleInputSearch(e)} />
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