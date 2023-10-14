import { View, Text, Image, StyleSheet, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon2 from 'react-native-vector-icons/Feather'
import Gigs from '../components/Gigs'

const MenuScreen = () => {
  const [search, setSearch] = useState('');
  return (
    <SafeAreaView>
      <ScrollView style={tw`mt-6`}>
        <View style={tw`flex flex-row items-center `}>
          <Image source={require('../assets/logo.png')} style={styles.logo} />
          <View style={tw`flex flex-row items-center bg-white p-2 border 
          border-[#00ACEE] border-opacity-5 rounded-md w-[86%]`}>
            <TextInput
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Search for your next gig'
              autoCapitalize='none'
              autoCorrect={false}
              style={tw`w-[15rem]`}
            />
            <View style={styles.line}></View>
            <View style={tw`flex flex-row items-center gap-6 ml-1`}>
              <Icon2 name='search' size={23} color='#00ACEE' />
              <Icon2 color="#00ACEE" size={20} name='filter' />
            </View>
          </View>
        </View>
        
        <Gigs/>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  logo: {
    height: 50,
    width: 50,
    resizeMode: 'contain'
  },
  line:{
    height:20,
    backgroundColor:'gray',
    width:1,
    opacity:0.3,
    marginLeft:1,
  }
})

export default MenuScreen