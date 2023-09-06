import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const CharacterTypes = () => {
    const dataCharacter = [
        {
            id:0,
            image: require('../assets/img/icon_characterTypes/eula-iconside.png'),
            name:'Eula'
        },
        {
            id:1,
            image: require('../assets/img/icon_characterTypes/diona-iconside.png'),
            name:'Diona'
        },
        {
            id:2,
            image: require('../assets/img/icon_characterTypes/bennett-iconside.png'),
            name:'Bennet'
        },
        {
            id:3,
            image: require('../assets/img/icon_characterTypes/ganyu-iconside.png'),
            name:'Ganyu'
        },
        {
            id:4,
            image: require('../assets/img/icon_characterTypes/kamisato-ayaka-iconside.png'),
            name:'Ayaka'
        },
        {
            id:5,
            image: require('../assets/img/icon_characterTypes/albedo-iconside.png'),
            name:'Albedo'
        },
        {
            id:6,
            image: require('../assets/img/icon_characterTypes/fischl-iconside.png'),
            name:'Fishcl'
        },
        {
            id:7,
            image: require('../assets/img/icon_characterTypes/hu-tao-iconside.png'),
            name:'Hu Tao'
        },
        {
            id:8,
            image: require('../assets/img/icon_characterTypes/kaedehara-kazuha-iconside.png'),
            name:'Kazuha'
        },
    ]

  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}> 
        {dataCharacter.map((item, index)=>(
            <View key={item.id} style={{margin: 9}}>
                <Image source={item.image} style={{ width:60, height:60, borderRadius:30 }}/>
                <Text style={{marginTop: 5, textAlign: 'center'}}>{item.name}</Text>
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

export default CharacterTypes

const styles = StyleSheet.create({})