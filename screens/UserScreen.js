import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icon2 from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'

const UserScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.user}>
      <View style={tw`pt-6 px-4`}>
        <View style={tw`flex flex-row items-center justify-between mx-2`}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon color="#00ACEE" name='arrow-back' size={22} />
          </TouchableOpacity>
          <Text style={tw`text-2xl text-[#00ACEE]`}>Profile</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Edit')}>
            <Icon2 name="mode-edit" size={26} color="#00ACEE" />
          </TouchableOpacity>
        </View>
        <View style={tw`flex items-center justify-center mt-10`}>
          <Image style={tw`h-24 w-24 rounded-full`} source={require('../assets/profile.jpg')} />
        </View>
        <View style={tw`mx-2`}>
          <View style={tw` bg-white rounded-md mt-4 p-3 border border-[#00ACEE] border-opacity-5`}>
            <View style={tw`border-b border-gray-500 border-opacity-10 pb-2`}>
              <Text style={tw`text-gray-500 text-[4.2] py-2`}>Name:</Text>
              <Text>Daniel Boadu</Text>
            </View>
            <View style={tw`border-b border-gray-500 border-opacity-10 pb-2`}>
              <Text style={tw`text-gray-500 text-[4.2] py-2`}>Email:</Text>
              <Text>danielboadu594@gmail.com</Text>
            </View>
            <View style={tw`border-b border-gray-500 border-opacity-10 pb-2`}>
              <Text style={tw`text-gray-500 text-[4.2] py-2`}>Phone Number:</Text>
              <Text>+233 599678566</Text>
            </View>
            <View>
              <Text style={tw`text-gray-500 text-[4.2] py-2`}>Location:</Text>
              <Text>Greater Accra Region, Accra</Text>
            </View>
          </View>
          <View style={tw`mt-2 gap-y-2`}>
            <Text style={tw`text-gray-500 text-lg`}>Links:</Text>
            <TouchableOpacity style={tw`bg-gray-500
             items-center bg-opacity-60 rounded-md p-2`}>
              <Image source={require('../assets/facebook.png')} style={[tw`w-6 h-6 `, styles.image]} />
            </TouchableOpacity>
            <TouchableOpacity style={tw`bg-transparent
             items-center border border-[#00ACEE] bg-opacity-60 rounded-md p-2 `} onPress={() => { }}>
              <Image source={require('../assets/google.png')} style={tw`w-6 h-6`} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={tw`bg-[#00ACEE] mt-10 rounded-md p-1.5`} onPress={() => { }}>
            <Text style={tw`text-center text-white text-lg`}>Delete Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default UserScreen

const styles = StyleSheet.create({
  image: {
    resizeMode: "contain",

  },
  user:{
      flex:1,
      backgroundColor:"#f0f2f5", 
  }
})