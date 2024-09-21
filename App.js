import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import { User, Settings, Search, Film } from 'lucide-react-native';
import { AuthProvider } from './src/context/AuthContext';

import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';
import UserScreen from './src/screens/UserScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import SearchScreen from './src/screens/SearchScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MovieStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f5f5f5',
          
        },
        headerTintColor: '#333',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerShown: false,
      }}
    >
      <Stack.Screen 
        name="MovieList" 
        component={HomeScreen} 
        options={{ title: 'Películas' }}
      />
      <Stack.Screen 
        name="Detail" 
        component={DetailScreen} 
        options={({ route }) => ({ title: route.params.movie.title })}
      />
    </Stack.Navigator>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f5f5f5',
        },
        headerTintColor: '#333',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let icon;

          if (route.name === 'Home') {
            icon = <Film color={color} size={size} />;
          } else if (route.name === 'Search') {
            icon = <Search color={color} size={size} />;
          } else if (route.name === 'User') {
            icon = <User color={color} size={size} />;
          } else if (route.name === 'Settings') {
            icon = <Settings color={color} size={size} />;
          }

          return icon;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={MovieStack} options={{ headerShown: false }} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="User" component={UserScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Auth" component={AuthStack} />
          <Stack.Screen name="Main" component={MainTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}
