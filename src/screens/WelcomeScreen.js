import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Music App!</Text>
      <Button title="Entrar" onPress={() => navigation.navigate('Login')} />
      <Button title="Cadastrar" onPress={() => navigation.navigate('Register')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
});