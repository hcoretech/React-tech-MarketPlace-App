import React, { useEffect ,useState} from "react";
import{Text,View,TextInput, Alert, StyleSheet,Image, Pressable} from 'react-native'
import { SafeAreaView }  from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { ScrollView } from "react-native";
import { Ionicons } from '@expo/vector-icons'; 

const googleHome=require('/Users/hcore/Awe/assets/googleHome.png');
const charger=require('/Users/hcore/Awe/assets/charger.png')

export default function Search({navigation}){
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
           Search
          </Text>
        </View>
        </View>


    <View style={{
        justifyContent:'space-between',
        width:'90%',
        flexDirection:'row'
    }}>
        <TextInput style={{
                width:'80%',
                padding:10,
                elevation:5,
                backgroundColor:'#fff',
                borderRadius:15,   
                borderColor:'#000',
                color:'#000'
            }} 
            
            placeholder="what are you looking for here ?" 
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

<View style={{elevation:5,backgroundColor:'#fff',borderRadius:5,padding:5}}>
        <Pressable onPress={press} style={{
       
          padding:5,
          borderRadius:25,
          alignItems:'center',
          width:'100%'
        }}>
  <Ionicons name="ios-search" size={24} color='#EA1C1C'/>
        </Pressable>
        </View>

    </View>
      <View style={{padding:30,justifyContent:'flex-start',width:'100%' }}>
        <Text style={{fontSize:29}}>
          Last Viewed
        </Text>
      </View>

      <View style={{
        gap:20,
        width:'90%',
        marginLeft:25
      }}>

      <View style={{flexDirection:'row',elevation:5,backgroundColor:'#fff',padding:30,justifyContent:'space-between',width:'90%',borderRadius:5}}>
         <View>
          <Image
            source={googleHome}
            contentFit="contain"
          />
         </View>

         <View syle={{
          gap:20
         }}>
       
             <Text style={{fontSize:22,position:'relative',left:10,bottom:5}}>
              Google Home mini
             </Text>
          
           
             <Text style={{marginTop:3,marginLeft:20,color:'#0135EB',fontSize:18}}>
              NGN 11
             </Text>
            
         </View>

      </View>

      <View style={{flexDirection:'row',elevation:5,backgroundColor:'#fff',padding:30,justifyContent:'space-between',width:'90%',borderRadius:5}}>
         <View>
          <Image
            source={charger}
            contentFit="contain"
          />
         </View>

         <View syle={{
          gap:20
         }}>
       
             <Text style={{fontSize:22,position:'relative',left:10,bottom:5}}>
              Google Home mini
             </Text>
          
           
             <Text style={{marginTop:3,marginLeft:20,color:'#0135EB',fontSize:18}}>
              NGN 11
             </Text>
            
         </View>

      </View>


      <View style={{flexDirection:'row',elevation:5,backgroundColor:'#fff',padding:30,justifyContent:'space-between',width:'90%',borderRadius:5}}>
         <View>
          <Image
            source={charger}
            contentFit="contain"
          />
         </View>

         <View syle={{
          gap:20
         }}>
       
             <Text style={{fontSize:22,position:'relative',left:10,bottom:5}}>
              Google Home mini
             </Text>
          
           
             <Text style={{marginTop:3,marginLeft:20,color:'#0135EB',fontSize:18}}>
              NGN 11
             </Text>
            
         </View>

      </View>

    </View>



<View style={{
  flexDirection:'row',
  justifyContent:'space-between',
  width:'80%',
  padding:10,
  marginTop:20
}}>
  <Text style={{
    fontSize:29
  }}>
    Latest search
  </Text>
  <Text style={{fontSize:18}}>clean all History</Text>
</View>
<View style={{
  flexDirection:'row',
  width:'70%',
  justifyContent:'space-between'
}}>
  <View>
    <Text style={{fontSize:20,opacity:0.3}}>
      Smart Speakers
    </Text>
  </View>
  <View>
  <AntDesign name="close" size={13} color="black" /> 
  </View>
</View>

<View style={{
  flexDirection:'row',
  width:'70%',
  justifyContent:'space-between',
}}>
  <View>
    <Text style={{fontSize:20,opacity:0.3}}>
      Usb-c Charger
    </Text>
  </View>
  <View>
  <AntDesign name="close" size={13} color="black" /> 
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