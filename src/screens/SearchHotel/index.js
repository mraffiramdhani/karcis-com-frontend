/* eslint-disable no-undef */
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import HeaderSearch from '../../components/SearchHotel/HeaderSearch';
import BodySearch from '../../components/SearchHotel/BodySearch';
import Recommendation from '../../components/SearchHotel/Recommendation';
import PickerBox from 'react-native-picker-box';

export default class SearchHotel extends Component {
    constructor(props){
        super(props)
        this.state = {
            roomdata: [
                {label: '1', value: 1},
                {label: '2', value: 2},
                {label: '3', value: 3},
                {label: '4', value: 4},
                {label: '5', value: 5},
                {label: '6', value: 6},
                {label: '7', value: 7},
                {label: '8', value: 8},
                {label: '9', value: 9},
                {label: '10', value: 10},
                ],
       roomValue: 1,
       persondata: [
                {label: '1', value: 1},
                {label: '2', value: 2},
                {label: '3', value: 3},
                {label: '4', value: 4},
                {label: '5', value: 5},
                {label: '6', value: 6},
                {label: '7', value: 7},
                {label: '8', value: 8},
                {label: '9', value: 9},
                {label: '10', value: 10},
                ],
        personValue: 1
        }
    }
    render() {
        return (
            <>
                <HeaderSearch />
                    <ScrollView style={{marginTop: '-27%'}}>
                        <BodySearch person={this.state.personValue} room={this.state.roomValue} 
                        onRoomPickerPressed={() => this.myref.openPicker()} onPersonPickerPressed={() => this.myref1.openPicker()}/>
                            <Text style = {{marginTop: 10, marginBottom: 5, marginLeft: 20}}>Akomodasi Pilihan</Text>
                        <View style={{marginBottom: 20}}>
                            <ScrollView horizontal={true}>
                        <Recommendation />
                        </ScrollView>
                        </View>
                    </ScrollView>

                    <PickerBox 
                        ref={ref => this.myref = ref}
                        data={ this.state.roomdata }
                        onValueChange={value => this.setState({ roomValue: value })}
                        selectedValue={ this.state.roomValue }
                        />
                    <PickerBox
                        ref={ref => this.myref1 = ref}
                        data={ this.state.persondata }
                        onValueChange={value => this.setState({ personValue: value })}
                        personValue={ this.state.personValue }
                        />
            </>
        )
    }
}
