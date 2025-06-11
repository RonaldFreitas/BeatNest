import { View, Text, StyleSheet } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Usuário:</Text>
      <Text style={styles.value}>exemplo@usuario.com</Text>
      <Text style={styles.label}>Plano:</Text>
      <Text style={styles.value}>Gratuito</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  value: {
    marginBottom: 10,
    fontSize: 16,
  },
});