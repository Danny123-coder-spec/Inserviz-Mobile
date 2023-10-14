import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const OngoingGigs = () => {
    return (
        <View style={tw`mt-4`}>
            <Text style={tw`text-lg`}>Ongoing <Text style={tw`text-[#00ACEE]`}>Gigs</Text></Text>
            <View style={tw`flex flex-row items-center bg-white border border-opacity-7 border-[#00ACEE] rounded-md mt-2`}>
                <Image style={tw`rounded-full h-`} source={require('../assets/ongoing.png')} />
                <View style={tw`gap-y-2`}>
                    <Text>Re-Design the website</Text>
                    <Text>Tolphin inc</Text>
                </View>
                <Text style={tw`text-red-500 mt-7`}>Deadline: 3/12/23</Text>
            </View>
            <View style={tw`flex flex-row items-center bg-white border border-opacity-7 border-[#00ACEE] rounded-md mt-2`}>
                <Image style={tw`rounded-full h-`} source={require('../assets/ongoing.png')} />
                <View style={tw`gap-y-2`}>
                    <Text>Re-Design the website</Text>
                    <Text>Tolphin inc</Text>
                </View>
                <Text style={tw`text-red-500 mt-7`}>Deadline: 3/12/23</Text>
            </View>
            
            
           
           
        </View>
    )
}

export default OngoingGigs