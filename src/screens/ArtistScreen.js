import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  FlatList,
  Dimensions,
} from 'react-native';

const albums = [
  { id: '1', title: "Don't Smile at Me", image: require('../../assets/album1.png') },
  { id: '2', title: "When We All Fall Asleep, Where Do We Go?", image: require('../../assets/album2.png') },
  { id: '3', title: 'Happier Than Ever', image: require('../../assets/album3.png') },
];

export default function ArtistScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Banner */}
      <Image
        source={{ uri: 'https://i.pinimg.com/736x/6f/a2/e7/6fa2e74e10e3ef1eeacf66e75dd57bd5.jpg' }}
        style={styles.banner}
      />

      {/* Nome e descrição */}
      <View style={styles.infoBox}>
        <Text style={styles.title}>Billie Eilish</Text>
        <Text style={styles.subtitle}>3 Álbuns, 37 músicas</Text>
        <Text style={styles.bio}>
          Billie Eilish Pirate Baird O’Connell é uma cantora, compositora e musicista americana...
        </Text>
      </View>

      {/* Seção Álbuns */}
      <View style={styles.albumSection}>
        <Text style={styles.sectionTitle}>Álbuns</Text>
        <FlatList
          horizontal
          data={albums}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ gap: 16 }}
          renderItem={({ item }) => (
            <View style={styles.albumCard}>
              <Image source={item.image} style={styles.albumCover} />
              <Text style={styles.albumTitle}>{item.title}</Text>
            </View>
          )}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      {/* Seção Músicas */}
      <Text style={styles.sectionTitle}>Músicas</Text>
      {/* Aqui você pode adicionar a FlatList com músicas, se necessário */}
    </ScrollView>
  );
}

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  banner: {
    width: screenWidth,
    height: 220,
    resizeMode: 'cover',
  },
  infoBox: {
    paddingHorizontal: 20,
    paddingTop: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#ccc',
    marginBottom: 10,
  },
  bio: {
    fontSize: 13,
    color: '#aaa',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    paddingHorizontal: 20,
    marginTop: 25,
    marginBottom: 12,
  },
  albumSection: {
    paddingLeft: 20,
  },
  albumCard: {
    alignItems: 'center',
    width: 120,
  },
  albumCover: {
    width: 100,
    height: 100,
    borderRadius: 12,
    marginBottom: 6,
  },
  albumTitle: {
    fontSize: 12,
    color: '#fff',
    textAlign: 'center',
  },
});
