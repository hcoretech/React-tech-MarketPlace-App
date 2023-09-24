import React from 'react';
import {Text,View, TouchableOpacity,StyleSheet,Image ,ScrollView, Pressable} from 'react-native';
import { SafeAreaView,} from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
const images=require('/Users/hcore/Awe/assets/Product.png');
const pod= require('/Users/hcore/Awe/assets/gg.png');
export default function Cart(){
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
            fontWeight:('bold'),

          }}>
           Checkout
          </Text>
        </View>
        </View>

 

        <View style={{
            width:'100%',
            flexDirection:'row',
            
           }}>
          
           <View  style={{ 
             padding:20,
            margin:30,
            width:'50%',
            backgroundColor:'#fff',
            borderRadius:5,
            elevation:3,
            justifyContent:'center'
           
           }}>
           
               <View style={{
              
               flexDirection:'row',
                width:'100%',
            
                justifyContent:'space-between'
               }}>
                <Text style={{
                  
                  color:'#1F53E4',
                  backgroundColor:'#E0ECF8',
                  borderRadius:5,
                }}>
                  New
                </Text>
                <AntDesign name="closecircleo" size={18} color="black" />
               </View>
           

           <View style={{
           alignItems:'center',
            width:'100%',
            marginTop:20,
           }}>
           <Image style={{
         
             
           }}
        source={images} 
        contentFit='contain'/>
           </View>

           <View style={{
            alignItems:'flex-start',
            width:'100%',
            marginTop:20,
            gap:7
           }}>
            <Text style={{fontSize:22,}}>
              Iphone 11pro
            </Text>

            <Text style={{fontSize:16, color:'#0135EB'}}  >NGN 225,0000</Text>
             <Text style={{
               opacity:0.3
             }}>white</Text>
           </View>
           </View>
       

            <View  style={{ 
             padding:20,
            margin:30,
            width:'50%',      
            backgroundColor:'#fff',
            borderRadius:5,
            elevation:3,
            justifyContent:'center'
           
           }}>
           
               <View style={{
              
               flexDirection:'row',
                width:'100%',
            
                justifyContent:'space-between'
               }}>
                <Text style={{
                  color:'#1F53E4',
                  backgroundColor:'#E0ECF8',
                  borderRadius:5,
                }}>
                  New
                </Text>
                <AntDesign name="closecircleo" size={18} color="black" />
               </View>
           

           <View style={{
          alignItems:'flex-start',
            width:'100%',
            marginTop:20,
         
           }}>
           <Image style={{
         
             
           }}
        source={pod} 
        contentFit='contain'/>
           </View>

           <View style={{
            alignItems:'flex-start',
            width:'100%',
            marginTop:15,
            gap:7
           }}>
            <Text style={{fontSize:22}}>
              AirPod Pro
            </Text>

            <Text style={{fontSize:16, color:'#0135EB'}}  >NGN 225,0000</Text>
             <Text style={{
               opacity:0.3
             }}>white</Text>
           </View>
           </View>
           </View>

       
       <View style={{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        padding:15
       }}>
          <View>
            <Text style={{
              fontSize:28
            }}>
              Delivery
            </Text>
          </View>

          <View style={{
            alignItems:'center'
          }}>
            <Text style={{
              fontSize:20,
              color:'#0135EB'
            }}>
           Shop C14 HMH Markafi Plaza
            </Text>
            <Text style={{
              opacity:0.3
            }}>
               Fast delivery:21/9/23
            </Text>
          </View>
       </View>

       <View style={{
        width:'100%',
           borderWidth: 0.3,
        borderColor:'black',
        opacity:0.3,
       marginTop:7
       }}>

       </View>
      
       <View style={{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        padding:15
       }}>
          <View>
            <Text style={{
              fontSize:28
            }}>
              Payment
            </Text>
          </View>
        
        <View style={{
          flexDirection:'row',
          gap:2
        }}>
          <View style={{
            alignItems:'center'
          }}>
            <Text style={{
              fontSize:20,
              color:'#0135EB'
            }}>
           Visa  ****356
            </Text>
            <Text style={{
              opacity:0.3
            }}>
               Expire 01/25
            </Text>
          </View>
          <AntDesign  style={{
            alignItems:'center',
            marginTop:10
          }}  name="down" size={13} color="black" />
         </View>

       </View>


       <View style={{
        width:'100%',
           borderWidth: 0.3,
        borderColor:'black',
        opacity:0.3,
       marginTop:7
       }}>
       </View>


       
       <View style={{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        padding:15
       }}>
          <View>
            <Text style={{
              fontSize:28
            }}>
              Delivery
            </Text>
          </View>

          <View style={{
            alignItems:'center'
          }}>
            <Text style={{
              fontSize:20,
              color:'#0135EB'
            }}>
           NGN 225,00000
            </Text>
            <Text style={{
              
              color:'#2DB57D'
            }}>
               Enter a discount code
            </Text>
          </View>
       </View>

      <View style={{
        width:'90%',
        padding:10,
        
      }}>
       <Pressable style={{
        backgroundColor:'#000',
        padding:25,
        alignItems:'center',
        borderRadius:4,
        elevation:20
       }}>
           <Text style={{
            fontSize:25,
            color:'#fff',
            fontWeight:'bold',
          
          
           }}>
            Pay
           </Text>
       </Pressable>
       </View>
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
       overflow:'visible',
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