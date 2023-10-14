import { View, Text, TouchableOpacity, TextInput } from 'react-native'
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
    <SafeAreaView>
      <View style={tw`mt-8 px-3`}>
        <View style={tw`  flex  flex-row items-center`}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon color="#00ACEE" name='arrow-back' size={18} />
          </TouchableOpacity>

          <Text style={tw`text-[#00ACEE] text-xl pl-28`}>Messages</Text>

        </View>
        <View>
          <Text style={tw`text-gray-500 mt-2 text-xl`} >Chats</Text>
          <View style={tw`flex flex-row items-center rounded-md mt-2 justify-between gap-x-2 bg-white p-2`}>
            <View style={tw`flex flex-row items-center gap-x-3`}>
              <Icon2 name='search' size={26} />
              <TextInput
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder='Search Messages'
                autoCapitalize='none'
                autoCorrect={false}
              />
            </View>
            <Icon2 color="#00ACEE" name='filter' />
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default CommentScreen