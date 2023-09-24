`use strict`

import React, { useEffect ,useState} from "react";

import{Text,View,TextInput, Alert, StyleSheet,Image, Pressable} from 'react-native'
import { SafeAreaView }  from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { ScrollView } from "react-native";

import { MaterialCommunityIcons } from '@expo/vector-icons';
    export default function({navigation, route}){
      const[count,setCount]=useState(0);

   


   
      const press =()=>{
       setCount(count + 1);
      }
       

       return(
         <SafeAreaView style={styles.container}>
          <View style={{
        
          flexDirection:'row',
          justifyContent:'space-between',
          width:'90%',
          position:'fixed',
          bottom:0,
         
          
         }}>
       <View style={{elevation:5,backgroundColor:'#fff',borderRadius:5,padding:5}}>
          <Pressable onPress={()=>{ navigation.goBack()}} style={{
            padding:5,
            borderRadius:25,
            alignItems:'center'
          }}>
        <AntDesign style={{elevation:5}}name="arrowleft" size={24} color="black" />
          </Pressable>
          
      </View>
      <View style={{elevation:5,backgroundColor:'#fff',borderRadius:5,padding:5}}>
          <Pressable onPress={press} style={{
         
            padding:5,
            borderRadius:25,
            alignItems:'center',
            width:'100%'
          }}>
      <AntDesign name="user" size={20} color="black" />
          </Pressable>
          </View>
         
          
         </View>

        <View style={styles.header}>
        <View style={{
          
             width:'100%',
            alignContent:'center',
            borderRadius:10,
            padding:5,
            backgroundColor:'#fff'
        }}>
          <Text style={{
            fontSize:35,
         
        
           
           
          }}>
           Categories
          </Text>
        </View>
        </View>

         <ScrollView style={{width:'100%'}}>
         <View style={{width:'100%',flexDirection:'column',alignItems:'center',margin:5,gap:15}}>

        <View style={{padding:20,borderRadius:15,elevation:3,backgroundColor:'#fff',width:'80%'}}>
          <Pressable>
            <Text style={{fontSize:25,fontWeight:'100',}}>All</Text>
          </Pressable>
        </View>

        <View style={{padding:20,borderRadius:15,elevation:3,backgroundColor:'#fff',width:'80%'}}>
          <Pressable onPress={()=>{
            navigation.navigate('Computers',{merge:true});
          }}  >
            <Text style={{fontSize:25,}}>Computers</Text>
          </Pressable>
        </View>

        <View style={{padding:20,borderRadius:15,elevation:3,backgroundColor:'#fff',width:'80%'}}>
          <Pressable>
            <Text style={{fontSize:25,}}>Phones</Text>
          </Pressable>
        </View>

        <View style={{padding:20,borderRadius:15,elevation:3,backgroundColor:'#fff',width:'80%'}}>
          <Pressable>
            <Text style={{fontSize:25,}}> Speakers</Text>
          </Pressable>
        </View>

        <View style={{padding:20,borderRadius:15,elevation:3,backgroundColor:'#fff',width:'80%'}}>
          <Pressable>
            <Text style={{fontSize:25,}}>Hardisk</Text>
          </Pressable>
        </View>
        
        <View style={{padding:20,borderRadius:15,elevation:3,backgroundColor:'#fff',width:'80%'}}>
          <Pressable>
            <Text style={{fontSize:25,}}>Computer MotherBoards</Text>
          </Pressable>
        </View>
        

        <View style={{padding:20,borderRadius:15,elevation:3,backgroundColor:'#fff',width:'80%'}}>
          <Pressable>
            <Text style={{fontSize:25,}}>Clothings</Text>
          </Pressable>
        </View>

        <View style={{padding:20,borderRadius:15,elevation:3,backgroundColor:'#fff',width:'80%'}}>
          <Pressable>
            <Text style={{fontSize:25,}}>Jewelries</Text>
          </Pressable>
        </View>

        <View style={{padding:20,borderRadius:15,elevation:3,backgroundColor:'#fff',width:'80%'}}>
          <Pressable>
            <Text style={{fontSize:25,}}>Kitchen Applience</Text>
          </Pressable>
        </View>

        <View style={{padding:20,borderRadius:15,elevation:3,backgroundColor:'#fff',width:'80%'}}>
          <Pressable>
            <Text style={{fontSize:25,}}>Books</Text>
          </Pressable>
        </View>

        <View style={{padding:20,borderRadius:15,elevation:3,backgroundColor:'#fff',width:'80%'}}>
          <Pressable>
            <Text style={{fontSize:25,}}>Gadget</Text>
          </Pressable>
        </View>

        <View style={{padding:20,borderRadius:15,elevation:3,backgroundColor:'#fff',width:'80%'}}>
          <Pressable>
            <Text style={{fontSize:25,}}>Hardisk</Text>
          </Pressable>
        </View>
        


          </View>
        </ScrollView>
          </SafeAreaView>
       );
    }
   

    const styles=StyleSheet.create({
      container:{
         display:'flex',
         alignItems:'center',
         justifyContent:'center',
         backgroundColor:'#FDFEFF',
         width:'100%',
         overflow:'visible',
         marginTop:30
      },
      header:{
        padding:20,
        borderRadius:5,
        width:'100%',
        justifyContent:'flex-start',
        
        flexDirection:'row',
      
      },
    });