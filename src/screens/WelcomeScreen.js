import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function WelcomeScreen({ navigation }) {
  return (
    <LinearGradient colors={['#1FE0B0', '#000']} style={styles.container}>
      <View style={styles.content}>
        <Ionicons name="star-outline" size={64} color="#00FFF7" />

        <Text style={styles.text}>
          Milhões de músicas{'\n'}de forma gratuita.
        </Text>

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => navigation.navigate('Register')}>
          <Text style={styles.primaryText}>Cadastrar gratuitamente</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.secondaryText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    marginTop: '30%',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  icon: {
    width: 80,
    height: 80,
    marginBottom: 30,
  },
  text: {
    fontSize: 22,
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 40,
  },
  primaryButton: {
    width: width * 0.85,
    backgroundColor: '#1FE0B0',
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 12,
  },
  primaryText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  secondaryButton: {
    width: width * 0.85,
    borderColor: '#fff',
    borderWidth: 1,
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
  },
  secondaryText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
