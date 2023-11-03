import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, Modal, Pressable, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icon8 from 'react-native-vector-icons/AntDesign'
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/MaterialIcons'
import Icon7 from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

import * as ImagePicker from 'expo-image-picker'
// import * as ImagePicker from 'react-native-image-crop-picker';
import imageData from '../data/Image'
import Icon4 from 'react-native-vector-icons/Feather'
import Icon5 from 'react-native-vector-icons/Fontisto'
import Icon6 from 'react-native-vector-icons/AntDesign'

import Avatar from '../components/Avatar'



const data = [
    { label: 'Greater Accra Region, Accra', value: '1' },
    { label: 'Ashanti Region, Kumasi', value: '2' },
    { label: 'Brong Ahafo, Suyani', value: '3' },
    { label: 'Central Region, CapeCoast', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
];


const EditScreen = () => {

    const navigation = useNavigation();
    const [image, setImage] = useState();
    const [imageUrl, setImageUrl] = useState('../assets/profile.jpg')
    const [modalVisible, setModalVisible] = useState(false);
    const [nameText, setNameText] = useState('Daniel Boadu');
    const [email, setEmail] = useState('danielboadu594@gmail.com');
    const [phone, setPhone] = useState('+233 599678566');
    const [google, setGoogle] = useState('danielboadu594@gmail.com');
    const [facebook, setFacebook] = useState('Daniel Boadu123')
    const [edit, setEdit] = useState(false);
    const [editName, setEditName] = useState(false);
    const [editEmail, setEditEmail] = useState(false);
    const [save, setSave] = useState(false);
    const [editGoogle, setEditGoogle] = useState(false);
    const [editFacebook, setEditFacebook] = useState(false);
    const [value, setValue] = useState(null);
    const [isfocus, setFocus] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [nameFocus, setNameFocus] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);
    const [phoneFocus, setPhoneFocus] = useState(false);


    const [selectImage, setSelectImage] = useState('https://images.app.goo.gl/F4hX9Gw1CkcC235m6')

    const handleModalPick = () => {
        setModalVisible(true)
    }


    const pickImage = async (mode) => {

        try {
            let result = {};
            if (mode === "gallery") {
                await ImagePicker.requestMediaLibraryPermissionsAsync();
                result = await ImagePicker.launchImageLibraryAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.Images,
                    allowsEditing: true,
                    aspect: [1, 1],
                    quality: 1
                })
            } else {
                await ImagePicker.requestCameraPermissionsAsync();
                result = await ImagePicker.launchCameraAsync({
                    cameraType: ImagePicker.CameraType.front,
                    allowsEditing: true,
                    aspect: [1, 1],
                    quality: 1,
                });



            }

            if (!result.canceled) {
                await saveImage(result.assets[0].uri)
            }

            console.log(result)
        } catch (error) {
            alert('Error uploading image' + error.message);
            setModalVisible(false)
        }

    }

    const removeImage = async () => {
        try {
            saveImage(null)
        } catch (error) {
            alert(message);
            setModalVisible(false)

        }
    }

    const saveImage = async (image) => {
        try {
            setImage(image);
            setModalVisible(false)
        } catch (error) {
            throw error;

        }
    }

    const handleEdit = () => {
        setEdit(!edit);
    };

    const handleEditEmail = () => {
        setEditEmail(!editEmail);
    };

    const handleEditName = () => {
        setEditName(!editName)
    }

    const handleGoogle = () => {
        setEditGoogle(!editGoogle)
    }

    const handleLink = () => {
        setEditGoogle(false)
    }

    const handleFacebook = () => {
        setEditFacebook(!editFacebook)
    }

    const handleLinkFacebook = () => {
        setEditFacebook(false);
    }

    const handleSave = () => {
        setSave(true);
    }

    const renderLabel = () => {
        if (value || isfocus) {
            return (
                <Text style={[styles.label1, isfocus && tw`text-[#00ACEE]`]}>Location</Text>
            )

        }
        return null;
    }

    const handletoggle = () => {
        if (email === '') {
            setEmailError('This field is required');
        } else {
            setEmailError('');

        }
    }

    const handleModal = () => {
        setModalVisible(true);
    }

    const handleClose = () => {
        setModalVisible(false)
    }






    return (
        <SafeAreaView style={styles.edit}>
            <ScrollView style={tw`pt-5 px-4 `} showsVerticalScrollIndicator={false}>
                <View style={tw`pb-10`}>
                    <View style={tw`flex  flex-row items-center justify-between`}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Icon color="#00ACEE" name='arrow-back' size={22} />
                        </TouchableOpacity>
                        <Text style={tw`text-2xl text-[#00ACEE]`}>Profile</Text>
                        <TouchableOpacity style={tw`bg-[#00ACEE] rounded-full px-2 py-1`} onPress={handleSave}>
                            <Text style={tw`text-white`}>Save All</Text>
                        </TouchableOpacity>
                    </View>
                    <Avatar onButtonPress={() => setModalVisible(true)} uri={image} />
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
                                    <TouchableOpacity onPress={handleClose}
                                        style={tw`left-28 rounded-full `}>
                                        <Icon8 name='close' size={18} color="gray" />
                                    </TouchableOpacity>
                                    <Text style={tw`font-500 text-lg`}>Profile Photo</Text>
                                    <View style={tw`flex flex-row gap-x-5 pt-4 items-center`}>
                                        <TouchableOpacity
                                            style={tw`flex flex-col
                                     bg-[#f0f2f5] p-1.5 rounded-lg  shadow-md items-center gap-x-2`} onPress={() => pickImage()}>
                                            <Icon7 name='camera' size={23} color="#00ACEE" />
                                            <Text style={tw`text-gray-500`}>Camera</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            style={tw`flex flex-col
                                     bg-[#f0f2f5] p-1.5 rounded-lg shadow-md
                                      items-center gap-x-2`} onPress={() => pickImage("gallery")}>
                                            <Icon8 name='picture' size={23} color='#00ACEE' />
                                            <Text style={[tw`text-gray-500`, styles.text]}>Gallery</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={tw`flex flex-col 
                                    bg-[#f0f2f5] p-1.5 rounded-lg items-center shadow-md`} onPress={() => removeImage()}>
                                            <Icon8 name='delete' color='#00acee' size={23} />
                                            <Pressable
                                                style={[styles.button, styles.buttonClose]}
                                                onPress={() => setModalVisible(!modalVisible)}>
                                                <Text style={tw`text-gray-500`}>Remove</Text>
                                            </Pressable>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </Modal>

                    </View>
                    <View style={tw`bg-white rounded-md p-3 py-6 my-8 border
                 border-[#00ACEE] border-opacity-20 `}>
                        <View style={tw``}>
                            <Text style={[tw`text-[4.2]`, nameFocus ? tw`text-[#00ACEE]` : tw`text-[#000]`, styles.label]}>Name</Text>
                            <View style={[tw`flex flex-row items-center gap-x-1 
                        justify-between border border-[#00acee] border-opacity-15 rounded-md`,
                            nameFocus && tw`border border-[#00ACEE] `, styles.dropdown]}>
                                <Icon4 name='user' size={17} style={nameFocus ? tw`text-[#00ACEE]` : tw`text-[#000]`} />
                                <View style={styles.line}></View>
                                <View style={tw`flex flex-row items-center  w-64`}>

                                    <TextInput
                                        value={nameText}
                                        onChange={(e) => setNameText(e.target.value)}
                                        styles={styles.selectedTextStyle}
                                        autoCapitalize='none'
                                        autoCorrect={false}
                                        onFocus={() => setNameFocus(true)}
                                        onBlur={() => setNameFocus(false)}
                                        // onFocus={() => setIsClicked(false)}
                                        // onBlur={() => setIsClicked(false)}
                                        editable={editName}

                                    />

                                </View>
                                <TouchableOpacity onPress={handleEditName}>
                                    {
                                        !editName ? (
                                            <Icon2 name="mode-edit" size={20} color="#00ACEE" />
                                        ) : (
                                            <Text style={tw`text-[#00ACEE]`}>Save</Text>
                                        )
                                    }
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={tw`mt-4`}>
                            <Text style={[tw`text-[4.2]`, emailFocus ? tw`text-[#00ACEE]` : tw`text-[#000]`, styles.label]}>Email</Text>
                            <View style={[tw`flex flex-row gap-x-1 items-center 
                        justify-between border border-[#00acee]
                         border-opacity-15 rounded-md`, emailFocus && tw`border border-[#00ACEE]`, styles.dropdown]}>
                                <Icon5 name='email' size={17} style={emailFocus ? tw`text-[#00ACEE]` : tw`text-[#000]`} />
                                <View style={styles.line}></View>
                                <View style={tw`flex flex-row items-center gap-x-2 w-64`}>

                                    <TextInput
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        styles={styles.selectedTextStyle}
                                        autoCapitalize='none'
                                        autoCorrect={false}
                                        editable={editEmail}
                                        onFocus={() => setEmailFocus(true)}
                                        onBlur={() => setEmailFocus(false)}
                                    />
                                    {emailError && <Text>{emailError}</Text>}
                                </View>
                                <TouchableOpacity onPress={handleEditEmail}>
                                    {
                                        !editEmail ? (
                                            <Icon2 name="mode-edit" size={20} color="#00ACEE" />
                                        ) : (
                                            <Text style={tw`text-[#00ACEE]`}  >Save</Text>
                                        )
                                    }
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={tw`mt-4`}>
                            <Text style={[tw`text-[4.2]`, phoneFocus ? tw`text-[#00ACEE]` : tw`text-[#000]`, styles.label]}>Phone Number</Text>
                            <View style={[tw`flex flex-row gap-x-1 items-center justify-between
                         border border-[#00acee] border-opacity-15 rounded-md`, phoneFocus && tw`border border-[#00ACEE]`
                                , styles.dropdown]}>
                                <Icon6 name='phone' size={17} style={phoneFocus ? tw`text-[#00ACEE]` : tw`text-[#000]`} />
                                <View style={styles.line}></View>
                                <View style={tw`flex flex-row items-center  w-64`}>

                                    <TextInput
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        styles={styles.selectedTextStyle}
                                        autoCapitalize='none'
                                        autoCorrect={false}
                                        editable={edit}
                                        onFocus={() => setPhoneFocus(true)}
                                        onBlur={() => setPhoneFocus(false)}
                                    />

                                </View>
                                <TouchableOpacity
                                    onPress={handleEdit} >
                                    {
                                        !edit ? (
                                            <Icon2 name="mode-edit" size={20} color="#00ACEE" />
                                        ) : (
                                            <Text style={tw`text-[#00ACEE]`}>Save</Text>
                                        )
                                    }
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.container}>
                            {renderLabel()}
                            <Dropdown
                                style={[tw`border border-[#00acee] border-opacity-15 rounded-md`, styles.dropdown, isfocus && { borderColor: '#00acee' }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={data}
                                search
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={!isfocus ? 'Select location' : '...'}
                                searchPlaceholder="Search..."
                                value={value}

                                onFocus={() => setFocus(true)}
                                onBlur={() => setFocus(false)}
                                onChange={item => {
                                    setValue(item.value);
                                    setFocus(false);
                                }}
                                renderLeftIcon={() => (
                                    <AntDesign
                                        style={styles.icon}
                                        color={isfocus ? '#00ACEE' : 'black'}
                                        name="Safety"
                                        size={20}
                                    />
                                )}
                            />
                        </View>
                    </View>
                    <View style={tw`mt-1 gap-y-2 mx-1`}>
                        <Text style={tw`text-gray-500 text-lg`}>Links:</Text>
                        <View style={tw`flex flex-row items-center gap-3`}>
                            <View style={tw`flex flex-row gap-x-3 items-center  bg-transparent border border-[#00ACEE] bg-opacity-60 rounded-md p-1.5`}>
                                <Image source={require('../assets/facebook.png')} style={[tw`w-6 h-6 `, styles.image]} />
                                <TextInput
                                    value={facebook}
                                    onChange={(e) => setFacebook(e.target.value)}
                                    styles={styles.selectedTextStyle}
                                    autoCapitalize='none'
                                    autoCorrect={false}
                                    editable={editFacebook}
                                    style={tw`w-[15.8rem]`}
                                />
                                {
                                    !editFacebook ? (
                                        <TouchableOpacity onPress={handleFacebook} style={tw`w-10`}>
                                            <Text style={tw`text-[#00ACEE] text-center`}>Unlink</Text>
                                        </TouchableOpacity>
                                    ) : (
                                        <TouchableOpacity onPress={handleLinkFacebook} style={tw`w-10`}
                                        >
                                            <Text style={tw`text-[#00ACEE] text-center`}>Link</Text>
                                        </TouchableOpacity>
                                    )
                                }
                            </View >
                        </View>
                        <View style={tw`flex flex-row items-center gap-3`}>
                            <View style={tw`flex flex-row gap-x-3  items-center bg-transparent 
                             border border-[#00ACEE] bg-opacity-60 rounded-md p-1.5 `} onPress={() => { }}>
                                <Image source={require('../assets/google.png')} style={tw`w-6 h-6`} />
                                <TextInput
                                    value={google}
                                    onChange={(e) => setGoogle(e.target.value)}
                                    styles={styles.selectedTextStyle}
                                    autoCapitalize='none'
                                    autoCorrect={false}
                                    editable={editGoogle}
                                    style={tw`w-[15.8rem]`}
                                />
                                {
                                    !editGoogle ? (
                                        <TouchableOpacity onPress={handleGoogle} style={tw`w-10`}>
                                            <Text style={tw`text-[#00ACEE] text-center`}>Unlink</Text>
                                        </TouchableOpacity>
                                    ) : (
                                        <TouchableOpacity onPress={handleLink} style={tw`w-10`}>
                                            <Text style={tw`text-[#00ACEE] text-center`}>Link</Text>
                                        </TouchableOpacity>
                                    )
                                }
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default EditScreen


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 2,
        paddingTop: 12,
    },
    edit: {
        flex: 1,
        backgroundColor: "#f0f2f5",
    },
    dropdown: {
        height: 49,
        marginTop: 6,
        // borderColor: '#00ACEE',

        // borderOpacity:0.2,
        // borderWidth: 0.5,
        // borderRadius: 8,
        paddingHorizontal: 8,
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: -4,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    label1: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        marginTop: 6,
        top: 3,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },

    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 15,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 50,
        fontSize: 14,
    },
    line: {
        backgroundColor: '#00acee',
        opacity: 0.3,
        width: 1,
        height: 14,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
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
});











