import { ScrollView, StyleSheet, Text, View, Platform, TouchableOpacity, TextInput, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import _ from 'lodash';
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import axios from 'axios'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'

const AIScreen = () => {
    const navigation = useNavigation();
    const [chatList, setChatList] = useState([]);
    // const [data, setData] = useState([]);

    // const [textInput, setTextInput] = useState('');

    // const apiKey = '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'

    //    const apiUrl = '	https://api.openai.com/v1/engines/text-davinci-002/chat/completions'


    // const handleSend = async () => {
    //     if (textInput) {
    //         const newMessage = { role: 'user', content: textInput };
    //         setData([...data, newMessage]);
    //         setTextInput('');

    //         try {
    //             const response = await axios.post('https://api.openai.com/v1/engines/gpt-3.5-turbo/completions',
    //                 {
    //                     messages: [...data, { role: 'assistant', content: textInput }],
    //                 },
    //                 {
    //                     headers: {
    //                         'Authorization': `Bearer ${apiKey}`,
    //                         'Content-Type': 'application/json',
    //                     },
    //                 }
    //             );

    //             const conversationCopy = _.cloneDeep(data);
    //             const jsonConversation = JSON.stringify(conversationCopy);

    //             const assistantResponse = response.data.choices[0].message.content;
    //             setData([...data, { role: 'assistant', content: assistantResponse }]);

    //         } catch (error) {
    //             console.error(error);
    //         }
    //     }

    // }

    return (
        <SafeAreaView style={tw`flex-1 bg-[#f0f2f5]`}>
            <View style={tw`mt-6 mx-4`}>
                <View style={tw`flex flex-row items-center`}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon color="#00ACEE" name='arrow-back' size={18} />
                    </TouchableOpacity>
                    <Text style={tw`text-[#00ACEE] text-xl pl-34 font-bold`}>AI</Text>
                </View>
                {/* <FlatList
                style={{height:'85%', bottom:'3%'}}
                data={chatList}
                inverted={true}
                
                
                /> */}
                {/* Incoming Msg Text */}
                <View style={styles.inComingMsg}>
                    <Text style={styles.incomingMsgTxt}>Incoming</Text>
                </View>
                {/* Send Message Text */}
                <View style={styles.sendMsgBox}>
                    <Text style={styles.sendMsgTxt}>Sent</Text>
                </View>
                {/* <View style={styles.container}>
                    <FlatList
                        // keyExtractor={(item, index) => index.toString()}
                        style={styles.body}
                        renderItem={({ item }) => (
                            <View>
                                <Text>{item.role}: {item.content}</Text>
                            </View>
                        )}
                        contentContainerStyle={styles.conversationContainer}

                    />

                  

                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            value={textInput}
                            onChange={text => setTextInput(text)}
                            placeholder='Ask me anything'
                        />
                    </View>
                    <TouchableOpacity style={styles.btn} onPress={handleSend}>
                        <Text style={styles.btnText}>Send</Text>
                    </TouchableOpacity>


                </View> */}
            </View>
        </SafeAreaView>
    )
}

export default AIScreen

const styles = StyleSheet.create({

    conversationContainer: {
        flexGrow: 1,
    },
    inComingMsg:{
        backgroundColor:'#fff',
        borderRaduis:10,
        maxWidth:'70%',
        padding:5,
        alignSelf:'flex-start',
        marginHorizontal:5,
        marginVertical:5,
        borderWidth:0.5,
        borderColor:'gray'
    },

    incomingMsgTxt:{
        fontSize:16,
        color:'black'
    },
    sendMsgBox:{
        backgroundColor:'green',
        borderRaduis:10,
        maxWidth:'70%',
        padding:5,
        alignSelf:'flex-end',
        marginHorizontal:5,
        marginVertical:5,
        
    },

    sendMsgTxt:{
        fontSize:16,
        color:'white'
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
})




// const prompt = textInput
//     const response = await axios.post(apiUrl, {
//         prompt:prompt,
//         max_tokens:1024,
//         temperature:0.5
//     }, {
//         headers:{
//             'Content-Type':'application/json',
//             'Authorization':`Bearer ${apiKey}`
//         }
//     });

//     const text = response?.data?.choices[0]?.text;
//     setData([...data, {text:'user', text:'textInput', type:'bot', text:'text'}]);
//     setTextInput('');

//    }