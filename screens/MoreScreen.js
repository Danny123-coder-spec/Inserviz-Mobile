import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native'
import Icon2 from 'react-native-vector-icons/Feather'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Category from '../components/Category'

const MoreScreen = () => {
    const data = [
        {
            id: 1,
            num: '1',
            desc: "Proficiency in Design Software: Mastery of industry-standard design software such as Adobe Creative Suite (Photoshop, Illustrator, InDesign, etc.) and other relevant graphic design tools.",
        },
        {
            id: 2,
            num: '2',
            desc: "Creativity: The ability to generate original and innovative design concepts that align with the brand's identity and messaging.",
        },
        {
            id: 3,
            num: '3',
            desc: "Attention to Detail: A keen eye for detail to ensure accuracy and consistency in design elements, such as fonts, colors, and spacing.",
        },
        {
            id: 4,
            num: '4',
            desc:"Organizational Skills: The ability to maintain a well-organized workspace and project materials is essential. This includes file management, project documentation, and the ability to keep track of multiple tasks or elements simultaneously.",
        },
       
        {
            id: 5,
            num: '5',
            desc: "Problem-Solving: Attention to detail often goes hand-in-hand with the ability to identify and solve problems efficiently. Individuals with strong attention to detail are often good at spotting issues or inconsistencies and finding effective solutions.",
        },
       
       
       

    ]

    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <View style={tw`mt-6 p-2`}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon color="#00ACEE" name='arrow-back' size={18} />
                </TouchableOpacity>
                <View style={tw`flex flex-col items-center`}>
                    <Image source={require('../assets/ongoing.png')} style={tw`w-28`} />
                    <View style={tw`flex flex-col items-center `}>
                        <View style={tw`flex flex-row items-center gap-4 `}>
                            <Text style={tw`text-xl text-[#00ACEE]`}>Graphic Designer</Text>
                            <Icon2 name='bookmark' color="#00ACEE" size={20} />
                        </View>
                        <Text style={tw`text-gray-500`}>Ghc 45,000 - Ghc75,000</Text>
                        <Text style={tw`text-gray-500`}>In-person</Text>
                    </View>

                </View>
                <Category />
                <View style={tw`gap-y-2 mt-3`}>
                    <Text style={tw`text-[#00ACEE] text-lg`}>Description:</Text>
                    <Text style={tw`text-gray-500`}>
                        Calling all creatives! As a Graphic Designer, you'll craft visually stunning designs for our brand, ranging from digital assets to print materials. If you have a flair for design and attention to detail, this role awaits you.
                    </Text>
                    <Text style={tw`text-[#00ACEE] text-lg`}>Requirement:</Text>
                    <FlatList
                        data={data}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <View style={tw`flex flex-row gap-x-2 pt-1`}>
                                {/* <View style={styles.dot}></View> */}
                                <Text style={tw`text-gray-500`}>{item.num}.</Text>
                                <Text style={tw`text-gray-500 w-[22rem]`}>{item.desc}</Text>
                            </View>
                        )}

                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default MoreScreen

const styles = StyleSheet.create({
    dot: {
        borderRadius: 50,
        height: 4,
        width: 4,
        backgroundColor: '#00ACEE',
        mmarginTop: 10,
    }
})