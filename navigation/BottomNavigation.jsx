import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen';
import Icon2 from 'react-native-vector-icons/Feather'
import Icon4 from 'react-native-vector-icons/Feather'
import Icon5 from 'react-native-vector-icons/AntDesign'
import Icon3 from 'react-native-vector-icons/Fontisto'
import StackScreen from '../screens/StackScreen';
import CommentScreen from '../screens/CommentScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MenuScreen from '../screens/MenuScreen';

const Tab = createBottomTabNavigator();

const screenOptions = {
    tabBarShowlabel:false,
    headerShown: false,
    tabBarStyle:{
        position:"absolute",
        bottom:0,
        left:0,
        right:0,
        elevation:0,
        height:60,
        
    },
    
}

const BottomNavigation = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name='Home' component={HomeScreen}
        options={{tabBarIcon:({focused}) => {
            return <Icon name='home' size={24}
            color={focused ? 'dodgerblue' : 'gray'}
           
            />
          
           
        }}}
        
        />
        <Tab.Screen name='Menu' component={MenuScreen}
        options={{tabBarIcon:({focused}) => {
            return <Icon5 name='menu-unfold' size={24}
            color={focused ? 'dodgerblue' : 'gray'}
           
            />
        }}}
        
        />
        <Tab.Screen name='Saved' component={StackScreen}
        options={{tabBarIcon:({focused}) => {
            return <Icon2 name='bookmark' size={24}
            color={focused ? 'dodgerblue' : 'gray'}
            />
        }}}
        
        />
         <Tab.Screen name='Comment' component={CommentScreen}
        options={{tabBarIcon:({focused}) => {
            return <Icon3 name='comments' size={24}
            color={focused ? 'dodgerblue' : 'gray'}
            />
        }}}
        
        />
         <Tab.Screen name='User' component={ProfileScreen}
        options={{tabBarIcon:({focused}) => {
            return <Icon4 name='user' size={24}
            color={focused ? 'dodgerblue' : 'gray'}
            />
        }}}
        
        />

    </Tab.Navigator>
  )
}

export default BottomNavigation
