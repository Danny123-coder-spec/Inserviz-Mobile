import { StyleSheet, Text, View,StatusBar } from 'react-native'
import React from 'react'
import Onboarding from '../components/Oboarding'
import Swiper from 'react-native-swiper'

const OnboardingScreen = () => {
  return (
    <>
     <Swiper >
     <Onboarding 
     backgroundImage={require('../assets/front.jpg')}
     style={styles.overlay}
    //  backgroundImage={{uri :'https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=400&q=60'}}
     text='Discover, Network, and Achieve Excellence with Highly Skilled Professionals on GigConnect'
     />

<Onboarding 
  
     backgroundImage={{uri :'https://images.unsplash.com/photo-1664575600796-ffa828c5cb6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'}}
     text='Explore Exciting Career Prospects Tailored Just for You.'
     />

<Onboarding 
     backgroundImage={require('../assets/maame.jpg')}
    //  backgroundImage={{uri :'https://images.unsplash.com/photo-1664575599730-0814817939de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=400&q=60'}}
     text='Begin Your Journey to Achievement '
     signUpButtonSyle='bg-white flex  items-center p-2 rounded-md mt-3 '
     signIn='Sign up'
     loginInButtonSyle=' flex  items-center p-2 rounded-md border-[#00ACEE] mt-3 border-2' 
     login='Log in'
     />

     </Swiper>
    </>
  )
}

export default OnboardingScreen

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor:'rgba(0, 0, 0, 0.5)', 
    justifyContent:'center',
    alignItems: 'center',
  },
})