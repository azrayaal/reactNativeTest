import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SliderBox } from 'react-native-image-slider-box'

const Carousel = () => {
    const images = [
        require('../assets/img/bg_slider/albedo-banner.png'), 
        require('../assets/img/bg_slider/alhaitham-banner.png'), 
        require('../assets/img/bg_slider/hu-tao-banner.png'), 
        require('../assets/img/bg_slider/kaedehara-kazuha-banner.png'), 
    ];

  return (
    <View >
     <SliderBox 
        images={images}
        autoPlay
        circleLoop
        dotColor='#13274F'
        inactiveDotColor='#90A4AE'
        ImageComponentStyle={{
            borderRadius: 6,
            width: '94%'
        }}
        />
    </View>
  )
}

export default Carousel

const styles = StyleSheet.create({})