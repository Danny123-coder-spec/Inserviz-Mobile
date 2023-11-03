import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Checkbox from 'expo-checkbox';
import { useNavigation } from '@react-navigation/native'

const InprovScreen = () => {
    const categories = [
        { id: 0, name: 'Artisans' },
        { id: 1, name: 'Beauty Services' },
        { id: 2, name: 'Digital Services' },
        { id: 3, name: 'Domestic Services' },
        { id: 4, name: 'Marketing And Sales' },
        { id: 5, name: 'Medical And Nurse' },
        { id: 6, name: 'Technology' },
    ]
    const [isChecked, setChecked] = useState(false);
    const [domestic, setIsDomestic] = useState(false);
    const [isBeauty, setIsBeauty] = useState(false);
    const [isDigital, setIsDigital] = useState(false);
    const [isEnt, setEnt] = useState(false);
    const [checked, setIsChecked] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [isOk, setOk] = useState(false);
    const navigation = useNavigation();
    const [nextArt, setNextArt] = useState('');


    const handleCategory = (category) => {
        if (nextArt !== '') {
            setNextArt('');// Clearing the error message when the user checks the box
        }

        switch(category) {
            case 'artisan':
                setChecked(!isChecked)
                break;
            case 'beauty':
                setIsBeauty(!isBeauty)
                break;
            case 'digital':
                setIsDigital(!isDigital)
                break;
            case 'isDomestic':
                setIsDomestic(!domestic)
                break;
            case 'marketing':
                setOk(!isOk)
                break;
            case 'medical':
                setEnt(!isEnt)
                break;
            case 'technology':
                setIsChecked(!checked)
                break;

            default:
                break;
        }
    }


    const handleNext = () => {
        if (!isBeauty && !isChecked && !isDigital && !domestic && !isOk && !isEnt && !checked) {
            setNextArt('Please select at least one category');
        } else {
            navigation.navigate('SignUp');
        };
    }

    return (
        <SafeAreaView style={tw`flex-1 bg-[#f0f2f5]`}>
            <View style={tw`mt-5 mx-5 mb-20`}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon color="#00ACEE" name='arrow-back' size={22} />
                </TouchableOpacity>
                <View style={tw`mt-4`}>
                    <Text style={tw`text-2xl text-center text-gray-500 font-500`}>Become an Inprov</Text>
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-xl text-gray-500 font-500`}>Categories:</Text>

                        <View style={tw`flex flex-row items-center gap-x-2 mt-4`}>
                            <Checkbox
                                style={styles.checkbox}
                                value={isChecked}
                                onValueChange={() => handleCategory('artisan')}
                                color={isChecked && '#00ACEE'}
                            />
                            {
                                !isChecked ? (
                                    <Text style={tw`text-lg text-gray-500`}>Artisans</Text>
                                ) : (
                                    <Text style={tw`text-lg text-gray-500 font-500`}>Artisans</Text>
                                )
                            }
                        </View>
                        <View style={tw`flex flex-row items-center gap-x-2 mt-4`}>
                            <Checkbox
                                style={styles.isBeauty}
                                value={isBeauty}
                                onValueChange={() => handleCategory('beauty')}
                                color={isBeauty && '#00ACEE'}
                            />
                            {
                                !isBeauty ? (
                                    <Text style={tw`text-lg text-gray-500`}>Beauty Services</Text>
                                ) : (
                                    <Text style={tw`text-lg text-gray-500 font-500`}>Beauty Services</Text>
                                )
                            }
                        </View>
                        <View style={tw`flex flex-row items-center gap-x-2 mt-4`}>
                            <Checkbox
                                style={styles.checkbox}
                                value={isDigital}
                                onValueChange={() => handleCategory('digital')}
                                color={isDigital && '#00ACEE'}
                            />
                            {
                                !isDigital ? (
                                    <Text style={tw`text-lg text-gray-500`}>Digital Services</Text>
                                ) : (
                                    <Text style={tw`text-lg text-gray-500 font-500`}>Digital Services</Text>
                                )
                            }
                        </View>
                        <View style={tw`flex flex-row items-center gap-x-2 mt-4`}>
                            <Checkbox
                                style={styles.checkbox}
                                value={domestic}
                                onValueChange={() => handleCategory('isDomestic')}
                                color={domestic && '#00ACEE'}
                            />
                            {
                                !domestic ? (
                                    <Text style={tw`text-lg text-gray-500`}>Domestic Services</Text>
                                ) : (
                                    <Text style={tw`text-lg text-gray-500 font-500`}>Domestic Services</Text>
                                )
                            }
                        </View>
                        <View style={tw`flex flex-row items-center gap-x-2 mt-4`}>
                            <Checkbox
                                style={styles.checkbox}
                                value={isOk}
                                onValueChange={() => handleCategory('marketing')}
                                color={isOk && '#00ACEE'}
                            />
                            {
                                !isOk ? (
                                    <Text style={tw`text-lg text-gray-500`}>Marketing And Sales</Text>
                                ) : (
                                    <Text style={tw`text-lg text-gray-500 font-500`}>Marketing And Sales</Text>
                                )
                            }
                        </View>
                        <View style={tw`flex flex-row items-center gap-x-2 mt-4`}>
                            <Checkbox
                                style={styles.checkbox}
                                value={isEnt}
                                onValueChange={() => handleCategory('medical')}
                                color={isEnt && '#00ACEE'}
                            />
                            {
                                !isEnt ? (
                                    <Text style={tw`text-lg text-gray-500`}>Medical And Nurse</Text>
                                ) : (
                                    <Text style={tw`text-lg text-gray-500 font-500`}>Medical And Nurse</Text>
                                )
                            }
                        </View>
                        <View style={tw`flex flex-row items-center gap-x-2 mt-4`}>
                            <Checkbox
                                style={styles.checkbox}
                                value={checked}
                                onValueChange={() => handleCategory('technology')}
                                color={checked && '#00ACEE'}
                            />
                            {
                                !checked ? (
                                    <Text style={tw`text-lg text-gray-500`}>Technology</Text>
                                ) : (
                                    <Text style={tw`text-lg text-gray-500 font-500`}>Technology</Text>
                                )
                            }
                        </View>
                        <View style={tw`pt-6`}>
                            {nextArt ? <Text style={tw`text-red-500`}>{nextArt}</Text> : ''}
                        </View>


                    </View>
                </View>
                <View style={tw`flex items-end my-50`}>
                    <TouchableOpacity
                        onPress={handleNext}
                        style={tw`bg-[#00ACEE] w-20 rounded-md p-1`}>
                        <Text style={tw`text-white text-center font-500`}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default InprovScreen

const styles = StyleSheet.create({})












