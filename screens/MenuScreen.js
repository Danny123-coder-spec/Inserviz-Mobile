import { View, Text, Image, StyleSheet, Modal, TextInput, ScrollView, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon2 from 'react-native-vector-icons/Feather'
import Icon8 from 'react-native-vector-icons/MaterialIcons'
import Gigs from '../components/Gigs'


const windowHeight = Dimensions.get('window').height;
const MenuScreen = () => {
  const [search, setSearch] = useState('');
  const [isFilter, setIsFilter] = useState(false);

  const handleFilter = () => {
    setIsFilter(!isFilter);
  }

  const handleClose = () => {
    setIsFilter(false);
  }
  return (
    <SafeAreaView style={styles.menu}>
      <View style={tw`pt-6 `}>
        <View style={tw`flex flex-row items-center px-2`}>
          <Image source={require('../assets/logo.png')} style={styles.logo} />
          <View style={tw`flex flex-row items-center bg-white p-2 border 
          border-[#00ACEE] border-opacity-10 rounded-md w-[86%]`}>
            <TextInput
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Search for your next gig'
              autoCapitalize='none'
              autoCorrect={false}
              style={tw`w-[15rem]`}
            />
            <View style={styles.line}></View>
            <View style={tw`flex flex-row items-center gap-4 ml-1`}>
              <Icon2 name='search' size={23} color='#00ACEE' />
              <TouchableOpacity onPress={() => handleFilter()}>
                <Icon2 color="#00ACEE" size={20} name='filter' />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          // We use the state here to toggle visibility of Bottom Sheet 
          visible={isFilter}
          // We pass our function as default function to close the Modal
          onRequestClose={() => handleClose()}>

          <View style={[styles.bottomSheet, { height: windowHeight * 0.6 }]}>

            <View style={{ flex: 0, width: '100%', justifyContent: 'space-between', flexDirection: 'row' }}>
              
              <TouchableOpacity onPress={handleClose}>
                <Icon8 name='close' size={18} color="gray" />
              </TouchableOpacity>
            </View>

          </View>
        </Modal>



        <View style={tw`pt-4`}>
          <Text style={tw`ml-4 text-[#00ACEE] text-xl`}>Suggested Gigs</Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Gigs />
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
  logo: {
    height: 50,
    width: 50,
    resizeMode: 'contain'
  },
  line: {
    height: 20,
    backgroundColor: 'gray',
    width: 1,
    opacity: 0.3,
    marginLeft: 1,
  },
  bottomSheet: {
    position: 'absolute',
    left: 0,
    right: 0,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingVertical: 23,
    paddingHorizontal: 25,
    bottom: 0,
    borderWidth: 1,
    borderColor: '#00ACEE'
  },
})

export default MenuScreen