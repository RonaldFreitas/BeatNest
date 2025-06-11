import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const VerifyEmailScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/favicon.png')}
        style={styles.image}
      />
      <Text style={styles.title}>Verifique seu e-mail</Text>
      <Text style={styles.description}>
        Enviamos um link de verificação para seu e-mail. Clique no link para confirmar sua conta.
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Voltar para o Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default VerifyEmailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#222',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 32,
    color: '#555',
  },
  button: {
    backgroundColor: '#3D8BFD',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});