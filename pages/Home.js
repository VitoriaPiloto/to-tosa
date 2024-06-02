import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const DummyScreen = ({ title }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{title}</Text>
  </View>
);

const HomeScreen = () => <DummyScreen title="Home" />;
const SettingsScreen = () => <DummyScreen title="Settings" />;
const ProfileScreen = () => <DummyScreen title="Profile" />;

const Tab = createBottomTabNavigator(); // Use the destructured Tab object

const App = () => (
  <NavigationContainer>
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#FF5579',
        tabBarInactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="home" size={24} color={tintColor} />
        ),
      }} />
      <Tab.Screen name="Settings" component={SettingsScreen} options={{
        tabBarLabel: 'Settings',
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="settings" size={24} color={tintColor} />
        ),
      }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="person" size={24} color={tintColor} />
        ),
      }} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 24,
    color: '#FF5579',
  },
});
