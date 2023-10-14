import { View, Text} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import User from '../components/User'

const ProfileScreen = () => {
  return (
    <SafeAreaView style={tw`m-3 mt-4`}>
     <User/>
    </SafeAreaView>
  )
}

export default ProfileScreen