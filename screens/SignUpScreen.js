import { StyleSheet, Text, View, Dimensions, Animated, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import Icon6 from 'react-native-vector-icons/MaterialIcons'
import Icon from 'react-native-vector-icons/Feather'
import Icon2 from 'react-native-vector-icons/Fontisto'
import Icon3 from 'react-native-vector-icons/Feather'
import Icon4 from 'react-native-vector-icons/Feather'
import Icon5 from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'

const SignUpScreen = () => {
  const navigation = useNavigation();

  const [isFocus, setFocus] = useState(false);
  const [isFocusEmail, setFocusEmail] = useState(false);
  const [isFocusPass, setFocusPass] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [value, setValue] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [visible, setVisible] = useState(false);

  const [userError, setUserError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');


  const handleSignUp = () => {
    if (userError === '' || emailError === '' || passwordError === '') {
      setUserError('Please username is required');
      setEmailError('Please email is required');
      setPasswordError('Password is required');
    } else {
      navigation.navigate('Login')
    }


  }


  const labelAnimation = new Animated.Value(isFocus || name !== '' ? 1 : 0);

  const translateY = labelAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [isFocus ? -10 : 8, isFocus ? -10 : 0],
  });

  const fontSize = labelAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [16, 12],
  });


  const handleToggleConfirm = () => {
    setVisible(!visible);
  }


  const handleToggle = () => {
    setToggle(!toggle);
  }


  const screenWidth = Dimensions.get('window').width
  return (
    <SafeAreaView style={[{ width: screenWidth }, tw`flex-1 bg-[#fff]`]}>
      <ScrollView  showsVerticalScrollIndicator={false}>
        <View style={tw`pt-2 px-4 pb-15`}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={tw`mt-4`}>
            <Icon6 color="#00ACEE" name='arrow-back' size={20}/>
          </TouchableOpacity>
          <View style={tw`flex flex-col items-center `}>
            <Image style={tw`h-15 w-20  `} source={require('../assets/logo.png')}/>
            <Image source={require('../assets/Inserviz.png')} style={tw`w-[12rem] h-[2rem] mt-10`} />
          </View>
          <View style={tw`mt-6`}>
            <Text style={tw`text-[#00ACEE] text-center text-lg`}>Please Sign Up to join our community</Text>
            <View style={tw`mt-2 `}>
              <View style={[tw`flex flex-row gap-x-1 mt-4 items-center border
           border-[#00ACEE] border-opacity-35  rounded-md`,
              styles.dropdown, isFocus && tw`border border-[#00ACEE]`, userError && tw`border-red-500`]}>
                <Icon name='user' size={19} />
                <View style={userError ? styles.red : styles.line}></View>

                {/* <View style={[styles.label, { backgroundColor: isFocus ? 'white' : 'transparent' }]}>
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
                    setUserError(''); // Clear the error when The user types in sth
                  }}
                  onFocus={() => setFocus(true)}
                  onBlur={() => setFocus(false)}
                  style={tw`w-[19.5rem]`}
                />
              </View>
              {userError !== '' && <Text style={tw`text-red-500 text-xs mt-1`}>{userError}</Text>}

              <View style={[tw`flex flex-row gap-x-1 mt-4 items-center border
           border-[#00ACEE] border-opacity-35  rounded-md`,
              styles.dropdown, isFocusEmail && tw`border border-[#00ACEE]`, emailError && tw`border-red-500`]}>
                <Icon2 name='email' size={19} />
                <View style={emailError ? styles.red : styles.line}></View>
                {/* <View style={[styles.label, { backgroundColor: isFocusEmail ? 'white' : 'transparent' }]}>
                <Animated.Text style={[styles.label1, { transform: [{ translateY }], fontSize }]}>
                  Email
                </Animated.Text>
              </View> */}
                <TextInput
                  placeholder="Email"
                  placeholderTextColor="#000"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailError(''); // clear input whenever the user starts typing
                  }}
                  onFocus={() => setFocusEmail(true)}
                  onBlur={() => setFocusEmail(false)}
                  style={[tw`w-[19.5rem]`, styles.input]}
                />
              </View>
              {emailError !== '' && <Text style={tw`text-red-500  text-xs mt-1`}>{emailError}</Text>}
              <View style={[tw`flex flex-row gap-x-1 items-center border
           border-[#00ACEE] border-opacity-35 mt-4 rounded-md`, styles.dropdown,
              isFocusPass && tw`border border-[#00ACEE]`, passwordError && tw`border-red-500`]}>
                <Icon3 name='lock' size={19} />
                <View style={styles.line}></View>
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
                    setPasswordError(''); // clear password error when user starts typing
                  }}
                  onFocus={() => setFocusPass(true)}
                  onBlur={() => setFocusPass(false)}
                  style={tw`w-[18.5rem]`}
                />
                <TouchableOpacity onPress={handleToggle}>
                  <Icon5 name={toggle ? 'eye' : 'eye-off'} size={19} />
                </TouchableOpacity>
              </View>
              {passwordError !== '' && <Text style={tw`text-red-500 mt-1 text-xs`}>{passwordError}</Text>}
              <View style={[tw`flex flex-row gap-x-1 items-center border
           border-[#00ACEE] border-opacity-35 mt-4 rounded-md`, styles.dropdown, isConfirm && tw`border border-[#00ACEE]`]}>
                <Icon3 name='lock' size={19} />
                <View style={passwordError ? styles.red : styles.line}></View>
                {/* <View style={[styles.label, { backgroundColor: isConfirm ? 'white' : 'transparent' }]}>
                <Animated.Text style={[styles.label1, { transform: [{ translateY }], fontSize }]}>
                  Confirm Password
                </Animated.Text>
              </View> */}
                <TextInput
                  placeholder="Confrim Password"
                  placeholderTextColor="#000"
                  value={confirm}
                  secureTextEntry={!visible}
                  autoCapitalize='none'
                  autoCorrect={false}

                  onChange={(e) => setConfirm(e.target.value)}
                  onFocus={() => setIsConfirm(true)}
                  onBlur={() => setIsConfirm(false)}
                  style={tw`w-[18.5rem]`}
                />
                <TouchableOpacity onPress={handleToggleConfirm}>
                  <Icon5 name={visible ? 'eye' : 'eye-off'} size={19} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <TouchableOpacity
            onPress={handleSignUp}
            style={[tw`bg-[#00ACEE] rounded-md mt-6`, styles.button]}>
            <Text style={tw`text-center  p-1.5 text-lg text-white font-bold`}>Sign Up</Text>
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

          <View style={tw`flex flex-row items-center gap-x-2 justify-center mt-6`}>
            <View style={styles.lin}></View>
            <Text style={tw`text-gray-500`}>Already Have An Account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={[tw`text-[#00ACEE] `, styles.login]}>Login</Text>
            </TouchableOpacity>
            <View style={styles.lin}></View>
          </View>
          <View style={tw`pt-6 flex flex-col items-center`}>
            <View style={tw`flex flex-row items-center `}>
              <Text style={tw`text-xs`}>By signing up to</Text>
              <Text style={tw`text-[#00ACEE] pl-1 text-xs`}>Inserviz</Text>
              <Text style={tw`pl-1 text-xs`}>you acknowledge, and agree to</Text>



            </View>
            <View style={tw`flex flex-row items-center `}>
              <Text style={tw`text-xs`}>our </Text>
              <TouchableOpacity>
                <Text style={tw`text-[#00ACEE] text-xs `}> Privacy Policy</Text>
              </TouchableOpacity>
              <Text style={tw`pl-1 text-xs`}>which outlines how we collect, use  </Text>
            </View>
            <Text style={tw`text-xs`}> and protect your private information</Text>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUpScreen

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
    // justifyContent: 'center',
    // alignItems: 'center',
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
  login:{
    fontSize:14
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
  red: {
    backgroundColor: 'red',

    width: 1,
    height: 16,
  },
  line: {
    backgroundColor: '#00acee',
    opacity: 0.3,
    width: 1,
    height: 16,
  },
  or: {
    backgroundColor: 'gray',
    flexGrow: 1,
    height: 1,
  }
});