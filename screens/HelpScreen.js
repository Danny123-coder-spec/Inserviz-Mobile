import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/MaterialIcons'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native'
import helpData from '../data/Help'
import Help from '../components/Help'


const HelpScreen = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.help}>
            <View style={tw`pt-4 px-4`}>
                <View style={tw`flex flex-row items-center gap-x-30`}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon color="#00ACEE" name='arrow-back' size={22} />
                    </TouchableOpacity>
                    <Text style={tw`text-2xl text-[#00ACEE]`}>Help</Text>

                </View>
                <View>
                    <Help />
                </View>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    help:{
        flex:1,
        backgroundColor:'#f2f0f5'
    }
})

export default HelpScreen;