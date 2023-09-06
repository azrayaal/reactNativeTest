import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const ElementTypes = () => {
    const dataElements = [
        {
            id:1,
            image: require('../assets/img/icon_region/dawn-winery-card.png'),
            name: 'Dawn Winery'
        },
        {
            id:2,
            image: require('../assets/img/icon_region/favonius-cathedral-card.png'),
            name: 'Favonious Cathedral '
        },
        {
            id:3,
            image: require('../assets/img/icon_region/jade-chamber-card.png'),
            name: 'Jade Chamber'
        },
        {
            id:4,
            image: require('../assets/img/icon_region/liyue-harbor-wharf-card.png'),
            name: 'Li Yue Harbor'
        },
    ]
  return (
    <>
      <Text style={{margin:10, fontWeight: 'bold'}}>Famous Places: </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {dataElements.map((item, index)=>(
         <View key={item.id} style={{marginLeft:10, marginRight:10}}>
            <Image source={item.image} style={{width:200, height:300, margin:10, borderRadius:20}}/>
            
        </View>
        ))}
      </ScrollView>
    </>
  )
}

export default ElementTypes

const styles = StyleSheet.create({})