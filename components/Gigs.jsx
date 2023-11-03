import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import Icon2 from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'
import searchData from '../data/Search'

const Gigs = () => {
    const navigation = useNavigation();
    return (
        <View style={tw` mt-3 mb-65`}>

         
                <View>
                    {
                        searchData.map((data) => {
                            return (
                                <View style={tw`flex flex-row items-center
                                 bg-white py-3 border border-[#00ACEE] border-opacity-15 rounded-md mx-3 mt-2`} key={data.id}>
                                    <Image source={data.img} style={tw`w-14 h-14`} />
                                    <View style={tw`flex flex-col w-[10.8rem] `}>
                                        <Text style={tw`text-gray-500`}>{data.title}</Text>
                                        <Text style={tw`text-gray-500`}>Ghc{" "}{data.amt}/yr</Text>
                                        <Text style={tw`text-gray-500`}>{data.hours}</Text>
                                    </View>
                                    <View style={tw`flex flex-row items-center ml-4 gap-x-2`}>
                                        <TouchableOpacity onPress={() => navigation.navigate('More')}>
                                            <Text style={tw`px-2 py-1 bg-[#00ACEE] text-white rounded-md`}>{data.button}</Text>
                                        </TouchableOpacity>
                                        {/* <Icon2 name='bookmark' color="#00ACEE" size={22} /> */}
                                        <Image source={data.icon} style={tw`w-4.5 h-4.5`}/>
                                    </View>

                                </View>
                            )
                        })
                    }
                </View>
       
        </View>

    )
}

export default Gigs

const styles = StyleSheet.create({})