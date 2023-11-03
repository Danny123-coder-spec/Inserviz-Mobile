import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import Icon2 from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import savedData from '../data/SavedScreen'

const StackScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.saved}>
      <View style={tw`mt-6`}>
        <View style={tw`flex flex-row items-center mx-1 pl-1`}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon color="#00ACEE" name='arrow-back' size={22} />
          </TouchableOpacity>
          <Text style={tw`ml-4 text-[#00ACEE] text-xl ml-30`}>Saved Gigs</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={tw`pt-3 pb-25`}>
            {
              savedData.map((save) => {
                return (
                  <View style={tw`flex flex-row items-center mx-3 
                py-2 border border-[#00ACEE] border-opacity-15 rounded-md bg-white mt-2`}>
                    <Image source={save.img} style={tw`w-14 h-14`} />
                    <View style={tw`flex flex-col w-[10.8rem] `}>
                      <Text style={tw`text-gray-500`}>{save.title}</Text>
                      <Text style={tw`text-gray-500`}>Ghc{save.amt}/yr</Text>
                      <Text style={tw`text-gray-500`}>{save.hours}</Text>
                    </View>
                    <View style={tw`flex flex-row items-center ml-4 gap-x-2`}>
                      <TouchableOpacity onPress={() => navigation.navigate('More')}>
                        <Text style={tw`px-2 py-1 bg-[#00ACEE] text-white rounded-md`}>{save.button}</Text>
                      </TouchableOpacity>
                   
                      <Image source={save.icon} style={tw`w-4.5 h-4.5`} />
                    </View>

                  </View>
                )
              })
            }
          </View>
        </ScrollView>

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  saved: {
    flex: 1,
    backgroundColor: "#f0f2f5",
  }
})

export default StackScreen

