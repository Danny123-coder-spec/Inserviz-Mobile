// import { StyleSheet, Text, View, Dimensions, Animated, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native'
// import React, { useState } from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context'
// import tw from 'twrnc'
// import Icon from 'react-native-vector-icons/Feather'
// import Icon2 from 'react-native-vector-icons/Fontisto'
// import Icon3 from 'react-native-vector-icons/Feather'
// import Icon4 from 'react-native-vector-icons/Feather'
// import Icon5 from 'react-native-vector-icons/Feather'
// import { useNavigation } from '@react-navigation/native'

// const Login = ({ label, value, onChange }) => {
//     const [isFocus, setFocus] = useState(false);

//     const [toggle, setToggle] = useState(false);

//     const navigation = useNavigation();

//     const labelAnimation = new Animated.Value(isFocus || value !== '' ? 1 : 0);


//     const translateY = labelAnimation.interpolate({
//         inputRange: [0, 1],
//         outputRange: [isFocus ? -10 : 8, isFocus ? -10 : 0],
//     });

//     const fontSize = labelAnimation.interpolate({
//         inputRange: [0, 1],
//         outputRange: [16, 12],
//     });


//     const handleToggle = () => {
//         setToggle(!toggle);
//     }

//     const screenWidth = Dimensions.get('window').width
//     return (

//         <View style={tw``}>
//             <View style={[tw`flex flex-row gap-x-1 items-center border
//            border-[#00ACEE] border-opacity-20  rounded-md`, styles.dropdown, isFocus && tw`border border-[#00ACEE]`]}>
//                 <Icon name='user' size={19} />
//                 <View style={styles.line}></View>
//                 <View style={[styles.label, { backgroundColor: isFocus ? 'white' : 'transparent' }]}>
//                     <Animated.Text style={[styles.label1, { transform: [{ translateY }], fontSize }]}>
//                         {label}
//                     </Animated.Text>
//                 </View>
//                 <TextInput
//                     placeholderTextColor="#000"
//                     value={value}
//                     onChange={onChange}
//                     onFocus={() => setFocus(true)}
//                     onBlur={() => setFocus(false)}
//                     style={tw`w-[19.5rem]`}
//                 />
//             </View>


//         </View>


//     )
// }

// export default Login

// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: 'white',
//         padding: 2,
//         paddingTop: 12,
//     },
//     lin: {
//         width: 40,
//         backgroundColor: 'gray',
//         height: 0.8,
//     },
//     button: {
//         justifyContent: 'center',
//         alignItems: 'center',
//         shadowColor: '#BFBFBF', // Shadow color (light gray)
//         shadowOffset: { width: 3, height: 3 }, // Shadow offset
//         shadowOpacity: 1, // Shadow opacity
//         shadowRadius: 5, // Shadow blur radius
//     },
//     input: {
//         boxShadow: 'inset 4px 4px 4px rgba(104, 123, 158, 0.2), inset -4px -4px 4px rgba(255, 255, 255, 0.25)',
//         border: '0.5px solid rgba(227, 237, 247, 1)',
//     },
//     edit: {
//         flex: 1,
//         backgroundColor: '#f0f2f5',
//     },
//     dropdown: {
//         height: 45,
//         marginTop: 7,
//         boxShadow: 'inset 4px 4px 4px rgba(104, 123, 158, 0.2), inset -4px -4px 4px rgba(255, 255, 255, 0.25)',
//         border: '0.5px solid rgba(227, 237, 247, 1)',
//         paddingHorizontal: 8,
//     },
//     icon: {
//         marginRight: 5,
//     },
//     label: {
//         position: 'relative',
//         left: -25,
//         top: -30,
//         backgroundColor: 'transparent',


//     },
//     label1: {
//         position: 'absolute',
//         backgroundColor: 'white',
//         left: 22,
//         marginTop: 6,
//         top: 3,
//         zIndex: 999,
//         paddingHorizontal: 8,
//         fontSize: 14,
//     },
//     placeholderStyle: {
//         fontSize: 16,
//     },
//     selectedTextStyle: {
//         fontSize: 16,
//     },
//     iconStyle: {
//         width: 20,
//         height: 20,
//     },
//     inputSearchStyle: {
//         height: 50,
//         fontSize: 16,
//     },
//     line: {
//         backgroundColor: '#00acee',
//         opacity: 0.3,
//         width: 1,
//         height: 16,
//     }
// });