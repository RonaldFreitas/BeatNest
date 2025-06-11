import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (!email || !password) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }
    try {
      setLoading(true);
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
      navigation.replace('MainApp');
    } catch (error) {
      Alert.alert('Erro', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>BeatNest</Text>
      <Text style={styles.title}>Cadastre-se para começar a escutar</Text>

      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Senha"
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {loading ? (
        <ActivityIndicator size="large" color="#00d4ff" />
      ) : (
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>Já tem conta? Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#00d4ff',
    marginBottom: 20,
  },
  title: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#1e1e1e',
    color: '#fff',
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#00d4ff',
    paddingVertical: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
  },
  link: {
    color: '#ccc',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
});