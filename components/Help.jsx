import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import helpData from '../data/Help'
import Icon from 'react-native-vector-icons/EvilIcons'
import Icon2 from 'react-native-vector-icons/EvilIcons'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native'

const Help = () => {
    const navigation = useNavigation();
    const [toggle, setToggle] = useState(false);

    const handletoggle = (index) => {
        setToggle({
            ...toggle,
            [index]: !toggle[index]
        });
    }
    return (
        <ScrollView showsHorizontalScrollIndicator={false}>
            <View style={tw`mt-3 `}>
                {helpData.map((help, index) => {
                    return (
                        <View key={index} style={tw`gap-y-2 pb-2 border-b border-[#00ACEE] border-opacity-50`}>
                            <TouchableOpacity style={tw`flex flex-row items-center pt-2 justify-between
                              mt-8`} onPress={() => handletoggle(index)}>
                                <Text style={tw`text-[#00ACEE] `}>{help.question}</Text>
                                {
                                    toggle[index] ? (
                                        <Icon2 name='chevron-down' size={25} color="#00ACEE" />

                                    ) : (
                                        <Icon name='chevron-right' size={25} color="#00ACEE" />
                                    )
                                }
                            </TouchableOpacity>
                            {
                                toggle[index] &&
                                <Text style={tw`text-gray-500`}>{help.answer}</Text>

                            }
                        </View>
                    )
                })}

                <View style={tw`flex flex-row items-center gap-x-2 mt-10`}>
                    <Text>For further enquiry,</Text>
                    <TouchableOpacity onPress={() => {}}>
                        <Text style={tw`text-[#00acee]`}>ask AI chat bot</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    )
}

export default Help

const styles = StyleSheet.create({})