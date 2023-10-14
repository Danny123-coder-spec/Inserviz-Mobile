import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'
import Icon3 from 'react-native-vector-icons/Entypo'
import * as ImagePicker from 'expo-image-picker';
import imageData from '../data/Image'
import Icon4 from 'react-native-vector-icons/Feather'
import Icon5 from 'react-native-vector-icons/Fontisto'
import Icon6 from 'react-native-vector-icons/AntDesign'


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
    const [image, setImage] = useState(imageData[0]);
    const [nameText, setNameText] = useState('Daniel Boadu');
    const [email, setEmail] = useState('danielboadu594@gmail.com');
    const [phone, setPhone] = useState('+233 599678566');
    const [google, setGoogle] = useState('danielboadu594@gmail.com');
    const [facebook, setFacebook] = useState('Daniel Boadu123')
    const [edit, setEdit] = useState(false);
    const [editName, setEditName] = useState(false)
    const [editEmail, setEditEmail] = useState(false);
    const [save, setSave] = useState(false);
    const [editGoogle, setEditGoogle] = useState(false);
    const [editFacebook, setEditFacebook] = useState(false);
    const [value, setValue] = useState(null);
    const [isfocus, setFocus] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [emailError, setEmailError] = useState('');

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        console.log(result);

        if (result.canceled) {
            setImage(result.assets[0].uri);
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






    return (
        <SafeAreaView>
            <ScrollView style={tw`mt-3 mx-4`} showsHorizontalScrollIndicator={false}>
                <View style={tw`flex  flex-row items-center justify-between`}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon color="#00ACEE" name='arrow-back' size={18} />
                    </TouchableOpacity>
                    <Text style={tw`text-2xl text-[#00ACEE]`}>Profile</Text>
                    <TouchableOpacity style={tw`bg-[#00ACEE] rounded-full px-1 py-0.5`} onPress={handleSave}>
                        <Text style={tw`text-white`}>Save All</Text>
                    </TouchableOpacity>
                </View>
                <View style={tw`flex flex-col items-center justify-center`}>
                    <TouchableOpacity style={tw` mt-10`} onPress={pickImage}>
                        {image && (
                            <Image style={tw`h-26 w-26 rounded-full border-2 border-[#00ACEE] border-opacity-70`} source={require('../assets/profile.jpg')} />
                        )}
                        <View style={tw`absolute bottom-[0] top-[18] right-1  z-10`}>
                            <Icon3 name='camera' size={25} color="#00ACEE" />
                        </View>
                    </TouchableOpacity>

                </View>
                <View style={tw`bg-white rounded-md p-3 py-6 my-8 border border-[#00ACEE] border-opacity-10`}>
                    <View style={tw``}>
                        <Text style={[tw`text-[4.2]`, styles.label]}>Name</Text>
                        <View style={[tw`flex flex-row items-center gap-x-1 
                        justify-between border border-[#00acee] border-opacity-15 rounded-md`,isClicked && { borderColor: '#00acee' },  styles.dropdown]}>
                            <Icon4 name='user' size={17} />
                            <View style={styles.line}></View>
                            <View style={tw`flex flex-row items-center  w-64`}>

                                <TextInput
                                    value={nameText}
                                    onChange={(e) => setNameText(e.target.value)}
                                    styles={styles.selectedTextStyle}
                                    autoCapitalize='none'
                                    autoCorrect={false}
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
                        <Text style={[tw`text-[4.2]`, styles.label]}>Email</Text>
                        <View style={[tw`flex flex-row gap-x-1 items-center justify-between border border-[#00acee] border-opacity-15 rounded-md`, styles.dropdown]}>
                            <Icon5 name='email' size={17} />
                            <View style={styles.line}></View>
                            <View style={tw`flex flex-row items-center gap-x-2 w-64`}>

                                <TextInput
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    styles={styles.selectedTextStyle}
                                    autoCapitalize='none'
                                    autoCorrect={false}
                                    editable={editEmail}

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
                        <Text style={[tw`text-[4.2]`, styles.label]}>Phone Number</Text>
                        <View style={[tw`flex flex-row gap-x-1 items-center justify-between
                         border border-[#00acee] border-opacity-15 rounded-md`
                        , styles.dropdown]}>
                            <Icon6 name='phone' size={17} />
                            <View style={styles.line}></View>
                            <View style={tw`flex flex-row items-center  w-64`}>

                                <TextInput
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    styles={styles.selectedTextStyle}
                                    autoCapitalize='none'
                                    autoCorrect={false}
                                    editable={edit}
                               
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
                <View style={tw`mt-2 gap-y-2`}>
                    <Text style={tw`text-gray-500 text-lg`}>Links:</Text>
                    <View style={tw`flex flex-row items-center gap-3`}>
                        <View style={tw`flex flex-row gap-x-3 items-center w-73 bg-transparent border border-[#00ACEE] bg-opacity-60 rounded-md p-1.5`}>
                            <Image source={require('../assets/facebook.png')} style={[tw`w-6 h-6 `, styles.image]} />
                            <TextInput
                                value={facebook}
                                onChange={(e) => setFacebook(e.target.value)}
                                styles={styles.selectedTextStyle}
                                autoCapitalize='none'
                                autoCorrect={false}
                                editable={editFacebook}
                                style={tw`w-58`}
                            />
                        </View >
                        {
                            !editFacebook ? (
                                <TouchableOpacity onPress={handleFacebook} style={tw`bg-[#00ACEE] rounded-md p-2 w-14 `}>
                                    <Text style={tw`text-white text-center`}>Unlink</Text>
                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity onPress={handleLinkFacebook} style={tw`bg-[#00ACEE] rounded-md p-2 w-14 `}>
                                    <Text style={tw`text-white text-center`}>Link</Text>
                                </TouchableOpacity>
                            )
                        }
                    </View>
                    <View style={tw`flex flex-row items-center gap-3`}>
                        <View style={tw`flex flex-row gap-x-3 w-73 items-center bg-transparent  border border-[#00ACEE] bg-opacity-60 rounded-md p-1.5 `} onPress={() => { }}>
                            <Image source={require('../assets/google.png')} style={tw`w-6 h-6`} />
                            <TextInput
                                value={google}
                                onChange={(e) => setGoogle(e.target.value)}
                                styles={styles.selectedTextStyle}
                                autoCapitalize='none'
                                autoCorrect={false}
                                editable={editGoogle}
                                style={tw`w-58`}
                            />
                        </View>
                        {
                            !editGoogle ? (
                                <TouchableOpacity onPress={handleGoogle} style={tw`bg-[#00ACEE] rounded-md p-2 w-14 `}>
                                    <Text style={tw`text-white text-center`}>Unlink</Text>
                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity onPress={handleLink} style={tw`bg-[#00ACEE] rounded-md p-2 w-14 `}>
                                    <Text style={tw`text-white text-center`}>Link</Text>
                                </TouchableOpacity>
                            )
                        }
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
    dropdown: {
        height: 45,
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
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 50,
        fontSize: 16,
    },
    line: {
        backgroundColor: '#00acee',
        opacity: 0.3,
        width: 1,
        height: 14,
    }
});