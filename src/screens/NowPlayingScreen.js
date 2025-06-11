import { View, Text, StyleSheet, Image } from 'react-native';

export default function NowPlayingScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/adaptive-icon.png')} style={styles.cover} />
      <Text style={styles.title}>Nome da Música</Text>
      <Text style={styles.artist}>Nome do Artista</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  cover: {
    width: 250,
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  artist: {
    fontSize: 18,
    color: '#777',
  },
});