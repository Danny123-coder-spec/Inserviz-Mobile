import { StyleSheet, Text, View, Switch, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import Icon2 from 'react-native-vector-icons/EvilIcons'
import { useNavigation } from '@react-navigation/native'
import Icon3 from 'react-native-vector-icons/MaterialIcons'

const Settings = () => {
    const navigation = useNavigation();
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => {
        setIsEnabled((prevSwitch) => !prevSwitch)
    }
    return (
        <View style={tw`mt-4`}>
            <View style={tw`flex flex-row items-center justify-between`}>
                <Text >Notifications</Text>
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

                <View style={[tw`flex flex-row mt-4  border-b border-opacity-50 
                items-center justify-between `, styles.border]}>

                    <View style={tw`flex flex-row gap-x-2 items-center`}>
                        {/* <Icon3 name='privacy-tip' /> */}
                        <Text style={tw`text-gray-500`}>Privacy</Text>

                    </View>
                    <Icon2 name='chevron-right' size={25} color="gray" />
                </View>
                <TouchableOpacity style={[tw`flex flex-row mt-5  border-b border-opacity-10 
                items-center justify-between`, styles.border]}>
                    <Text style={tw`text-gray-500`}>Terms of service</Text>
                    <Icon2 name='chevron-right' size={25} color="gray" />
                </TouchableOpacity>
                <TouchableOpacity style={[tw`flex flex-row mt-5  border-b border-opacity-50 
                items-center justify-between`, styles.border]}>
                    <Text style={tw`text-gray-500`}>Contact Us</Text>
                    <Icon2 name='chevron-right' size={25} color="gray" />
                </TouchableOpacity>
                <TouchableOpacity style={[tw`flex flex-row mt-5  border-b border-opacity-50 
                items-center justify-between`, styles.border]}>
                    <Text style={tw`text-gray-500`}>Legal</Text>
                    <Icon2 name='chevron-right' size={25} color="gray" />
                </TouchableOpacity>
                <TouchableOpacity style={[tw`flex flex-row mt-5  border-b border-opacity-10 
                items-center justify-between`, styles.border]}>
                    <Text style={tw`text-gray-500`}>About Us</Text>
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