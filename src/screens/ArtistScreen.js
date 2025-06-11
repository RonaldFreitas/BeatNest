import { View, Text, Image, StyleSheet } from 'react-native';

export default function ArtistScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/icon.png')} style={styles.photo} />
      <Text style={styles.name}>Nome do Artista</Text>
      <Text style={styles.bio}>Biografia breve ou informações do artista...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  photo: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  bio: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
  },
});