import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import tw from 'twrnc'

const Category = () => {
    const [active, setActive] = useState(false);

    const handleActive = () => {
        setActive(!active)
    }
    return (
        <View>
            <View style={tw`flex flex-row items-center justify-evenly mt-5 border-b border-gray-500`}>
                <TouchableOpacity onPress={handleActive}>
                    <Text style={tw`${active} ? bg-[#00ACEE] text-white p-1 rounded-t-sm : 'null' `}>Gig Info</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={tw`${active} ?`}>Payment</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={tw`${active}`}>Reviews</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default Category

const styles = StyleSheet.create({})