import { StyleSheet, Text, View, TouchableOpacity, Animated, TextInput, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import Icon6 from 'react-native-vector-icons/MaterialIcons'
import Icon2 from 'react-native-vector-icons/Fontisto'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

const ForgotScreen = () => {
    const navigation = useNavigation();

    const [isFocusEmail, setFocusEmail] = useState(false);
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');


    const handleSend = () => {
        if(email === '') {
            setEmailError('Please enter your email');
        } else{
            navigation.navigate('Verify')
        };
    }
    

    const labelAnimation = new Animated.Value(isFocusEmail || email !== '' ? 1 : 0);

    const translateY = labelAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [isFocusEmail ? -10 : 8, isFocusEmail ? -10 : 0],
    });

    const fontSize = labelAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [16, 12],
    });
    return (
        <SafeAreaView style={styles.edit}>
            <ScrollView style={tw`mt-6 mx-4`} showsVerticalScrollIndicator={false}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={tw``}>
                    <Icon6 color="#00ACEE" name='arrow-back' size={23} />
                </TouchableOpacity>
                <Image source={require('../assets/forgot.png')} style={tw`mt-10`}/>
                <View style={tw`mt-10`}>
                    <Text style={tw`text-[#00ACEE] text-lg text-center`}>Forgot Password?</Text>
                    <View style={[tw`flex flex-row gap-x-1 items-center border
           border-[#00ACEE] border-opacity-35  rounded-md `, styles.dropdown, 
           isFocusEmail && tw`border border-[#00ACEE]`, emailError && tw`border-red-500`]}>
                        <Icon2 name='email' size={19} />
                        <View style={[emailError ? tw`bg-red-500 w-0.2 h-4` : styles.line]}></View>
                       
                        <TextInput
                            placeholder="Email"
                            placeholderTextColor="#000"
                            value={email}
                            onChange={(e) =>{
                                setEmail(e.target.value);
                                setEmailError('');
                            }}
                            onFocus={() => setFocusEmail(true)}
                            onBlur={() => setFocusEmail(false)}
                            style={[tw`w-[19.5rem]`, styles.input]}
                        />
                    </View>
                    {emailError !== '' && <Text style={tw`text-red-500 text-xs`}>{emailError}</Text>}
                    <TouchableOpacity
                        onPress={handleSend}
                        style={[tw`bg-[#00ACEE] rounded-md mt-4`, styles.button]}>
                        <Text style={tw`text-center  p-1.5 text-lg text-white font-bold`}>
                            Send</Text>
                    </TouchableOpacity>
                    <View style={tw`flex flex-row items-center justify-center gap-x-2 mt-4`}>
                        <Text>Remember Password?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text style={tw`text-[#00ACEE]`}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ForgotScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 2,
        paddingTop: 12,
    },
    lin: {
        width: 40,
        backgroundColor: 'gray',
        height: 0.8,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#BFBFBF', // Shadow color (light gray)
        shadowOffset: { width: 3, height: 3 }, // Shadow offset
        shadowOpacity: 1, // Shadow opacity
        shadowRadius: 5, // Shadow blur radius
    },
    input: {
        boxShadow: 'inset 4px 4px 4px rgba(104, 123, 158, 0.2), inset -4px -4px 4px rgba(255, 255, 255, 0.25)',
        border: '0.5px solid rgba(227, 237, 247, 1)',
    },
    edit: {
        flex: 1,
        backgroundColor: 'white',
    },
    dropdown: {
        height: 48,
        marginTop: 15,
        boxShadow: 'inset 4px 4px 4px rgba(104, 123, 158, 0.2), inset -4px -4px 4px rgba(255, 255, 255, 0.25)',
        border: '0.5px solid rgba(227, 237, 247, 1)',
        paddingHorizontal: 8,
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'relative',
        left: -25,
        top: -30,
        backgroundColor: 'transparent',


    },
    label1: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        marginTop: 6,
        top: 3,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    red: {
        backgroundColor: 'red',
        width: 1,
        height: 16,
      },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 50,
        fontSize: 16,
    },
    line: {
        backgroundColor: '#00acee',
        opacity: 0.3,
        width: 1,
        height: 16,
    }
});