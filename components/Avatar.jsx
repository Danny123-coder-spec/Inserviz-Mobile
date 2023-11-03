import { StyleSheet, Text, View , TouchableOpacity, Image} from 'react-native'
import React from 'react'
import tw from 'twrnc'
import Icon3 from 'react-native-vector-icons/Entypo'
import profile from '../assets/profile.jpg'

const Avatar = ({uri, onButtonPress}) => {
    return (
        <View>
            <View style={tw`flex flex-col items-center justify-center`}>
                <TouchableOpacity style={tw` mt-10`} onPress={onButtonPress}>
                   
                    <Image
                        style={tw`h-26 w-26 rounded-full 
                        border-2 border-[#00ACEE] border-opacity-70`}
                        source={uri ? {uri} : profile}/>
                  
                    <View style={tw`absolute bottom-[0] top-[18] right-1
                     bg-[#fff] border border-[#00ACEE] border-opacity-10 rounded-full p-1 z-10`}>
                        <Icon3 name='camera' size={22} color="#00ACEE" />
                    </View>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default Avatar

const styles = StyleSheet.create({})