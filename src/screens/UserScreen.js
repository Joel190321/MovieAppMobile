import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useAuth } from '../context/AuthContext';

export default function UserScreen({ navigation }) {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      navigation.navigate('Auth');
    } catch (error) {
      console.error(error);
    }
  };

  if (!user) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No has iniciado sesión</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Auth')}>
          <Text style={styles.buttonText}>Ir a Iniciar Sesión</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil de Usuario</Text>
      <Text style={styles.text}>Email: {user.email}</Text>
      <Text style={styles.text}>ID: {user.uid}</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'tomato',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});