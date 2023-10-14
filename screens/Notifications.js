import { View, Text, Image , TouchableOpacity} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import Icon2 from 'react-native-vector-icons/AntDesign'
import Icon3 from 'react-native-vector-icons/Fontisto'
import Icon4 from 'react-native-vector-icons/Feather'
import Icon5 from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'

const Notifications = () => {

  const navigation = useNavigation();
  return (
    <SafeAreaView style={tw` h-full`} >
      <View style={tw`mt-8 px-3 flex  flex-row items-center justify-between`}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon color="#00ACEE" name='arrow-back' size={18} />
        </TouchableOpacity>
        <Text style={tw`text-[#00ACEE] text-xl `}>Notifications</Text>
        <Icon2 color="#00ACEE" name='filter' />
      </View>
      <View style={tw`pt-10 gap-y-4`}>
        <View style={tw`flex flex-row items-center bg-white p-3 rounded-md justify-center mx-3 border border-[#00ACEE] border-opacity-5 `}>
          <Icon5 name='message-text-outline' size={36} />
          <Text style={tw`text-[#00ACEE] pl-2 w-[20rem]`}>New Job Matche: Discover job opportunities tailored to your preferences</Text>
        </View>
        <View style={tw`flex flex-row items-center mx-3 p-3 rounded-md justify-center bg-white border border-[#00ACEE] border-opacity-5`}>
          <Icon4 name='alert-triangle' size={36} color='red' />
          <Text style={tw`text-[#00ACEE] pl-2 w-[20rem]`}>Application Deadline approaching:Apply now to secure your spot</Text>
        </View>
        <View style={tw`flex flex-row items-center justify-center bg-white p-3 mx-3 rounded-md border border-[#00ACEE] border-opacity-5 `}>
          <Icon3 name="email" color="orange" size={36} />
          <Text style={tw`text-[#00ACEE] pl-2 w-[20rem]`}>You have a new email</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Notifications