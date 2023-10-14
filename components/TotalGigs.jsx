import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import Icon from 'react-native-vector-icons/FontAwesome'

const TotalGigs = () => {
    return (
        <View style={tw`flex flex-row mt-6  `}>
            <View style={tw`flex flex-col w-50 items-center h-69 bg-white border border-opacity-5 border-[#00ACEE] rounded-md p-6 gap-y-3 `}>
                <Text style={tw`text-3xl text-[#00ACEE]`}>Total Gigs</Text>
                <Text style={tw`text-2xl text-gray-500`}>7</Text>
                <Image source={require('../assets/text.png')} />
                <TouchableOpacity>
                    <Text style={tw`bg-[#00ACEE] rounded-full px-2 py-1 text-white mt-3`}>See All</Text>
                </TouchableOpacity>
            </View>
            <View style={tw`ml-3 `}>
                <View style={tw`bg-white border border-opacity-5 border-[#00ACEE] p-6 h-45 rounded-md`}>
                    <View style={tw`border-b border-gray-500 pb-4`}>
                        <Text>Completed Gigs</Text>
                        <Text style={tw`pt-2`}>5</Text>
                    </View>
                    <View style={tw`pt-4`}>
                        <Text>On-time response</Text>
                        <View style={tw`flex flex-row items-center pt-2 gap-x-2`}>
                            <Image source={require('../assets/Chart.png')} />
                            <Text>80%</Text>
                        </View>
                    </View>
                </View>
                <View style={tw`bg-white border border-opacity-5 border-[#00ACEE] mt-3 p-6 h-21 rounded-md`}>
                    <View style={tw`flex flex-row items-center gap-x-2`}>
                        <Text style={tw`text-gray-500`}>4.0</Text>
                        <Icon name='star' color='orange' size={17} />
                    </View>
                    <Text style={tw`text-gray-500 `}>3 Reviews</Text>
                </View>
            </View>
        </View>
    )
}

export default TotalGigs