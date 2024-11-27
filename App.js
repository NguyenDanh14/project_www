import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SmartWatchScreen from './Screens/SmartWatchScreen';
import TabletScreen from './Screens/TabletScreen';
import SmartWatchAppleScreen from './Screens/SmartWatchAppleScreen';
import TabletAppleScreen from './Screens/TabletAppleScreen';
import TabletLenovoScreen from './Screens/TabletLenovoScreen';
import TabletSamsungScreen from './Screens/TabletSamsungScreen';
import TabletHonorScreen from './Screens/TabletHonorScreen';
import MoreTVScreen from './Screens/MoreTVScreen';
import MoreCameraScreen from './Screens/MoreCameraScreen';
import MoreEarbudScreen from './Screens/MoreEarbudScreen';
import MoreImacScreen from './Screens/MoreImacScreen';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='TabletScreen' screenOptions={{headerShown: false}}>
          <Stack.Screen name='SmartWatchScreen' component={SmartWatchScreen}/>
          <Stack.Screen name='TabletScreen' component={TabletScreen}/>
          <Stack.Screen name='SmartWatchAppleScreen' component={SmartWatchAppleScreen}/>
          <Stack.Screen name='TabletAppleScreen' component={TabletAppleScreen}/>
          <Stack.Screen name='TabletLenovoScreen' component={TabletLenovoScreen}/>
          <Stack.Screen name='TabletSamsungScreen' component={TabletSamsungScreen}/>
          <Stack.Screen name='TabletHonorScreen' component={TabletHonorScreen}/>
          <Stack.Screen name='MoreTVScreen' component={MoreTVScreen}/>
          <Stack.Screen name='MoreCameraScreen' component={MoreCameraScreen}/>
          <Stack.Screen name='MoreEarbudScreen' component={MoreEarbudScreen}/>
          <Stack.Screen name='MoreImacScreen' component={MoreImacScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}