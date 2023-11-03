import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon6 from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'
import tw from 'twrnc'

const VerifyScreen = () => {
    const navigation = useNavigation();

    const [digit1, setDigit1] = useState('');
    const [digit2, setDigit2] = useState('');
    const [digit3, setDigit3] = useState('');
    const [digit4, setDigit4] = useState('');

    const [verifyError, setVerifyError] = useState('');

    const handleVerify = () => {
        if (digit1 === '' && digit2 === '' && digit3 === '' && digit4 === '') {
            setVerifyError('');
        } else {
            navigation.navigate('NewPass');
        }
    }


    return (
        <SafeAreaView style={tw`flex-1 bg-[#fff]`}>
            <ScrollView showsVerticalScrollIndicator={false} style={tw`mt-6 mx-4`}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={tw``}>
                    <Icon6 color="#00ACEE" name='arrow-back' size={23} />
                </TouchableOpacity>
                <Image source={require('../assets/checkmail.png')} style={tw`mt-10`} />
                <View style={tw`mt-10`}>
                    <View style={tw`pl-1 flex flex-col items-center gap-y-2 justify-center`}>
                        <Text style={tw`text-[#00ACEE] text-lg`}>Check your mail</Text>
                        <Text>Please enter the verification code we sent</Text>
                    </View>
                    <View style={styles.digits}>
                        {/* <View style={[styles.inputDigit, verifyError && tw`border-red-500`]}> */}
                            <TextInput
                                value={digit1}
                                onChange={(e) => {
                                    setDigit1(e.target.value);
                                    setVerifyError('');
                                }}
                                maxLength={1}
                                keyboardType='numeric'
                                style={[styles.inputDigit, verifyError && tw`border-red-500`]}


                            />
                        {/* </View> */}
                        <TextInput
                            value={digit2}
                            onChange={(e) => setDigit2(e.target.value)}
                            maxLength={1}
                            keyboardType='numeric'
                            style={styles.inputDigit}


                        />
                        <TextInput
                            value={digit3}
                            onChange={(e) => setDigit3(e.target.value)}
                            maxLength={1}
                            keyboardType='numeric'
                            style={styles.inputDigit}


                        />
                        <TextInput
                            value={digit4}
                            onChange={(e) => setDigit4(e.target.value)}
                            maxLength={1}
                            keyboardType='numeric'
                            style={styles.inputDigit}


                        />

                    </View>
                    <TouchableOpacity
                        onPress={handleVerify}
                        style={[tw`bg-[#00ACEE] rounded-md mt-1 mx-1`, styles.button]}>
                        <Text style={tw`text-center  p-1.5 text-lg text-white font-bold`}>
                            Verify</Text>
                    </TouchableOpacity>
                    <View style={tw`flex flex-row items-center justify-center mt-3 gap-x-2 ml-1`}>
                        <Text>Didn't receive code?</Text>
                        <TouchableOpacity onPress={() => { }}>
                            <Text style={tw`text-[#00ACEE]`}>Resend</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default VerifyScreen

const styles = StyleSheet.create({
    digits: {
        flexDirection: 'row',
        alignItems: 'center',

        marginVertical: 20
    },
    inputDigit: {
        width: 80,
        height: 70,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        fontSize: 20,
        textAlign: 'center',
        marginHorizontal: 5,
    },
})