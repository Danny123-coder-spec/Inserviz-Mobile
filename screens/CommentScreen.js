import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import tw from 'twrnc'
import Icon2 from 'react-native-vector-icons/Feather'

const CommentScreen = () => {
  const [search, setSearch] = useState('');
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.comment}>
      <ScrollView style={tw`pt-6 px-3 pb-6`}>
        <View style={tw`  flex  flex-row items-center`}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon color="#00ACEE" name='arrow-back' size={18} />
          </TouchableOpacity>

          <Text style={tw`text-[#00ACEE] text-2xl pl-26`}>Messages</Text>

        </View>
        <View>
          <Text style={tw`text-gray-500 mt-2 text-xl`} >Chats</Text>
          <View style={tw`flex flex-row items-center 
          rounded-md mt-2 justify-between border border-gray-500 border-opacity-10
            bg-white p-1.5`}>
            <View style={tw`flex flex-row items-center gap-x-3`}>
              <Icon2 name='search' size={22} color="#00ACEE" />
              <View style={tw`w-0.2 h-4 bg-gray-500`}></View>

              <TextInput
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder='Search Messages'
                autoCapitalize='none'
                autoCorrect={false}
                style={tw`w-69`}
              />

            </View>
            <TouchableOpacity onPress={() => navigation.navigate('')}>
              <Icon2 color="#00ACEE" name='filter' size={17} />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={tw`flex flex-row 
        items-center bg-white border border-gray-500 border-opacity-10 rounded-md px-1.8 py-1 mt-5`}
          onPress={() => navigation.navigate('AI')}>
          <Image source={require('../assets/chatbot.png')} style={tw`w-8 h-8`} />
          <View style={tw`flex flex-col pl-2`}>
            <View style={tw`flex flex-row items-center justify-between`}>
              <Text style={tw`text-[#00ACEE] font-bold`}>AI</Text>
              <Text style={tw`text-[#00ACEE] text-xs `}>13:00</Text>
            </View>
            <View style={tw`flex flex-row items-center gap-x-2 pt-1 `}>
              <Text style={tw`text-gray-500 `}>I will help you with all the assistance you need</Text>
              <Text style={tw`bg-[#00ACEE] text-white
               rounded-full w-4 text-center h-4 text-xs`}>1</Text>
            </View>
          </View>

        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  comment: {
    flex: 1,
    backgroundColor: "#f0f2f5",
  }
})

export default CommentScreen