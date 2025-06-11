import { useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';

export default function LogoutScreen({ navigation }) {
  useEffect(() => {
    const logout = async () => {
      try {
        await signOut(auth);
        navigation.replace('Login');
      } catch (error) {
        console.error('Erro ao sair:', error);
      }
    };

    logout();
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#000" />
      <Text>Saindo...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
