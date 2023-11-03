import { StyleSheet, Text, View, TouchableOpacity, Dimensions, StatusBar, Platform, Image, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const DivideScreen = () => {
    const screenWidth = Dimensions.get('window').width
    const navigation = useNavigation();
    return (
        <SafeAreaView style={tw`flex-1 bg-[#f0f2f5]`}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={tw`pt-5 px-5 pb-20`}>

                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon color="#00ACEE" name='arrow-back' size={22} />
                    </TouchableOpacity>
                    <View style={tw`mt-8`}>
                        <Text style={tw`text-3xl font-bold text-gray-500 text-center`}>Choose One:</Text>
                        <View style={tw`flex flex-row items-center  justify-center gap-x-10 mt-5 `}>
                            <View style={tw``}>
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    style={[tw`flex justify-center items-center w-32
                                  bg-white p-4 rounded-lg`, styles.shadow]} onPress={() => navigation.navigate('Inprov')}>
                                    <Entypo name="briefcase" size={screenWidth / 8} color="#00ACEE" />
                                    <Text style={tw`text-xl font-bold text-gray-500`}>Inprov</Text>
                                </TouchableOpacity>
                                <View style={tw`flex flex-col justify-center items-center mt-6`} >
                                    <AntDesign name="infocirlce" size={24} color="#00ACEE" />
                                    <Text style={tw`text-center text-lg text-gray-500 w-33 pt-2`}>An inprov is a client who hires talented inprovs on the Inserviz platform to complete various tasks or projects.</Text>
                                </View>


                            </View>
                            <View style={styles.line}></View>
                            <View>
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    style={[tw`flex justify-center items-center w-32 bg-white  p-4 rounded-lg`, styles.shadow]}>
                                    <MaterialCommunityIcons name="book-edit-outline" size={screenWidth / 8} color="#00ACEE" />
                                    <Text style={tw`text-xl font-bold text-gray-500`}>Intract</Text>
                                </TouchableOpacity>
                                <View style={tw`flex justify-center items-center mt-6`} >
                                    <AntDesign name="infocirlce" size={24} color="#00ACEE" />
                                    <Text style={tw`text-center text-lg text-gray-500 w-33 pt-2`}>An intract is a client who hires talented inprovs on the Inserviz platform to complete various tasks or projects.</Text>
                                </View>
                            </View>
                        </View>
                    </View>


                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default DivideScreen

const styles = StyleSheet.create({
    shadow: {
        elevation: 20,
        shadowColor: '#AEAEC0',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
    },
    line: {
        width: 1.,
        backgroundColor: 'gray',
        height: 400
    }
})