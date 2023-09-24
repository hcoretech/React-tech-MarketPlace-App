import React from 'react';
import {Text,View, TouchableOpacity,StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Settings(){
   return(
    <SafeAreaView style={styles.container}>
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
            fontWeight:'bold',
          }}>
           Account
          </Text>
        </View>
        </View>

       <View style={{elevation:4,flexDirection:'row',width:'90%',backgroundColor:'#fff',padding:20,borderRadius:5,gap:10}}>
   
        <View style={{borderRadius:70,padding:39,backgroundColor:'#C4C4C4'
        }}>

        </View>
      
        <View  style={{width:'30%',backgroundColor:'#fff',elevation:-3,padding:8,height:'60%',borderRadius:10}}>
            <Text style={{fontSize:24,marginLeft:15,color:'#000',backgroundColor:'#fff',elevation:4}}>hcore</Text>
        </View>
       </View>

       <View style={{ width:'100%',gap:10,marginTop:70}}>

      <View style={{elevation:4,backgroundColor:'#fff',padding:20,width:'100%'}}>
        <Text style={{fontSize:20}}>
          Orders 
        </Text>
      </View>


      <View style={{elevation:4,backgroundColor:'#fff',padding:20,width:'100%'}}>
        <Text style={{fontSize:20}}>
          Returns and Refunds
        </Text>
      </View>


      <View style={{elevation:4,backgroundColor:'#fff',padding:20,width:'100%'}}>
        <Text style={{fontSize:20}}>
          Account Information
        </Text>
      </View>


      <View style={{elevation:4,backgroundColor:'#fff',padding:20,width:'100%'}}>
        <Text style={{fontSize:20}}>
         Security and Settings  
        </Text>
      </View>


      <View style={{elevation:4,backgroundColor:'#fff',padding:20,width:'100%'}}>
        <Text  style={{fontSize:20}}>
         Help
        </Text>
      </View>
      </View>

    </SafeAreaView>
   )
}

const styles=StyleSheet.create({
    container:{
       display:'flex',
       alignItems:'center',
       
       backgroundColor:'#FDFEFF',
       width:'100%',
       overflow:'visible',
       marginTop:25,
       height:'100%'
    },
    header:{
      padding:20,
      borderRadius:5,
      width:'100%',
      justifyContent:'flex-start',
      
      flexDirection:'row',
    
    },
  });