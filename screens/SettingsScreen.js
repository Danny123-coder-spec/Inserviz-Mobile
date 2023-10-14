import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/MaterialIcons'
import tw from 'twrnc'
import Settings from '../components/Settings'
import { useNavigation } from '@react-navigation/native'

const SettingsScreen = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <View style={tw`mt-3 mx-4`}>
                <View style={tw`flex flex-row items-center gap-x-30`}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon color="#00ACEE" name='arrow-back' size={18} />
                    </TouchableOpacity>
                    <Text style={tw`text-2xl text-[#00ACEE]`}>Settings</Text>

                </View>
                <View>
                    <Settings/>
                </View>

            </View>
        </SafeAreaView>
    )
}

export default SettingsScreen

const styles = StyleSheet.create({})