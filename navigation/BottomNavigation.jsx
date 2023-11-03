import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen';
import Icon2 from 'react-native-vector-icons/Feather'

import Icon4 from 'react-native-vector-icons/Feather'
import Icon5 from 'react-native-vector-icons/AntDesign'
import Icon3 from 'react-native-vector-icons/Fontisto'
import StackScreen from '../screens/StackScreen';
import CommentScreen from '../screens/CommentScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MenuScreen from '../screens/MenuScreen';
import tw from 'twrnc'

const Tab = createBottomTabNavigator();

const screenOptions = {
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        elevation: 0,
        height: 60,

    },

}

const BottomNavigation = () => {
    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen name='Home' component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={tw`flex flex-col items-center`}>
                                <Icon name='home' size={24}
                                   style={focused ? tw`text-[#00ACEE]` : tw`text-gray-500`}

                                />
                                <Text style={[tw`text-xs`, focused ? tw`text-[#00ACEE]` : tw`text-gray-500`]}>Home</Text>
                            </View>
                        )


                    }
                }}

            />
            <Tab.Screen name='Comment' component={CommentScreen}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return <View style={tw`flex flex-col items-center`}>
                            <Icon3 name='comments' size={24}
                               style={focused ? tw`text-[#00ACEE]` : tw`text-gray-500`}
                            />
                            <Text style={[tw`text-xs`, focused ? tw`text-[#00ACEE]`
                             : tw`text-gray-500`]}>Messages</Text>
                        </View>
                    }
                }}

            />

            <Tab.Screen name='Saved' component={MenuScreen}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return <View style={tw`flex flex-col items-center`}>
                            <Icon2 name='search' size={24}
                                style={focused ? tw`text-[#00ACEE]` : tw`text-gray-500`}
                            />
                            <Text style={[tw`text-xs`, focused ? tw`text-[#00ACEE]` : tw`text-gray-500`]}>Search</Text>
                        </View>
                    }
                }}

            />
            <Tab.Screen name='Menu' component={StackScreen}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={tw`flex flex-col items-center`}>
                                <Icon2 name='bookmark' size={24}
                                    style={focused ? tw`text-[#00ACEE]` : tw`text-gray-500`}

                                />
                                <Text style={[tw`text-xs`, focused ? tw`text-[#00ACEE]` : tw`text-gray-500`]}>Saved</Text>

                            </View>
                        )
                    }
                }}

            />
            <Tab.Screen name='User' component={ProfileScreen}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return <View style={tw`flex flex-col items-center`}>
                            <Icon4 name='user' size={24}
                                style={focused ? tw`text-[#00ACEE]` : tw`text-gray-500`}
                            />
                            <Text style={[tw`text-xs`, focused ? tw`text-[#00ACEE]` : tw`text-gray-500`]}>User</Text>
                        </View>
                    }
                }}

            />

        </Tab.Navigator>
    )
}

export default BottomNavigation
