import { StyleSheet, Text, View, Switch, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import Icon2 from 'react-native-vector-icons/EvilIcons'
import { useNavigation } from '@react-navigation/native'
import Icon3 from 'react-native-vector-icons/MaterialIcons'
import Icon4 from 'react-native-vector-icons/FontAwesome5'
import Icon5 from 'react-native-vector-icons/FontAwesome'

const Settings = () => {
    const navigation = useNavigation();
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => {
        setIsEnabled((prevSwitch) => !prevSwitch)
    }
    return (
        <View style={tw`mt-4`}>
            <View style={tw`flex flex-row items-center justify-between`}>
                <Text style={tw`text-lg`} >Notifications</Text>
                <View style={tw`flex flex-row items-center`}>
                    <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={isEnabled ? '#00ACEE' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                    {isEnabled ? (
                        <Text>On</Text>
                    ) : (
                        <Text>Off</Text>
                    )}
                </View>
            </View>
            <View style={tw`mt-6`}>

                <TouchableOpacity style={tw`flex flex-row mt-4  border-b border-gray-500 border-opacity-10 
                items-center justify-between `}>

                    <View style={tw`flex flex-row gap-x-2 items-center`}>
                        <Icon3 name='privacy-tip' style={tw`text-gray-500`} size={20}/>
                        <Text style={tw`text-gray-500`}>Privacy</Text>

                    </View>
                    <Icon2 name='chevron-right' size={25} color="gray" />
                </TouchableOpacity>
                <TouchableOpacity style={tw`flex flex-row mt-5  border-b border-opacity-10 
                items-center justify-between border-gray-500`}>
                    <View style={tw`flex flex-row gap-x-2 items-center`}>
                        <Image source={require('../assets/terms.png')} style={tw`w-4 h-4`}/>
                        <Text style={tw`text-gray-500`}>Terms And Conditions</Text>

                    </View>
                    <Icon2 name='chevron-right' size={25} color="gray" />
                </TouchableOpacity>
                <TouchableOpacity style={tw`flex flex-row mt-5  border-b border-opacity-10 
                items-center justify-between border-gray-500`} onPress={() => navigation.navigate('Contact')}>
                    <View style={tw`flex flex-row gap-x-2 items-center`}>
                        <Icon3 name='contact-page' style={tw`text-gray-500`} size={20}/>
                        <Text style={tw`text-gray-500`}>Contact Us</Text>

                    </View>
                    <Icon2 name='chevron-right' size={25} color="gray" />
                </TouchableOpacity>
                <TouchableOpacity style={tw`flex flex-row mt-5  border-b border-opacity-10 
                items-center justify-between border-gray-500`}>
                    <View style={tw`flex flex-row gap-x-2 items-center`}>
                        <Icon5 name='legal' style={tw`text-gray-500`}/>
                        <Text style={tw`text-gray-500`}>Legal</Text>

                    </View>
                    <Icon2 name='chevron-right' size={25} color="gray" />
                </TouchableOpacity>
                <TouchableOpacity 
                style={tw`flex flex-row mt-5  border-b border-opacity-10 
                items-center justify-between border-gray-500`}
                 onPress={() => navigation.navigate('About')}>
                    <View style={tw`flex flex-row gap-x-2 items-center`}>
                        <Icon4 name='users' style={tw`text-gray-500`} size={20}/>
                        <Text style={tw`text-gray-500`}>About Us</Text>

                    </View>
                    <Icon2 name='chevron-right' size={25} color="gray" />
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Settings

const styles = StyleSheet.create({
    border: {
        borderColor: 'gray'
    }
})