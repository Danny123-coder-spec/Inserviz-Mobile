import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import Icon from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/Ionicons'
import Icon3 from 'react-native-vector-icons/Entypo'
import Icon4 from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'

const User = () => {
    const navigation = useNavigation();
    return (
        <View>
            <View style={tw`ml-4`}>
                <Image source={require('../assets/logo.png')} style={styles.logo} />
            </View>
            <View style={tw`flex flex-col`}>
                <Text style={tw`text-3xl text-center text-[#00ACEE] `}>Profile</Text>
                <TouchableOpacity  onPress={() => navigation.navigate("Profile")} style={tw`flex flex-row items-center 
                justify-center bg-white border w-[20rem] mx-6 border-[#00ACEE] border-opacity-5 p-3 mt-3 rounded-md`}>
                    <Image style={tw`h-12 w-12 rounded-full`} source={require('../assets/profile.jpg')} />
                    <View style={tw`ml-2`}>
                        <Text style={tw`text-gray-500`}>Daniel Boadu</Text>
                        <Text style={tw`text-gray-500`}>danielboadu594@gmail.com</Text>
                    </View>
                </TouchableOpacity>
                <View style={tw`flex flex-col items-center`}>
                    <View style={tw`flex flex-row mt-10 mx-4 gap-x-4`}>
                        <TouchableOpacity style={tw`flex flex-col items-center bg-white w-[9.5rem] rounded-md p-6 border border-[#00ACEE] border-opacity-5`} onPress={() => {}}>
                            <Icon name='document-text' size={60} color='#00ACEE' />
                            <Text>Transcript</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={tw`flex flex-col items-center bg-white w-[9.5rem] rounded-md p-6 border border-[#00ACEE] border-opacity-5`} onPress={() =>navigation.navigate('Settings')}>
                            <Icon2 name='settings' size={60} color='#00ACEE' />
                            <Text>Settings</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={tw`flex flex-row mx-6 mt-4 gap-x-4`}>
                        <TouchableOpacity style={tw`flex flex-col items-center bg-white w-[9.5rem] rounded-md p-6 border border-[#00ACEE] border-opacity-5`} onPress={() => navigation.navigate('Help')}>
                            <Icon3 name='help' size={60} color='#00ACEE' />
                            <Text>Help</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={tw`flex flex-col items-center bg-white w-[9.5rem] rounded-md p-6 border border-[#00ACEE] border-opacity-5`} onPress={() => navigation.navigate('')}>
                            <Image source={require('../assets/dark1.png')} style={tw`w-15 h-15`} />
                            <Text>Dark Mode</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity style={tw`bg-[#00ACEE] rounded-md flex items-center mt-10 py-2
                 justify-center mx-6`} onPress={() => {}}>
                    <Text style={tw`text-white text-lg`}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default User

const styles = StyleSheet.create({
    logo: {
        height: 50,
        width: 50,
        resizeMode: 'contain'
    },
})