import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, { useState, useCallback, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Rating } from '@kolking/react-native-rating';


const ContactScreen = () => {
    const textInputRef = useRef();
    const [rating, setRating] = useState(0);
    const [textarea, setTextArea] = useState('');
    const navigation = useNavigation();


    const handleChange = useCallback(
        (value: number) => setRating(Math.round((rating + value) * 5) / 10),
        [rating],
    );

    const handleFocus = () => {
        textInputRef.current.setNativeProps({ selection: { start: 0, end: 0 } })
    };

    const handleSend = () => {
        setTimeout(() => {
            alert('Your Message has been sent')
        }, 2000);
    }
    return (
        <SafeAreaView style={styles.contact}>
            <ScrollView>

                <View style={tw`mt-4 mx-6`}>
                    <View style={tw`flex flex-row items-center gap-x-25`}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Icon color="#00ACEE" name='arrow-back' size={22} />
                        </TouchableOpacity>
                        <Text style={tw`text-2xl text-[#00ACEE]`}>Contact</Text>
                    </View>
                    <View style={tw`mt-10`}>
                        <Text style={tw`text-lg text-gray-500`}>Hello Daniel,</Text>
                        <Text style={tw`text-gray-500`}>Do you have any thoughts you would like to share?</Text>
                    </View>
                    <View style={tw`bg-white mt-4  border 
                border-[#00ACEE] border-opacity-5 rounded-md`}>
                        <TextInput
                            style={tw`p-2`}
                            multiline={true}
                            numberOfLines={8}
                            onFocus={handleFocus}
                            value={textarea}
                            ref={textInputRef}
                            textAlignVertical="top"
                            onChange={(e) => setTextArea(e.target.value)}


                        />
                    </View>
                    <View style={tw`flex flex-col items-center mt-6`}>
                        <Text style={tw`text-lg text-gray-500`}>Please remember to give us a rating</Text>
                        <Rating size={30} rating={rating} onChange={handleChange} style={tw`mt-2`} />
                        <Text style={tw`text-lg mt-3 text-gray-500`}>Rated {rating} out of 5</Text>
                    </View>

                    <TouchableOpacity onPress={handleSend} style={tw`mx-4 mt-8 flex
                 flex-row justify-center bg-[#00ACEE] 
                rounded-md p-1 `}>

                        <Text style={tw`text-white text-center text-lg`}>Send</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ContactScreen

const styles = StyleSheet.create({
    contact: {
        flex: 1,
        backgroundColor: '#f0f2f5',
    }
})