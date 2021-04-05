import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Button,StyleSheet, Text, View } from 'react-native';

export default function App() {
  
  const[name,setName]=useState("praful");
   const buttonHandler=()=>{
     setName("dwcbjkwg")
   }
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
       <Text style={styles.header}>huidcwegh</Text> 
      </View>
      <Text>{name}</Text>
      <Text>YO YO</Text>
      <View style={styles.buttonContainer}>
        <Button title="button" onPress={buttonHandler}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    color:"pink",
    backgroundColor:"green",
  },
  buttonContainer:{
    marginTop:20,
     
  }
});
