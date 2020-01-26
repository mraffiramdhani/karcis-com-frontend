import React, { Component } from 'react'
import { Text, View, Image, Dimensions, StyleSheet } from 'react-native'
import Carousel from 'react-native-banner-carousel';

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = Dimensions.get('window').height / 3;

const styles = StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: '#000',
      padding: 5,
    },
    banner: {
      height: 50,
      backgroundColor: 'rgba(0,0,0,0) transparent',
      zIndex: 50
    },
    icon: {
      fontSize: 25,
      color: 'black',
      padding: 5,
      paddingRight: 15,
      paddingBottom: 10,
      marginTop: 10,
    },
    iconFilter: {
      fontSize: 20,
      color: '#0064D2',
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
    imgBannerHome: {
        width: BannerWidth,
        height: BannerHeight,
        resizeMode: 'cover'
      },
    carousel: {
        height: BannerHeight

    },
    buttonLogin: {
        backgroundColor: 'yellow',
        borderRadius: 50,
        height: 45,
        width: 350,
        alignItems: 'center',
        justifyContent: 'center',
      },
      secondButton: {
        backgroundColor: '#eee',
        borderRadius: 50,
        height: 45,
        width: 350,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
      },
      buttonText: {
        color: '#0064D2',
        fontSize: 17,
      },
  });

class CarouselImage extends Component {
    constructor(props) {
        super(props)
        this.state = {
          Image: [require("../../image/aquinahouse.jpg"),
                require("../../image/aquinahouse1.jpg"), 
                require("../../image/aquinahouse2.jpg")]
        }
      }
      renderPage(image, index) {
          
        return (
          <View key={index}>
            <Image style={{height: BannerHeight, width: BannerWidth}}
              source={image} />
          </View>
        )
      }
    render() {
        return(
            <View style={styles.carousel}>
                <Carousel 
                    autoplay
                    autoplayTimeout={5000}
                    loop
                    index={0}
                    pageSize={BannerWidth}
                >
                    {this.state.Image.map((image, index) => this.renderPage(image, index))}
                </Carousel>
            </View>
        )
    }
}

export default CarouselImage