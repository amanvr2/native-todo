import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';


export default function Header(){

    return (
        <View style={styles.header}>
            <Text style={styles.title}>My Todos</Text>
        </View>


    )
}


const styles = StyleSheet.create({
    header:{
        height:80,
        paddingTop:100,
        backgroundColor:'coral'
    },

    title:{
        fontSize:20,
        textAlign:'center',
        color:'black'
        
    }
    
  
  });