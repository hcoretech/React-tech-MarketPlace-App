import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons'; 
import Home from './Home';
import Settings from './Settings';
import Search from './Search';
import Cart from './Cart';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarIcon:{
         color:'blue',
        },
       tabBarStyle:{
      backgroundColor:'#EFF5FB',
      borderRadius:5
       },
        tabBarActiveTintColor: '#e91e63',
        
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown:false,
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={24} color="black" />
          ),
        }}
      />
       <Tab.Screen
        name="Search"
        component={Search}
        options={{
          headerShown:false,
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-search" size={24} color="black" />
          ),
          //tabBarBadge: ,
        }}
      />
      <Tab.Screen
        name="Cart"

        component={Cart}
        options={{
          headerShown:false,
          tabBarLabel: 'Cart',
          tabBarIcon: ({ color, size }) => (
            <Feather name="shopping-cart" size={24} color="black" />
          ),
          tabBarBadge:2 ,
        }}
      />
      <Tab.Screen
        name="Settings"

        component={Settings}
        options={{
          headerShown:false,
          tabBarLabel: 'Setting',
          tabBarIcon: ({ color, size }) => (
            <Feather name="settings" size={24} color="black" />
          ),
          //tabBarBadge: ,
        }}
      />
    </Tab.Navigator>
  );
}