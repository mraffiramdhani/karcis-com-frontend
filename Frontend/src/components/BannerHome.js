import React, { Component } from 'react';
import { Image, Dimensions, StyleSheet } from 'react-native';
import { View } from 'native-base';
import Carousel from 'react-native-banner-carousel';

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = Dimensions.get('window').height / 2.9;

class BannerHome extends Component {

  renderPage(image, index) {
    return (
      <View key={index}>
        <Image
          style={styles.imgBannerHome}
          source={image} />
      </View>
    )
  }

  render() {
    return (
      <View >
        <Carousel
          pageIndicatorOffset={16}
          autoplay
          autoplayTimeout={5000}
          loop
          index={0}
          pageSize={BannerWidth}>
          {this.props.image.map((data, index) => this.renderPage(data, index))}
        </Carousel>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  imgBannerHome: {
    width: BannerWidth,
    height: BannerHeight,
    resizeMode: 'cover'
  }
})

export default BannerHome;
