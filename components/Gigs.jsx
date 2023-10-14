import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import Icon2 from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'

const Gigs = () => {
    const navigation = useNavigation();
    return (
        <View style={tw`mt-6`}>
            <Text style={tw`ml-4 text-[#00ACEE] text-xl`}>Suggested Gigs</Text>
            <View style={tw`flex flex-row items-center bg-white py-3 border border-[#00ACEE] border-opacity-10 rounded-md mx-3 mt-2`}>
                <Image source={require('../assets/ongoing.png')} style={tw`w-14 h-14`} />
                <View style={tw`flex flex-col w-[10.8rem] `}>
                    <Text style={tw`text-gray-500`}>Software Developer</Text>
                    <Text style={tw`text-gray-500`}>Ghc80,000 - Ghc120,000/yr</Text>
                    <Text style={tw`text-gray-500`}>Full-Time</Text>
                </View>
                <View style={tw`flex flex-row items-center ml-4 gap-x-2`}>
                    <TouchableOpacity onPress={() => navigation.navigate('More')}>
                        <Text style={tw`px-3 py-1 bg-[#00ACEE] text-white rounded-md`}>See More</Text>
                    </TouchableOpacity>
                    <Icon2 name='bookmark' color="#00ACEE" size={25} />
                </View>

            </View>
            <View style={tw`flex flex-row items-center bg-white border border-[#00ACEE] border-opacity-10 py-3 rounded-md mx-3 mt-2`}>
                <Image source={require('../assets/ongoing.png')} style={tw`w-14 h-14`}/>
                <View style={tw`flex flex-col w-[10.8rem]`}>
                    <Text style={tw`text-gray-500`}>Software Developer</Text>
                    <Text style={tw`text-gray-500`}>Ghc80,000 - Ghc120,000/yr</Text>
                    <Text style={tw`text-gray-500`}>Full-Time</Text>
                </View>
                <View style={tw`flex flex-row items-center ml-4 gap-x-2`}>
                    <TouchableOpacity onPress={() => navigation.navigate('More')}>
                        <Text style={tw`px-3 py-1 bg-[#00ACEE] text-white rounded-md`}>See More</Text>
                    </TouchableOpacity>
                    <Icon2 name='bookmark' color="#00ACEE" size={25} />
                </View>

            </View>
            <View style={tw`flex flex-row items-center py-3 bg-white border border-[#00ACEE] border-opacity-10 rounded-md mx-3 mt-2`}>
                <Image source={require('../assets/ongoing.png')} style={tw`w-14 h-14`}/>
                <View style={tw`flex flex-col w-[10.8rem]`}>
                    <Text style={tw`text-gray-500`}>Electrician</Text>
                    <Text style={tw`text-gray-500`}>Ghc20,000 - Ghc50,000/yr</Text>
                    <Text style={tw`text-gray-500`}>Full-Time</Text>
                </View>
                <View style={tw`flex flex-row items-center ml-4 gap-x-2`}>
                    <TouchableOpacity onPress={() => {}}>
                        <Text style={tw`px-3 py-1 bg-[#00ACEE] text-white rounded-md`}>See More</Text>
                    </TouchableOpacity>
                    <Icon2 name='bookmark' color="#00ACEE" size={25} />
                </View>

            </View>
            <View style={tw`flex flex-row items-center py-3 bg-white border border-[#00ACEE] border-opacity-10 mx-3 rounded-md mt-2`}>
                <Image source={require('../assets/ongoing.png')} style={tw`w-14 h-14`} />
                <View style={tw`flex flex-col w-[10.8rem]`}>
                    <Text style={tw`text-gray-500`}>Content Writer</Text>
                    <Text style={tw`text-gray-500`}>Ghc30,000 - Ghc60,000/yr</Text>
                    <Text style={tw`text-gray-500`}>Full-Time</Text>
                </View>
                <View style={tw`flex flex-row items-center ml-4 gap-x-2`}>
                    <TouchableOpacity onPress={() => {}}>
                        <Text style={tw`px-3 py-1 bg-[#00ACEE] text-white rounded-md`}>See More</Text>
                    </TouchableOpacity>
                    <Icon2 name='bookmark' color="#00ACEE" size={25} />
                </View>

            </View>
            <View style={tw`flex flex-row items-center py-3 bg-white border border-[#00ACEE] border-opacity-10 mx-3 mt-2`}>
                <Image source={require('../assets/ongoing.png')} style={tw`w-14 h-14`}/>
                <View style={tw`flex flex-col w-[10.8rem]`}>
                    <Text style={tw`text-gray-500`}>Software Engineer</Text>
                    <Text style={tw`text-gray-500`}>Ghc90,000 - Ghc120,000/yr</Text>
                    <Text style={tw`text-gray-500`}>Full-Time</Text>
                </View>
                <View style={tw`flex flex-row items-center ml-4 gap-x-2`}>
                    <TouchableOpacity onPress={() => {}}>
                        <Text style={tw`px-3 py-1 bg-[#00ACEE] text-white rounded-md`}>See More</Text>
                    </TouchableOpacity>
                    <Icon2 name='bookmark' color="#00ACEE" size={25} />
                </View>

            </View>
            <View style={tw`flex flex-row items-center py-3 bg-white border border-[#00ACEE] border-opacity-10 mx-3 rounded-md mt-2`}>
                <Image source={require('../assets/ongoing.png')} style={tw`w-14 h-14`}/>
                <View style={tw`flex flex-col w-[10.8rem]`}>
                    <Text style={tw`text-gray-500`}>Software Developer</Text>
                    <Text style={tw`text-gray-500`}>Ghc80,000 - Ghc120,000/yr</Text>
                    <Text style={tw`text-gray-500`}>Full-Time</Text>
                </View>
                <View style={tw`flex flex-row items-center ml-4 gap-x-2`}>
                    <TouchableOpacity onPress={() => {}}>
                        <Text style={tw`px-3 py-1 bg-[#00ACEE] text-white rounded-md`}>See More</Text>
                    </TouchableOpacity>
                    <Icon2 name='bookmark' color="#00ACEE" size={25} />
                </View>

            </View>
            <View style={tw`flex flex-row items-center py-3 bg-white border border-[#00ACEE] border-opacity-10 mx-3 rounded-md mt-2`}>
                <Image source={require('../assets/ongoing.png')} style={tw`w-14 h-14`}/>
                <View style={tw`flex flex-col w-[10.8rem]`}>
                    <Text style={tw`text-gray-500`}>Software Developer</Text>
                    <Text style={tw`text-gray-500`}>Ghc80,000 - Ghc120,000/yr</Text>
                    <Text style={tw`text-gray-500`}>Full-Time</Text>
                </View>
                <View style={tw`flex flex-row items-center ml-4 gap-x-2`}>
                    <TouchableOpacity onPress={() => {}}>
                        <Text style={tw`px-3 py-1 bg-[#00ACEE] text-white rounded-md`}>See More</Text>
                    </TouchableOpacity>
                    <Icon2 name='bookmark' color="#00ACEE" size={25} />
                </View>

            </View>
        </View>
    )
}

export default Gigs

const styles = StyleSheet.create({})