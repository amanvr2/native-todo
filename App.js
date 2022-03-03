import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";
import Header from "./components/header";
import TodoItem from "./components/todoItem";
import AddTodo from "./components/addTodo";

// export default function App() {

//   const [name, setName] = useState('Aman');
//   const [age, setAge] = useState(25);

//   // const [person, setPerson] = useState({name:'john', age:40});

//   // const changeName = () => {
//   //   setName('verma');
//   // }

//   // const changePerson = () => {
//   //   setPerson({name:'ammu',age:'25'});
//   // }

//   const display = () =>{

//     setName('aaa');
//   }

//   return (
//     <View style={styles.container}>

//       <View>
//         <Text style={styles.header}>My name iss {name}</Text>
//       </View>

//       <View>
//         <Text style={styles.header}>My Age is {age}</Text>
//       </View>

//       <TextInput style = {styles.input} placeholder='Input'/>

//       {/* <View>
//         <Text>My name is {person.name} and age is {person.age}</Text>
//       </View>

//       <View style = {styles.buttonContainer}>
//         <Button title='change name' onPress={changeName}/>
//       </View> */}

//       <View style = {styles.buttonContainer}>
//         <Button title='display person' onPress={display}/>
//       </View>

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   header:{

//     color:'red',
//     fontSize:30,
//   },

//   buttonContainer:{

//     backgroundColor:'black',
//     color:'white',
//     paddingRight:15,
//     paddingLeft:15,
//     marginTop:20,
//   },

//   input:{
//     borderWidth:1,
//     borderColor:'black',
//     padding:5,
//     width:100,
//     marginTop:20,
//   }
// });
export default function App({}) {
  const [todos, setTodos] = useState([
    { text: "Aman", key: "1" },
    { text: "john", key: "2" },
    { text: "smith", key: "3" },
  ]);

  const submitHandler = (text) => {
    setTodos((prevTodos) => {
      return [{ text: text, key: Math.random().toString() }, ...prevTodos];
    });
  };
  console.log(todos);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log("dismissed");
      }}
    >
      <View style={styles.container}>
        <Header />

        <View style={styles.content}>
          <AddTodo onSubmit={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TouchableOpacity>
                  <Text style={styles.item}>{item.text}</Text>
                </TouchableOpacity>

                // <TodoItem item= {item}/>
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  content: {
    padding: 20,
  },

  list: {
    marginTop: 40,
    marginBottom: 40,
  },

  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
  },
});
