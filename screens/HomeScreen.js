import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import Carousel from '../components/Carousel';
import CharacterTypes from '../components/CharacterTypes';


const HomeScreen = () => {
    return(
        <SafeAreaView>
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
                borderRadius:  7
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
        </SafeAreaView>
    )   
}

export default HomeScreen

const styles = StyleSheet.create({})