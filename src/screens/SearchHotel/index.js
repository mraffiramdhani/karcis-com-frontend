/* eslint-disable no-undef */
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import HeaderSearch from '../../components/SearchHotel/HeaderSearch';
import BodySearch from '../../components/SearchHotel/BodySearch';
import Recommendation from '../../components/SearchHotel/Recommendation';
import PickerBox from 'react-native-picker-box';
import { connect } from 'react-redux';
import { resetSearchParam, setRoomCount, setGuestCount } from '../../redux/action/hotelSearch';

class SearchHotel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            roomdata: [
                { label: '1', value: 1 },
                { label: '2', value: 2 },
                { label: '3', value: 3 },
                { label: '4', value: 4 },
                { label: '5', value: 5 },
                { label: '6', value: 6 },
                { label: '7', value: 7 },
                { label: '8', value: 8 },
                { label: '9', value: 9 },
                { label: '10', value: 10 },
            ],
            roomValue: 1,
            persondata: [
                { label: '1', value: 1 },
                { label: '2', value: 2 },
                { label: '3', value: 3 },
                { label: '4', value: 4 },
                { label: '5', value: 5 },
                { label: '6', value: 6 },
                { label: '7', value: 7 },
                { label: '8', value: 8 },
                { label: '9', value: 9 },
                { label: '10', value: 10 },
            ],
            personValue: 1,
        }
    }

    componentDidMount(){
        this.props.dispatch(resetSearchParam());
      }

    handleExecuteSearch(chosenDate1, chosenDate2, daterange) {
        const { roomValue, personValue } = this.state
        this.props.navigation.navigate('ListHotel', {
            orderData: {
                chosenDate1,
                chosenDate2,
                daterange,
                roomValue,
                personValue
            }
        });
    }

    handleSetRoomCount(room_count){
        this.props.dispatch(setRoomCount(room_count))
        this.setState({ roomValue: room_count })
    }

    handleSetGuestCount(guest_count){
        this.props.dispatch(setGuestCount(guest_count))
        this.setState({ personValue: guest_count })   
    }

    render() {
        return (
            <>
                <HeaderSearch />
                <ScrollView style={{ marginTop: '-27%' }} showsVerticalScrollIndicator={false}>
                    <BodySearch onSearchPressed={(a, b, c) => this.handleExecuteSearch(a, b, c)} person={this.state.personValue} room={this.state.roomValue}
                        onRoomPickerPressed={() => this.myref.openPicker()} onPersonPickerPressed={() => this.myref1.openPicker()} />
                    <Text style={{ marginTop: 10, marginBottom: 5, marginLeft: 20 }}>Akomodasi Pilihan</Text>
                    <View style={{ marginBottom: 20 }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <Recommendation />
                        </ScrollView>
                    </View>
                </ScrollView>

                <PickerBox
                    ref={ref => this.myref = ref}
                    data={this.state.roomdata}
                    onValueChange={value => this.handleSetRoomCount(value)}
                    selectedValue={this.state.roomValue}
                />
                <PickerBox
                    ref={ref => this.myref1 = ref}
                    data={this.state.persondata}
                    onValueChange={value => this.handleSetGuestCount(value)}
                    personValue={this.state.personValue}
                />
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        hotelSearch: state.hotelSearch
    }
}

export default connect(mapStateToProps)(SearchHotel)
