import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Detail from "./components/Detail"
import Home from "./components/Home"
import Liked from "./components/Liked"
import Profile from "./components/Profile"
import colors from "./assets/colors/colors"
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

Entypo.loadFont();
MaterialCommunityIcons.loadFont();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: colors.orange,
        tabBarInactiveTintColor: colors.gray,
        tabBarShowLabel: false
      }}
    >
      <Tab.Screen name='Home' component={Home} options={{
        headerShown: false,
        tabBarIcon: ({ color }) => (
          <Entypo name="home" size={32} color={color} />
        ),
      }}
      />
      <Tab.Screen name='Liked' component={Liked} options={{
        headerShown: false,
        tabBarIcon: ({ color }) => (
          <Entypo name="heart" size={32} color={color} />
        ),
      }} />
      <Tab.Screen name='Profile' component={Profile} options={{
        headerShown:false,
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" size={32} color={color} />
        ),
      }} />
    </Tab.Navigator >
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='TabNavigator' component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name='Detail' component={Detail} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.white,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  }
})

export default App