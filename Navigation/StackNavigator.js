import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from "./Home";
import BottomNavigation from "./BottomNavigation";
import Categories from "./Categories";
import Computers from "./Computers";
const stack=createNativeStackNavigator();


export default function StackNavigator(){
    return(
    <stack.Navigator 
    screenOptions={{
        headerShown:false,
    }}>
    <stack.Screen name='bottomNavigation' component={BottomNavigation}/>
    <stack.Screen name='Categories' component={Categories}/>
    <stack.Screen name='Computers' component={Computers}/>
    </stack.Navigator>
    )
    }
    