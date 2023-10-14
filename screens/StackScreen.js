import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import Icon2 from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const StackScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={tw`mt-6`}>
        <View style={tw`flex flex-row items-center mx-1 pl-1`}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon color="#00ACEE" name='arrow-back' size={18} />
          </TouchableOpacity>
          <Text style={tw`ml-4 text-[#00ACEE] text-xl ml-30`}>Saved Gigs</Text>
        </View>
        <View style={tw`flex flex-row items-center mx-3 py-2 rounded-md bg-white mt-2`}>
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
        <View style={tw`flex flex-row items-center mx-3 py-2 rounded-md bg-white mt-2`}>
          <Image source={require('../assets/ongoing.png')} style={tw`w-14 h-14`} />
          <View style={tw`flex flex-col w-[10.8rem]`}>
            <Text style={tw`text-gray-500`}>Software Developer</Text>
            <Text style={tw`text-gray-500`}>Ghc80,000 - Ghc120,000/yr</Text>
            <Text style={tw`text-gray-500`}>Full-Time</Text>
          </View>
          <View style={tw`flex flex-row items-center ml-4 gap-x-2`}>
            <TouchableOpacity onPress={() => { }}>
              <Text style={tw`px-3 py-1 bg-[#00ACEE] text-white rounded-md`}>See More</Text>
            </TouchableOpacity>
            <Icon2 name='bookmark' color="#00ACEE" size={25} />
          </View>

        </View>
        <View style={tw`flex flex-row items-center mx-3 py-2 rounded-md bg-white mt-2`}>
          <Image source={require('../assets/ongoing.png')} style={tw`w-14 h-14`} />
          <View style={tw`flex flex-col w-[10.8rem]`}>
            <Text style={tw`text-gray-500`}>Electrician</Text>
            <Text style={tw`text-gray-500`}>Ghc20,000 - Ghc50,000/yr</Text>
            <Text style={tw`text-gray-500`}>Full-Time</Text>
          </View>
          <View style={tw`flex flex-row items-center ml-4 gap-x-2`}>
            <TouchableOpacity onPress={() => { }}>
              <Text style={tw`px-3 py-1 bg-[#00ACEE] text-white rounded-md`}>See More</Text>
            </TouchableOpacity>
            <Icon2 name='bookmark' color="#00ACEE" size={25} />
          </View>

        </View>
        <View style={tw`flex flex-row items-center mx-3 py-2 rounded-md bg-white mt-2`}>
          <Image source={require('../assets/ongoing.png')} style={tw`w-14 h-14`} />
          <View style={tw`flex flex-col w-[10.8rem]`}>
            <Text style={tw`text-gray-500`}>Content Writer</Text>
            <Text style={tw`text-gray-500`}>Ghc30,000 - Ghc60,000/yr</Text>
            <Text style={tw`text-gray-500`}>Full-Time</Text>
          </View>
          <View style={tw`flex flex-row items-center ml-4 gap-x-2`}>
            <TouchableOpacity onPress={() => { }}>
              <Text style={tw`px-3 py-1 bg-[#00ACEE] text-white rounded-md`}>See More</Text>
            </TouchableOpacity>
            <Icon2 name='bookmark' color="#00ACEE" size={25} />
          </View>

        </View>
      </View>
    </SafeAreaView>
  )
}

export default StackScreen

