import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput, FlatList, Button } from 'react-native'
import React, { useCallback, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import Icon6 from 'react-native-vector-icons/MaterialIcons'
import Icon2 from 'react-native-vector-icons/MaterialIcons'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'
import { Dropdown } from 'react-native-element-dropdown';
import * as DocumentPicker from 'expo-document-picker';

const SkillScreen = () => {
    const navigation = useNavigation();
    const [skills, setSkills] = useState([]);
    const [newSkill, setNewSkill] = useState('');
    const [levelSkill, setLevelSkill] = useState('');
    const [focus, setFocus] = useState(false);
    const [levelFocus, setLevelFocus] = useState(false);
    const [value, setValue] = useState(null);
    const [fileResponse, setFileResponse] = useState([]);

    const renderItem = ({ item }) => {
        return (
            <View>
                <Text>{item.skill}</Text>
                <Text>{item.level}</Text>
            </View>
        )
    }


    const handleDocumentPicker = async () => {

        try {
            const result = await DocumentPicker.getDocumentAsync();
            if (result.type === 'success') {
                console.log(`File selected: ${result.name}, size: ${result.size} bytes`);
            } else {
                console.log('Document picker was canceled.');
            }
        } catch (error) {
            console.log('Error uploading document', error);
        }
    }


    const addSkill = () => {
        if (skills !== '') {
            setSkills([...skills, newSkill]);
            setNewSkill('');
        }
    };

    // const addSkill = () => {
    //     if (newSkill && levelSkill) {
    //         const newSkillItem = { skill: newSkill, level: newLevel };
    //         setSkillSet([...skillSet, newSkillItem]); // Add the skill-level pair to the array
    //         setNewSkill(''); // Clear the skill input
    //         setNewLevel(''); // Clear the level input
    //     };
    // }

    const handleDeleteSkill = (skillToDelete) => {
        setSkills(skills.filter((skill) => skill !== skillToDelete))
    }

    const handleFocus = () => {
        setFocus(true);
    }

    const handleBlur = () => {
        setFocus(false);
    }



    const data = [
        { label: ' Beginner', value: '1' },
        { label: 'Junior', value: '2' },
        { label: 'Mid-Level', value: '3' },
        { label: 'Senior', value: '4' },
        { label: 'Expert', value: '5' },

    ];
    return (
        <SafeAreaView style={tw`flex-1 bg-[#f0f2f5]`}>
            <View style={tw`mt-4 mx-5`}>
                <View style={tw`flex flex-row items-center`}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={tw``}>
                        <Icon6 color="#00ACEE" name='arrow-back' size={20} />
                    </TouchableOpacity>
                    <Text style={tw`font-500 text-2xl text-[#00ACEE] pl-30`}>Skills</Text>
                </View>
                <ScrollView showsVerticalScrollIndicator={false} style={tw`mt-6`}>


                    <FlatList
                        data={skills}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <View style={tw`flex flex-row items-center bg-white mt-2 px-2 pb-2 border border-[#00ACEE]
                        border-opacity-15 rounded-md  justify-between`}>
                                <Text style={[styles.skillItem, tw`text-gray-500`]}>{item}</Text>
                                <TouchableOpacity onPress={() => handleDeleteSkill(item)}>
                                    <Icon2 name="delete" size={20} color="#00ACEE" />
                                </TouchableOpacity>
                            </View>
                        )}
                    />
{/* 
                    <FlatList
                        data={skillSet}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => index.toString()} // Assign unique keys
                    /> */}

                    <View style={[tw`bg-white mt-4 border 
                    border-[#00ACEE] border-opacity-20 rounded-md p-2`,
                    focus && tw`border border-[#00ACEE]`]}>
                        <TextInput
                            value={newSkill}
                            onChangeText={(newSkill) => setNewSkill(newSkill)}
                            placeholder='Enter Skill'
                            placeholderTextColor="black"
                            onFocus={handleFocus}
                            maxHeight={300}
                            onBlur={handleBlur}
                            style={{ fontSize: 16 }}
                            placeholderStyle={styles.placeholderStyle}
                        />
                    </View>
                    <Dropdown
                        style={[tw`border border-[#00acee] bg-white border-opacity-20 rounded-md`, styles.dropdown,
                        levelFocus && { borderColor: '#00acee' }]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        data={data}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!levelFocus && 'Select Level' + ' ...'}
                        searchPlaceholder="Search..."

                        value={value}
                        onChangeText={(newLevel) => setLevelSkill(newLevel)}
                        onFocus={() => setLevelFocus(true)}
                        onBlur={() => setLevelFocus(false)}
                        onChange={item => {
                            setValue(item.value);
                            setLevelFocus(false);
                        }}

                    />





                    <TouchableOpacity style={tw`flex flex-row 
                    items-center bg-[#00ACEE] mt-4 justify-center p-2 gap-x-1 rounded-md `}
                        onPress={addSkill}>
                        <View style={tw`bg-white rounded-full`}>
                            <Icon name='add' size={20} color="#00ACEE" />
                        </View>
                        <Text style={tw`text-white`}>Add Skill</Text>
                    </TouchableOpacity>


                    <View style={tw`flex flex-col items-center mt-7`}>
                        <Text style={tw`text-xl font-500 text-gray-500`}>Add Resume</Text>
                        <TouchableOpacity
                            style={tw`bg-[#00ACEE] rounded-full mt-2`}
                            onPress={() => handleDocumentPicker()}>
                            <Icon name='add' size={30} color="#fff" />
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default SkillScreen

const styles = StyleSheet.create({


    dropdown: {
        height: 45,
        marginTop: 6,

        paddingHorizontal: 8,
    },


    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },

    inputSearchStyle: {
        height: 50,
        fontSize: 16,
    },
    skillItem: {
        fontSize: 16,
        marginTop: 8,

    },

});