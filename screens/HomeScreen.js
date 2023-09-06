import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Pressable, ScrollView } from 'react-native'
import { AntDesign, Ionicons } from '@expo/vector-icons';
import Carousel from '../components/Carousel';
import CharacterTypes from '../components/CharacterTypes';
import RegiontTypes from '../components/RegoinTypes';
import Elements from '../components/Elements';


const HomeScreen = () => {
    return(
        <ScrollView >
            {/* Search Bar */}
            <View style={{
                flexDirection: 'row', 
                alignItems: 'center', 
                justifyContent:'space-between',
                borderWidth: 1,
                marginLeft: 10,
                marginRight: 10,
                marginBottom: 10,
                marginTop: 50,
                padding: 10,
                borderColor: '#C0C0C0',
                borderRadius:  7,
                }}>
                <TextInput style={{
                    fontSize: 17
                }}
                placeholder='Search for Character'/>
                <AntDesign name="search1" size={24} color="#E52B50" />
            </View>
            {/* IMAGE SLIDER */}
            <Carousel/>
            {/* Character Types */}
            <CharacterTypes/>
             {/* Regions Types */}
             <RegiontTypes/>
            {/* Filter Button */}
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-around', marginVertical:15}}>
                <Pressable style={{marginHorizontal:10, flexDirection:'row', alignItems:'center', borderWidth:1, borderColor:'#D0D0D0', padding:10, borderRadius:20, justifyContent:'center'}}>
                    <Text>
                        Filter
                        <Ionicons name="filter" size={24} color="black" />
                    </Text>
                </Pressable>

                <Pressable style={{marginHorizontal:10, flexDirection:'row', alignItems:'center', borderWidth:1, borderColor:'#D0D0D0', padding:10, borderRadius:20, justifyContent:'center'}}>
                    <Text>
                        Sort by Name
                    </Text>
                </Pressable>

                <Pressable style={{marginHorizontal:10, flexDirection:'row', alignItems:'center', borderWidth:1, borderColor:'#D0D0D0', padding:10, borderRadius:20, justifyContent:'center'}}>
                    <Text>
                       Sort by region
                    </Text>
                </Pressable>
            </View>
             {/* Element Types */}
            <Elements/>
        </ScrollView>
    )   
}

export default HomeScreen

const styles = StyleSheet.create({})