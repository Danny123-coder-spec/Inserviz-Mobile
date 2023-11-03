
import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native';

const Earnings = () => {
    const navigation = useNavigation();
    return (
        <View style={tw`mt-4`}>
            <ImageBackground source={require('../assets/bg.png')} resizeMode="cover" style={styles.image}>
                <View style={tw`px-4 pt-6 gap-y-2`}>
                    <Text style={tw`text-white text-lg`}>Earnings</Text>
                    <Text style={tw`text-white text-2xl`}>Ghc 5750.20</Text>
                    <View style={tw`flex flex-row items-center justify-between`}>
                        <Image source={require('../assets/earn.png')} />
                        <TouchableOpacity onPress={() => navigation.navigate('Earnings')}>
                            <Text style={tw`text-white font-bold `}>View Details</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
};

const styles = StyleSheet.create({

    image: {
        width: '100%',
        borderRadius: '14px',
        height: 170,


    },

});

export default Earnings;