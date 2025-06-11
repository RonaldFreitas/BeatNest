import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { Ionicons } from '@expo/vector-icons';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState('');

  const handleLogin = async () => {
    setCarregando(true);
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      navigation.replace('MainApp');
    } catch (error) {
      setErro('Email ou senha inválidos.');
    }
    setCarregando(false);
  };

  return (
    <View style={styles.container}>
      <Ionicons name="star-outline" size={64} color="#00FFF7" />
      <Text style={styles.titulo}>Entrar no BeatNest</Text>

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#ccc"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#ccc"
        secureTextEntry
        onChangeText={setSenha}
        value={senha}
      />

      {erro ? <Text style={styles.erro}>{erro}</Text> : null}

      <TouchableOpacity style={styles.botao} onPress={handleLogin} disabled={carregando}>
        {carregando ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.textoBotao}>Entrar</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.link}>Criar conta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    color: '#00FFF7',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  input: {
    width: '100%',
    backgroundColor: '#1a1a1a',
    color: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  botao: {
    backgroundColor: '#00FFF7',
    padding: 15,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  textoBotao: {
    color: '#000',
    fontWeight: 'bold',
  },
  link: {
    color: '#00FFF7',
    marginTop: 20,
  },
  erro: {
    color: 'red',
    marginBottom: 10,
  },
});