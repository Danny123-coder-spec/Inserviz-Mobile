import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'

const EarningScreen = ({ navigation }) => {
    const earningsData = [
        {
            id: 1,
            comp: 'Indiana Inc.',
            price: '300',
            date: 'Tue 2.06.2023'
        },
        {
            id: 2,
            comp: 'Alsa Inc.',
            price: '950',
            date: 'Mon 12.06.2023'
        },
        {
            id: 3,
            comp: 'Tech Inovators Inc.',
            price: '5100',
            date: 'Tue 2.06.2023'
        },
        {
            id: 4,
            comp: 'Designs Co.',
            price: '280',
            date: 'Mon 21.07.2023'
        },
        {
            id: 5,
            comp: 'Finance Tech Solutions',
            price: '900',
            date: 'Tue 3.03.2023'
        },

    ]
    return (
        <SafeAreaView style={styles.earn}>
            <View style={tw`mt-4 mx-6`}>
                <View style={tw`flex flex-row items-center gap-x-30`}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon color="#00ACEE" name='arrow-back' size={18} />
                    </TouchableOpacity>
                    <Text style={tw`text-lg text-[#00ACEE]`}>Earnings</Text>
                </View>
                <View>
                    {
                        earningsData.map((earning, i) => {
                            return (
                                <View style={tw`flex flex-row items-center 
                                justify-between border-b border-gray-500 border-opacity-15 pb-2`} key={earning.id}>
                                    <View style={tw`flex flex-col items-start mt-4 gap-y-1`}>
                                        <Text style={tw`text-gray-500 font-bold text-lg`}>{earning.comp}</Text>
                                        <Text style={tw`text-gray-500 text-xs`}>{earning.date}</Text>
                                    </View>
                                    <Text style={tw`text-gray-500`}>Ghc {earning.price}</Text>
                                </View>
                            )
                        })
                    }
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    earn: {
        flex: 1,
        backgroundColor: '#f0f2f5',
    }
})

export default EarningScreen

