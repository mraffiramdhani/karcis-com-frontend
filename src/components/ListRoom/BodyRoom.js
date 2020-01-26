import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Left, Input, Item, CardItem } from 'native-base';
import Icon from 'react-native-vector-icons/Octicons';
import { ScrollView } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation'

const styles = StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: '#eee',
      padding: 5,
    },
    banner: {
      height: 100,
      backgroundColor: '#0064D2',
    },
    icon: {
      fontSize: 25,
      color: 'white',
      padding: 5,
      paddingRight: 15,
      paddingBottom: 10,
      marginTop: 10,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'flex-end',
    },
    image : {
        width: '100%',
        height : 60,
        flex:1,
        backgroundColor: '#fff',
        borderRadius: 5,
      },
      buttonLogin: {
        backgroundColor: 'yellow',
        borderRadius: 20,
        height: 25,
        width: 80,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: -50
      },
      buttonText: {
        color: '#0064D2',
        fontSize: 15,
      },
  });

class BodyRooms extends Component {
    render() {
        return (
            <ScrollView>
                <View style ={{flexDirection: 'row'}}>
                    <TouchableOpacity style = {{margin: '3%', backgroundColor: '#fff', 
                                    borderColor: 'grey', borderWidth: 1, width: "10%", 
                                    alignItems : 'center'}}>
                        <Text style={{margin: 3, color: '#0064D2' }}>TV</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {{margin: '3%', backgroundColor: '#fff', 
                                    borderColor: 'grey', borderWidth: 1, width: "20%", 
                                    alignItems : 'center'}}>
                        <Text style={{margin: 3, color: '#0064D2' }}>Extra Bed</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {{margin: '3%', backgroundColor: '#fff', 
                                    borderColor: 'grey', borderWidth: 1, width: "15%", 
                                    alignItems : 'center'}}>
                        <Text style={{margin: 3, color: '#0064D2' }}>Parkir</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {{margin: '3%', backgroundColor: '#fff', 
                                    borderColor: 'grey', borderWidth: 1, width: "20%", 
                                    alignItems : 'center'}}>
                        <Text style={{margin: 3, color: '#0064D2' }}>Sarapan</Text>
                    </TouchableOpacity>
                </View>

                <Item style={{backgroundColor: '#fff'}}>
                    <View style={{margin: '3%'}}>
                        <View>
                            <Text>Kamar Twin</Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <CardItem style={{width: 80, paddingLeft: 0, paddingRight: 10}}>
                                <Image style={styles.image} source = {require('../../image/aquinahouse.jpg')}/> 
                            </CardItem>
                            <View>
                                <View style = {{flexDirection: 'row', marginTop: 10}}>
                                    <Text style = {{fontSize: 12}}>Maks 2 Tamu </Text>
                                    <Icon name="primitive-dot" style={{color: 'grey', marginTop: 3, marginLeft: 5, marginRight: 5 }} />
                                    <Text style = {{fontSize: 12}}>Pembatalan Gratis</Text>
                                </View>
                                <View style={{flexDirection: 'row', marginTop: 5}}>
                                    <Left>
                                        <Text style={{color: 'grey'}}>TV</Text>
                                        <Text style={{color: 'grey'}}>Sarapan</Text>
                                    </Left>
                                    <View>
                                        <Text style={{color: 'grey'}}>Double Bed</Text>
                                        <Text style={{color: 'grey'}}>10 m2</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <Left style= {{flexDirection: 'row'}}>
                                <Text style={{color: '#0064D2', fontSize: 15}}>IDR 300.000</Text>
                                <Text style={{fontSize: 13, color: 'grey', marginLeft: 3}}>/kamar/malam</Text>
                            </Left>
                            <TouchableOpacity
                             onPress={() => this.props.navigation.navigate('FormOrder')}
                                style={styles.buttonLogin}>
                                <Text style={styles.buttonText}>PILIH</Text>
                            </TouchableOpacity>
                        </View>
                    </View> 
                </Item>
            </ScrollView>
        )
    }
}

const BodyRoom = withNavigation(BodyRooms)
export default BodyRoom