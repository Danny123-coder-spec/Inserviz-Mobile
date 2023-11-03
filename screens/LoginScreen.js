import { StyleSheet, Text, View, Dimensions, Animated, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import Icon from 'react-native-vector-icons/Feather'
import Icon2 from 'react-native-vector-icons/Fontisto'
import Icon3 from 'react-native-vector-icons/Feather'
import Icon4 from 'react-native-vector-icons/Feather'
import Icon5 from 'react-native-vector-icons/Feather'
import Icon6 from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'

const LoginScreen = () => {
  const navigation = useNavigation();
  const [isFocus, setFocus] = useState(false);
  const [isFocusEmail, setFocusEmail] = useState(false);
  const [isFocusPass, setFocusPass] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [value, setValue] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [touched, setTouched] = useState(false);
  const [passwordError, setPasswordError] = useState('')
  const [userError, setUserError] = useState('')


  const handleLogin = () => {
    if(!touched) {
      setTouched(true);
    }

    if (name === '' || email === '' || password === '' && touched) {
      setUserError('Please username is required');
      setEmailError('Please email is required');
      setPasswordError('Password is required');

    }else {
      navigation.navigate('BottomNavigation');
    }
     
    
    
    if(name === '') {
      setUserError('Please username is required');
    }

    if(email === '') {
      setEmailError('Please email is required');
    }

    if(password === '') {
      setPasswordError('Password is required');
    }




  }

  const handleToggle = () => {
    setToggle(!toggle);
  }


  const screenWidth = Dimensions.get('window').width
  return (
    <SafeAreaView style={[{ width: screenWidth }, tw`flex-1 bg-[#fff]`]}>
      <ScrollView style={tw`pt-2 mx-4`} showsVerticalScrollIndicator={false}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={tw`mt-4`}>
        <Icon6 color="#00ACEE" name='arrow-back' size={23} />
      </TouchableOpacity>
        <View style={tw`flex flex-col items-center `}>
          <Image style={tw`h-15 w-20  `} source={require('../assets/logo.png')} />
          <Image source={require('../assets/Inserviz.png')} style={tw`w-[12rem] h-[2rem] mt-10`} />


        </View>
        <View style={tw`mt-6`}>
          <Text style={tw`text-[#00ACEE] text-2xl`}>Welcome</Text>
          <View style={tw`flex flex-row items-center gap-x-1 pt-2`}>
            <Text>Please</Text>
            <Text style={tw`text-[#00ACEE]`}>login</Text>
            <Text>with your credentials</Text>
          </View>
          <View style={tw`mt-3`}>
            <View style={[tw`flex flex-row gap-x-1 items-center border
           border-[#00ACEE] border-opacity-35  rounded-md`, 
           styles.dropdown, isFocus && tw`border border-[#00ACEE]`, userError
            ? tw`border-red-500` : tw``]}>
              <Icon name='user' size={19} />
              <View style={[userError ? tw`bg-red-500 w-0.2 h-4` : styles.line]}></View>
              {/* 
              <View style={[styles.label, { backgroundColor: isFocus ? 'white' : 'transparent' }]}>
                <Animated.Text style={[styles.label1, { transform: [{ translateY }], fontSize }]}>
                  Username
                </Animated.Text>
              </View> */}
              <TextInput
                placeholder="Username"
                placeholderTextColor="#000"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if(touched) {
                    setUserError('');
                  }
                }}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                
                style={tw`w-[19.5rem]`}
              />
            </View>
            {userError !== '' && touched && <Text style={tw`text-red-500 text-xs mt-1`}>{userError}</Text>}

            <View style={[tw`flex flex-row gap-x-1 mt-4 items-center border
           border-[#00ACEE] border-opacity-35   rounded-md`,
            styles.dropdown, isFocusEmail && tw`border border-[#00ACEE]`,
            emailError && tw`border-red-500`]}>
              <Icon2 name='email' size={19} />
              <View style={[userError ? tw`bg-red-500 w-0.2 h-4` : styles.line]}></View>
              {/* <View style={[styles.label, { backgroundColor: isFocusEmail ? 'white' : 'transparent' }]}>
                <Animated.Text style={[styles.label1, { transform: [{ translateY }], fontSize }]}>
                  Email
                </Animated.Text>
              </View> */}
              <TextInput
                placeholder="Email"
                placeholderTextColor="#000"
                value={email}
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError('');
                }}
                onFocus={() => setFocusEmail(true)}
                onBlur={() => setFocusEmail(false)}
                style={tw`w-[19.5rem]`}
              />
            </View>
            {emailError !== '' && <Text style={tw`text-red-500 text-xs mt-1`}>{emailError}</Text>}
            <View style={[tw`flex flex-row gap-x-1 items-center border
           border-[#00ACEE] border-opacity-35 mt-4 rounded-md`, styles.dropdown, isFocusPass && tw`border border-[#00ACEE]`,
            passwordError && tw`border-red-500`]}>
              <Icon3 name='lock' size={19} />
              <View style={[userError ? tw`bg-red-500 w-0.2 h-4` : styles.line]}></View>
              {/* <View style={[styles.label, { backgroundColor: isFocusPass ? 'white' : 'transparent' }]}>
                <Animated.Text style={[styles.label1, { transform: [{ translateY }], fontSize }]}>
                  Password
                </Animated.Text>
              </View> */}

              <TextInput
                placeholder="Password"
                placeholderTextColor="#000"
                value={password}
                secureTextEntry={!toggle}
                autoCapitalize='none'
                autoCorrect={false}

                onChange={(e) => {
                  setPassword(e.target.value);
                  setPasswordError('');
                }}
                onFocus={() => setFocusPass(true)}
                onBlur={() => setFocusPass(false)}
                style={tw`w-[18.3rem]`}
              />
              <TouchableOpacity onPress={handleToggle} style={tw`flex flex-row items-end`}>
                <Icon5 name={toggle ? 'eye' : 'eye-off'} size={19} />
              </TouchableOpacity>
            </View>
            {passwordError !== '' && <Text style={tw`text-red-500 text-xs mt-1`}>{passwordError}</Text> }

            <TouchableOpacity onPress={() => navigation.navigate('forgot')} style={tw`flex items-end mt-2`}>
              <Text style={tw`text-[#00ACEE]`}>Forgot Password?</Text>

            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          // onPress={() => navigation.navigate('BottomNavigation')}
          onPress={ handleLogin}
          style={[tw`bg-[#00ACEE] rounded-md mt-4`, styles.button]}>
          <Text style={tw`text-center  p-1.5 text-lg text-white font-bold`}>Login</Text>
        </TouchableOpacity>
        <View style={tw`flex flex-row items-center gap-x-1 mt-4`}>
          <View style={styles.or}></View>
          <Text >Or</Text>
          <View style={styles.or}></View>
        </View>
        <View style={[tw`flex flex-row items-center bg-[#000] rounded-md mt-4`, styles.button]}>
          <Image source={require('../assets/google.png')} style={tw`w-6 h-6 ml-2`} />
          <TouchableOpacity
            // onPress={() => navigation.navigate('BottomNavigation')}
            onPress={() => { }}
            style={tw``}>
            <Text style={tw`  p-1.5 pl-18 text-lg text-white font-bold`}>Continue With Google</Text>
          </TouchableOpacity>
        </View>


        <View style={tw`flex flex-row items-center gap-x-2 justify-center mt-10`}>
          <View style={styles.lin}></View>
          <Text style={tw`text-gray-500`}>Don't Have An Account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={tw`text-[#00ACEE]`}>SignUp</Text>
          </TouchableOpacity>
          <View style={styles.lin}></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 2,
    paddingTop: 12,
  },
  lin: {
    width: 40,
    backgroundColor: 'gray',
    height: 0.8,
  },
  button: {
    
    shadowColor: '#BFBFBF', // Shadow color (light gray)
    shadowOffset: { width: 3, height: 3 }, // Shadow offset
    shadowOpacity: 1, // Shadow opacity
    shadowRadius: 5, // Shadow blur radius
  },
  input: {
    boxShadow: 'inset 4px 4px 4px rgba(104, 123, 158, 0.2), inset -4px -4px 4px rgba(255, 255, 255, 0.25)',
    border: '0.5px solid rgba(227, 237, 247, 1)',
  },
  edit: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
  dropdown: {
    height: 48,
    // marginTop: 8,
    boxShadow: 'inset 4px 4px 4px rgba(104, 123, 158, 0.2), inset -4px -4px 4px rgba(255, 255, 255, 0.25)',
    border: '0.5px solid rgba(227, 237, 247, 1)',
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'relative',
    left: -25,
    top: -30,
    backgroundColor: 'transparent',


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
    height: 16,
  },
  red: {
    backgroundColor: 'red',

    width: 1,
    height: 16,
  },
  or: {
    backgroundColor: 'gray',
    flexGrow: 1,
    height: 1,
  }
});