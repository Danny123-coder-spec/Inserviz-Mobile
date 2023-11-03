import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import Icon6 from 'react-native-vector-icons/MaterialIcons'
import Icon5 from 'react-native-vector-icons/Feather'
import Icon3 from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'

const NewPassScreen = () => {
    const navigation = useNavigation();
    const [isFocused, setIsFocused] = useState('');
    const [isFocusedPass, setIsFocusedPass] = useState(false);
    const [pass, setPass] = useState('');
    const [confirmed, setConfirmed] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const [isVisibleToggle, setIsVisibleToggle] = useState(false);

    const handleToggleEye = () => {
        setIsVisible(!isVisible);
    }

    const handleVisible = () => {
        setIsVisibleToggle(!isVisibleToggle);
    }
    return (
        <SafeAreaView style={tw`flex-1 bg-[#fff]`}>
            <ScrollView showsVerticalScrollIndicator={false} style={tw`mt-6 mx-4`}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={tw``}>
                    <Icon6 color="#00ACEE" name='arrow-back' size={20} />
                </TouchableOpacity>
                <Image source={require('../assets/newPass.png')} style={tw`mt-10`} />
                <View style={tw`mt-8`}>
                    <Text style={tw`text-[#00ACEE] text-center text-lg`}>New Password</Text>
                    <View style={[tw`flex flex-row gap-x-1 p-1.5 items-center border
           border-[#00ACEE] border-opacity-20 mt-4 rounded-md`, styles.dropdown, isFocused && tw`border border-[#00ACEE]`]}>
                        <Icon3 name='lock' size={19} />
                        <View style={styles.line}></View>

                        <TextInput
                            placeholder="Password"
                            placeholderTextColor="#000"
                            value={pass}
                            secureTextEntry={!isVisible}
                            autoCapitalize='none'
                            autoCorrect={false}

                            onChange={(e) => setPass(e.target.value)}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                            style={tw`w-[18rem]`}
                        />
                        <TouchableOpacity onPress={handleToggleEye}>
                            <Icon5 name={isVisible ? 'eye' : 'eye-off'} size={19} />
                        </TouchableOpacity>
                    </View>
                    <View style={[tw`flex flex-row gap-x-1 items-center border
           border-[#00ACEE] border-opacity-20 p-1.5 rounded-md mt-4`, styles.dropdown, isFocusedPass && tw`border border-[#00ACEE]`]}>
                        <Icon3 name='lock' size={19} />
                        <View style={styles.line}></View>

                        <TextInput
                            placeholder="Confirm Password"
                            placeholderTextColor="#000"
                            value={confirmed}
                            secureTextEntry={!isVisibleToggle}
                            autoCapitalize='none'
                            autoCorrect={false}

                            onChange={(e) => setConfirmed(e.target.value)}
                            onFocus={() => setIsFocusedPass(true)}
                            onBlur={() => setIsFocusedPass(false)}
                            style={tw`w-[18rem]`}
                        />
                        <TouchableOpacity onPress={handleVisible}>
                            <Icon5 name={isVisibleToggle ? 'eye' : 'eye-off'} size={19} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Login')}
                        style={[tw`bg-[#00ACEE] rounded-md mt-4 `, styles.button]}>
                        <Text style={tw`text-center  p-1.5 text-lg text-white font-bold`}>
                            Create New Password</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default NewPassScreen

const styles = StyleSheet.create({
    line: {
        backgroundColor: '#00acee',
        opacity: 0.3,
        width: 1,
        height: 16,
    }
})