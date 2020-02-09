/* eslint-disable no-undef */
import React, { Component } from 'react'
import { View, StyleSheet, Image } from 'react-native'

const styles = StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: '#eee',
      padding: 5,
    },
    banner: {
      height: 150,
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
    iconBody: {
        fontSize: 30,
        color: '#0064D2',
        marginLeft: -5
      },
    iconFilter: {
      fontSize: 20,
      color: '#0064D2',
    },
    iconDoor: {
        fontSize: 20,
        color: '#0064D2',
        marginTop: 10,
        marginBottom: 10
      },
    row: {
      flexDirection: 'row',
      alignItems: 'flex-end',
    },
    bottom: {
      bottom: -160,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      height: 30,
      width: 150,
      elevation: 5,
    },
    card: {
        height: '73%', 
        width: '90%', 
        borderRadius: 10, 
        justifyContent: 'flex-start', 
        alignSelf: 'center',
        // marginTop: '-27%'
    },
    buttonLogin: {
        backgroundColor: 'yellow',
        borderRadius: 50,
        height: '40%',
        width: 300,
        padding: 20,
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'center',
      },
      buttonText: {
        color: '#0064D2',
        fontSize: 17,
      },
      image : {
        resizeMode: 'cover',
        width : 250,
        height : 90,
        flex:1,
        marginLeft: 15,
        marginRight:15,
        backgroundColor: '#fff',
        borderRadius: 5
      }
  });

class Recommendation extends Component {
    render() {
        return (
            <View style={styles.root}>      
        <View style={styles.row}>
        
          <View>
            <Image style={styles.image} source = {require('../../image/1.png')}/>
            </View>

            <View>
            <Image style={styles.image} source = {require('../../image/2.png')}/> 
            </View>

            <View>
            <Image style={styles.image} source = {require('../../image/3.png')}/>
            </View>

            <View>
            <Image style={styles.image} source = {require('../../image/4.png')}/>
            </View>    
            
          </View>
        </View>
        )
    }
}

export default Recommendation
