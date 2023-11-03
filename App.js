import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import BottomNavigation from './navigation/BottomNavigation';
import Notifications from './screens/Notifications';
import MoreScreen from './screens/MoreScreen';
import UserScreen from './screens/UserScreen';
import EditScreen from './screens/EditScreen';
import HelpScreen from './screens/HelpScreen';
import SettingsScreen from './screens/SettingsScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import PreferedFieldScreen from './screens/PreferedFieldScreen';
import SignUpScreen from './screens/SignUpScreen';
import LoginScreen from './screens/LoginScreen';
import EarningScreen from './screens/EarningScreen';
import ContactScreen from './screens/ContactScreen';
import ForgotScreen from './screens/ForgotScreen';
import VerifyScreen from './screens/VerifyScreen';
import NewPassScreen from './screens/NewPassScreen';
import AIScreen from './screens/AIScreen';
import SkillScreen from './screens/SkillScreen';
import AboutScreen from './screens/AboutScreen';
import DivideScreen from './screens/DivideScreen';
import InprovScreen from './screens/InprovScreen';


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen name='Onboarding' component={OnboardingScreen} options={{headerShown:false, tabBar:'visible'}}/>
        <Stack.Screen name="BottomNavigation"
         component={BottomNavigation} options={{headerShown:false, tabBar:'visible'}}/>
        <Stack.Screen name="Notifications" component={Notifications} options={{headerShown:false}}/>
       
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name="PreferedField" component={PreferedFieldScreen} options={{headerShown:false}}/>
        <Stack.Screen name="More" component={MoreScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Profile" component={UserScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Edit" component={EditScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Help" component={HelpScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Settings" component={SettingsScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Earnings" component={EarningScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Contact" component={ContactScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="forgot" component={ForgotScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Verify" component={VerifyScreen} options={{ headerShown: false }} />
        <Stack.Screen name="NewPass" component={NewPassScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AI" component={AIScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Skill" component={SkillScreen} options={{ headerShown: false }} />
        <Stack.Screen name="About" component={AboutScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Divide" component={DivideScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Inprov" component={InprovScreen} options={{ headerShown: false }} />

      </Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
