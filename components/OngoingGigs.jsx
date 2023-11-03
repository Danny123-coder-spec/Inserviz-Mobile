import { View, Text, Image, ScrollView, FlatList } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import ongoingData from '../data/Ongoing'

const OngoingGigs = () => {

    return (
        <View style={tw`mt-4 mb-15`}>
            <Text style={tw`text-lg`}>Ongoing <Text style={tw`text-[#00ACEE]`}>Gigs</Text></Text>

            <View>
                {
                    ongoingData.map((data, i) => {
                        return (
                            <View style={tw`flex flex-row items-center bg-white border border-opacity-7 border-[#00ACEE] rounded-md mt-2`}>
                                <Image style={tw`rounded-full h-`} source={data.img} />
                                <View style={tw`gap-y-1.5`}>
                                    <Text>{data.title}</Text>
                                    <Text>{data.comp}</Text>
                                </View>
                                <Text style={tw`text-red-500 pt-3 pl-5 w-25`}>{data.deadline}</Text>
                            </View>
                        )
                    })
                }

            </View>




        </View>
    )
}

export default OngoingGigs