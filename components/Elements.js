import { ScrollView, StyleSheet, Text, View, Image, Pressable} from 'react-native'
import React from 'react'

const Regions = () => {
    const dataRegions = [
        {
            id:0,
            image: require('../assets/img/icon_element/anemo-elementicon.png'),
            name: 'Anemo',
            archon: 'Venti',
        },
        {
            id:1,
            image: require('../assets/img/icon_element/cryo-elementicon.png'),
            name: 'Cryo',
            archon: '-',
        },
        {
            id:2,
            image: require('../assets/img/icon_element/dendro-elementicon.png'),
            name: 'Dendro',
            archon: 'Nahida',
        },
        {
            id:3,
            image: require('../assets/img/icon_element/electro-elementicon.png'),
            name: 'Electro',
            archon: 'Raiden Shogun',
        },
        {
            id:4,
            image: require('../assets/img/icon_element/hydro-elementicon.png'),
            name: 'Hydro',
            archon: 'Furina',
        },
        {
            id:5,
            image: require('../assets/img/icon_element/pyro-elementicon.png'),
            name: 'Pyro',
            archon: 'Murata',
        },
        {
            id:6,
            image: require('../assets/img/icon_element/geo-elementicon.png'),
            name: 'Geo',
            archon: 'Zhongli',
        },
    ]
  return (
    <View style={{margin:10}}>
      <Text style={{margin:10, fontWeight: 'bold'}}>Regions: </Text>
            {dataRegions.map((item, index)=>(
                <View key={item.id} style={{marginVertical:15}}>
                    <Pressable style={{flexDirection:'row'}}>
                        <Image source={item.image}/>
                        <View>
                        <Text style={{fontSize:16, fontWeight:'normal', marginTop:40, marginLeft:10}}>Element:
                        <Text style={{fontWeight:'bold'}}> {item.name}</Text>
                        </Text>
                        <Text style={{fontSize:16, fontWeight:'normal', marginTop:5, marginLeft:10}}>Archon:
                        <Text style={{fontWeight:'bold'}}> {item.archon}</Text>
                        </Text>
                        </View>
                    </Pressable>
                </View>
            ))}
    </View>
  )
}

export default Regions

const styles = StyleSheet.create({})