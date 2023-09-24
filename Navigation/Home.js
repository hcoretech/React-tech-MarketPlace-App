`use strict`

import React, { useEffect ,useState} from "react";
import{Text,View,TextInput, Alert, StyleSheet,Image, Pressable,ScrollView} from 'react-native'
import { SafeAreaView }  from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import { MaterialCommunityIcons } from '@expo/vector-icons';
const images=require('/Users/hcore/Awe/assets/Product.png');
export default function Home({navigation}){ 
   const[count,setCount]=useState(0);

   


   
   const press =()=>{
    setCount(count + 1);
   }
    
     

    return(
     <SafeAreaView style={styles.container} >

<View style={{
          flexDirection:'row',
          justifyContent:'space-between',
          width:'90%',
          position:'relative',
          marginTop:30,
          bottom:5
        

         }}>
       <View style={{elevation:5,backgroundColor:'#fff',borderRadius:5}}>
          <Pressable onPress={press} style={{
          
            padding:10,
            borderRadius:25,
            alignItems:'center'
          }}>
          <AntDesign name="bars" size={20} color="#000" />
          </Pressable>
          
      </View>
      <View style={{elevation:5,backgroundColor:'#fff',borderRadius:5}}>
          <Pressable onPress={press} style={{
            padding:10,
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
            fontWeight:'bold',
            

          }}>
           Home
          </Text>
        </View>
        </View>
       
        <View style={styles.headers}>
          <View style={{
            margin:20,
            gap:10
          }}>
           <Text style={{
            fontSize:18,
            color:'#fff'
           }}>Iphone 11 pro</Text>
           <Text style={{
            fontSize:16,
         
            color:'#fff'
           }}>NGN 11</Text>
          </View>
           <View>
           <Image
        style={styles.image}
        source={images} 
        contentFit='contain'/>

           </View>

        </View>

         <View style={{
          marginTop:20,
          flexDirection:'row',
          justifyContent:'space-between',
          width:'80%'
         }}>
       <View style={{elevation:5,backgroundColor:'#fff',borderRadius:5,padding:5}} >
          <Pressable onPress={()=>{
            navigation.navigate('Categories',{merge:true});
          }} style={{
             
            padding:5,
            borderRadius:25,
            alignItems:'center'
          }}>
          <AntDesign name="bars" size={24} color="#0001FC" />
          </Pressable>
          <Text>
            Categories
          </Text>
      </View>
      <View style={{elevation:5,backgroundColor:'#fff',borderRadius:5,padding:5}} >
          <Pressable onPress={press} style={{
          
            padding:5,
            borderRadius:25,
            alignItems:'center',
            width:'100%'
          }}>
       <MaterialCommunityIcons name="star-outline" size={24} color="#0001FC" />
          </Pressable>
          <Text>
            Favourites
          </Text>
          </View>
          <View style={{elevation:5,backgroundColor:'#fff',borderRadius:5,padding:5}}>
          <Pressable onPress={press} style={{

            padding:5,
            borderRadius:25,
            alignItems:'center',
            width:'100%'
            
          }}>
      <Octicons name="gift" size={24} color="#0001FC" />
          </Pressable>
          <Text>
            TSend
          </Text>
          </View>
          
          <View style={{elevation:5,backgroundColor:'#fff',borderRadius:5,padding:5}}>
          <Pressable onPress={press} style={{
         
            padding:5,
            borderRadius:25,
            alignItems:'center',
             
          }}>
<Feather name="users" size={24} color="#0001FC" />
          </Pressable>
          <Text>
            Best Selling
          </Text>
        </View>
         </View>
         <ScrollView style={{width:'100%'}}>

        <View style={{
          marginTop:25,
          justifyContent:'center',
          alignItems:'center'
        }}>
          <Text style={{
            fontSize:30,
            
          }}>
            Hot Deals
          </Text>
        </View>

           <View style={{
            width:'100%',
            justifyContent:'space-between',
            alignItems:'center',
            display:'flex',
            flexDirection:'row'
            
           }}>
          
           <View  style={{ 
             padding:30,
            margin:30,
            backgroundColor:'#fff',
            borderRadius:15,
            elevation:5,
            justifyContent:'center'
           
           }}>
           
               <View style={{
                backgroundColor:'#E0ECF8',
                top:-28,
                right:26,
                position:'relative',
                width:'30%',
                borderRadius:5
               }}>
                <Text style={{
                  color:'#1F53E4'
                }}>
                  -50%
                </Text>
               </View>
           

           <View>
           <Image
        source={images} 
        contentFit='contain'/>
           </View>

           <View>
            <Text>
              SmartPhones
            </Text>
           </View>
           </View>
       
           <View style={{ 
            padding:30,
            margin:30,
            backgroundColor:'#fff',
            borderRadius:15,
            elevation:5,
            justifyContent:'center'
           }}>
               <View style={{
                backgroundColor:'#E0ECF8',
                top:-28,
                right:26,
                position:'relative',
                width:'30%',
                borderRadius:5
               
               }}>
                <Text style={{
                  color:'#1F53E4'
                }}>
                  -50%
                </Text>
               </View>

           <View>
           <Image
        source={images} 
        contentFit='contain'
      />
           </View>
           <View>
            <Text>
              SmartPhones
            </Text>
           </View>
            </View>
           </View> 
      
           <View style={{
          marginTop:25,
          justifyContent:'center',
          alignItems:'center'
        }}>
          <Text style={{
            fontSize:30,
            fontWeight:'bold',
            
         

          }}>
            All product
          </Text>
        </View>

           <View style={{
            width:'100%',
            justifyContent:'space-between',
            alignItems:'center',
            display:'flex',
            flexDirection:'row'
            
           }}>
          
           <View  style={{ 
             padding:30,
            margin:30,
            backgroundColor:'#fff',
            borderRadius:15,
            elevation:5,
            justifyContent:'center'
           
           }}>
           
               <View style={{
                backgroundColor:'#E0ECF8',
                top:-28,
                right:26,
                position:'relative',
                width:'30%',
                borderRadius:5
               }}>
                <Text style={{
                  color:'#1F53E4'
                }}>
                  -50%
                </Text>
               </View>
           

           <View>
           <Image
        source={images} 
        contentFit='contain'/>
           </View>

           <View>
            <Text>
              SmartPhones
            </Text>
           </View>
           </View>
       
           <View style={{ 
            padding:30,
            margin:30,
            backgroundColor:'#fff',
            borderRadius:15,
            elevation:5,
            justifyContent:'center'
           }}>
               <View style={{
                backgroundColor:'#E0ECF8',
                top:-28,
                right:26,
                position:'relative',
                width:'30%',
                borderRadius:5
               
               }}>
                <Text style={{
                  color:'#1F53E4'
                }}>
                  -50%
                </Text>
               </View>

           <View>
           <Image
        source={images} 
        contentFit='contain'
      />
           </View>
           <View>
            <Text>SmartPhones
            </Text>
           </View>
            </View>
           </View> 
         </ScrollView>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
  container:{
   display:'flex',
   alignItems:'center',
   justifyContent:'center',
   backgroundColor:'#FDFEFF',
   width:'100%',
   height:'100%',
   overflow:'visible'
  

  },
header:{
  padding:2,
  borderRadius:5,
  width:'90%',
  justifyContent:'flex-start',
  display:'flex',
  flexDirection:'row',

},
headers:{
  padding:20,
  borderRadius:5,
  width:'90%',
   marginTop:20,
  justifyContent:'space-between',
  display:'flex',
  flexDirection:'row',
  backgroundColor:'#000',
  height:130,
  elevation:5
}
,
image:{
  width:90,
  height:100,
  position:'relative',
  bottom:10,
  right:5

},



})