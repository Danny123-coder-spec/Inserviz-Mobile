import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import User from '../components/User'

const ProfileScreen = () => {
  return (
    <SafeAreaView style={[tw``, styles.profile]}>
     <User/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  profile:{
    flex:1,
    backgroundColor:"#f0f2f5",
  }
})

export default ProfileScreen