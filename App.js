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


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="BottomNavigation" component={BottomNavigation} options={{headerShown:false, tabBar:'visible'}}/>
        <Stack.Screen name="Notifications" component={Notifications} options={{headerShown:false}}/>
        <Stack.Screen name="More" component={MoreScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Profile" component={UserScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Edit" component={EditScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Help" component={HelpScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Settings" component={SettingsScreen} options={{headerShown:false}}/>
   
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
