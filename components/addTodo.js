import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';




export default function AddTodo({onSubmit }){

    const [text, setText] = useState('');

    const changeHandler = (val) =>{
        setText(val);
    
      }
    

    return (
      
        <View>
            <TextInput
                value={text}
                style={styles.input}
                placeholder="enter todo"
                onChangeText={(val) => changeHandler(val)} 
            />

            <Button onPress={() => onSubmit(text)} title = 'add task' color='coral' />       

            {/* <Text>{text}</Text> */}

        </View>


    )
}


const styles = StyleSheet.create({
    input:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:'#ddd'
    },


    
    
  
  })