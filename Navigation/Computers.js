`use strict`

import React, { useEffect ,useState} from "react";
import{Text,View,TextInput, Alert, StyleSheet,Image, Pressable,ScrollView} from 'react-native'
import { SafeAreaView }  from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import DropDownPicker from "react-native-dropdown-picker";

 export default function Computers ({navigation,route}){

    const[text,setText]=useState(null);
    const press =()=>{
        setCount(count + 1);
       }

    function Search(e){
        const value= e.target.value
        if (text !==null){
            setText(value)
            console.log('no typing');
        }else{
            Alert('input search');
        }
       } 
    return(
        <SafeAreaView style={styles.container} >
        <View style={{
        
        flexDirection:'row',
        justifyContent:'space-between',
        width:'90%',
        position:'fixed',
        bottom:0, 
       }}>
     <View style={{elevation:5,backgroundColor:'#fff',borderRadius:5,padding:5}}>
        <Pressable onPress={()=>{ navigation.navigate('Categories')}} style={{
          padding:5,
          borderRadius:25,
          alignItems:'center'
        }}>
      <AntDesign style={{elevation:5}}name="arrowleft" size={22} color="black" />
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
           Laptops
          </Text>
        </View>
        </View>


        <View style={{
          width:'100%',
          flexDirection:'row',
          justifyContent:'space-between',
          padding:10
        }}>
            <View>
            <TextInput style={{
                width:'80%',
                padding:10,
                elevation:5,
                backgroundColor:'#fff',
                borderRadius:15,   
                borderColor:'#000',
                color:'#000'
            }}  
            placeholder="" 
            value={text} 
            editable
            multiline
            allowFontScaling={true}
            autocorrect
            autoFocus  
            disableFullscreenUi
            onChangeText={text=>{ 
              setText(text);
            }}/>
            </View>



          <View style={{
            marginTop:10,
            flexDirection:'row'
          }}>
           <Text style={{
            fontSize:20
           }}>
            Filters
           </Text>
           <AntDesign name="down" size={8} color="black" />
          </View>

          <View>
          <AntDesign name="appstore-o" size={18} color="black" />
          </View>

        </View>
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