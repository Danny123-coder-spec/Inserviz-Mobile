import { StyleSheet, Text, View, Image, TouchableOpacity, Modal, Pressable, Alert } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import Icon from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/Ionicons'
import Icon3 from 'react-native-vector-icons/Entypo'
import Icon4 from 'react-native-vector-icons/MaterialIcons'
import Icon8 from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import profile from '../assets/profile.jpg'

const User = ({ uri }) => {
    const [modalVisible, setModalVisible] = useState(false)
    const navigation = useNavigation();

    const handleClose = () => {
        setModalVisible(false);
    }
    return (
        <View style={tw`pt-4 m-3`}>
            <View style={tw`ml-4`}>
                <Image source={require('../assets/logo.png')} style={styles.logo} />
            </View>
            <View style={tw`flex flex-col`}>
                <Text style={tw`text-3xl text-center text-[#00ACEE] `}>Profile</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Profile")} style={tw`flex flex-row items-center 
                justify-center bg-white border w-[20rem] mx-6 border-[#00ACEE] border-opacity-10 p-3 mt-3 rounded-md`}>
                    <Image style={tw`h-12 w-12 rounded-full`} source={uri ? { uri } : profile} />
                    <View style={tw`ml-2`}>
                        <Text style={tw`text-gray-500`}>Daniel Boadu</Text>
                        <Text style={tw`text-gray-500`}>danielboadu594@gmail.com</Text>
                    </View>
                </TouchableOpacity>
                <View style={tw`flex flex-col items-center`}>
                    <View style={tw`flex flex-row mt-10 mx-4 gap-x-4`}>
                        <TouchableOpacity style={tw`flex flex-col items-center
                         bg-white w-[9.5rem] rounded-md p-6 border
                          border-[#00ACEE] border-opacity-10`} onPress={() => navigation.navigate('Skill')}>
                            <Icon name='document-text' size={60} color='#00ACEE' />
                            <Text>Transcript</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={tw`flex flex-col items-center
                         bg-white w-[9.5rem] rounded-md p-6 border border-[#00ACEE] border-opacity-10`} onPress={() => navigation.navigate('Settings')}>
                            <Icon2 name='settings' size={60} color='#00ACEE' />
                            <Text>Settings</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={tw`flex flex-row mx-6 mt-4 gap-x-4`}>
                        <TouchableOpacity style={tw`flex flex-col items-center
                         bg-white w-[9.5rem] rounded-md p-6 border border-[#00ACEE] border-opacity-10`} onPress={() => navigation.navigate('Help')}>
                            <Icon3 name='help' size={60} color='#00ACEE' />
                            <Text>Help</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={tw`flex flex-col items-center bg-white
                         w-[9.5rem] rounded-md p-6 border border-[#00ACEE] border-opacity-10`} onPress={() => navigation.navigate('')}>
                            <Image source={require('../assets/dark1.png')} style={tw`w-15 h-15`} />
                            <Text>Dark Mode</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity style={tw`bg-[#00ACEE] rounded-md flex items-center mt-10 py-1.5
                 justify-center mx-6`} onPress={() => setModalVisible(true)}>
                    <Text style={tw`text-white text-lg`}>Logout</Text>
                </TouchableOpacity>


                <View style={styles.centeredView}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            Alert.alert('Modal has been closed.');
                            setModalVisible(!modalVisible);

                        }} >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                            {/* <TouchableOpacity onPress={handleClose}
                                style={tw`left-27 `}>
                                <Icon8 name='close' size={18} color="gray" />
                            </TouchableOpacity> */}


                                <Text style={tw`pt-2`}>Are you sure you want to logout?</Text>
                                <View style={tw`flex flex-row gap-x-5 pt-4 items-center`}>
                                    <TouchableOpacity onPress={() => { }}
                                        style={tw`bg-[#00ACEE] rounded-lg px-5 py-0.7`}>
                                        <Text style={tw`text-white`}>Yes</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => setModalVisible(false)}
                                        style={tw`bg-gray-500 bg-opacity-90  rounded-lg px-2.8 py-0.7`}>
                                        <Text style={tw`text-white`}>Cancel</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Modal>

                </View>
            </View>
        </View>
    )
}

export default User

const styles = StyleSheet.create({
    logo: {
        height: 50,
        width: 50,
        resizeMode: 'contain'
    },

    prof:{
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius:2,
        elevation: 5,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 25,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },

    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        // backgroundColor: '#2196F3',
    },
    textStyle: {
        color: '#00ACEE',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
})