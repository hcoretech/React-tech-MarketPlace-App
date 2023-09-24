
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./StackNavigator.js";
import { StatusBar } from "expo-status-bar";
import {DarkTheme,
DefaultTheme} from 'react-native'
import Home from './Home.js'


export default function Navigation(){
          return(
            <NavigationContainer>
               <StatusBar style="auto" />
             <StackNavigator/>
            </NavigationContainer>
          )
} 