import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Logo */}
        <Text style={styles.logo}>★ BeatNest</Text>

        {/* Novo Álbum */}
        <View style={styles.albumHighlight}>
          <Text style={styles.albumLabel}>Novo Álbum</Text>
          <Text style={styles.albumTitle}>Happier Than Ever</Text>
          <Text style={styles.albumArtist}>Billie Eilish</Text>
          <Image
            source={{ uri: 'https://uploads.metroimg.com/wp-content/uploads/2019/03/29174838/billie-eilish-cover.jpg' }}
            style={styles.albumImage}
          />
        </View>

        {/* Tabs */}
        <View style={styles.tabs}>
          {['Novas', 'Vídeos', 'Artista', 'Podcasts'].map(tab => (
            <TouchableOpacity key={tab}>
              <Text style={styles.tab}>{tab}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Cards de Música */}
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <Image
              source={{ uri: 'https://m.media-amazon.com/images/I/7142A60vpNS._UF1000,1000_QL80_.jpg' }}
              style={styles.cardImage}
            />
            <Text style={styles.cardTitle}>Happier Than Ever</Text>
            <Text style={styles.cardArtist}>Billie Eilish</Text>
          </View>
          <View style={styles.card}>
            <Image
              source={{ uri: 'https://assets.vogue.com/photos/6491c6d543823e841f8c2fc9/1:1/w_1424,h_1424,c_limit/cid_f_lj02spbw0-3.jpeg' }}
              style={styles.cardImage}
            />
            <Text style={styles.cardTitle}>Billie Eilish</Text>
            <Text style={styles.cardArtist}>Armani White</Text>
          </View>
        </View>

        {/* Playlist */}
        <View style={styles.playlist}>
          <Text style={styles.playlistTitle}>Playlist</Text>
          <Text style={styles.song}>• Bad Guy - Billie Eilish</Text>
          <Text style={styles.song}>• Harry’s House - Harry Styles</Text>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <Text style={styles.navItem}>🏠</Text>
        <Text style={styles.navItem}>🔍</Text>
        <Text style={styles.navItem}>🎵</Text>
        <Text style={styles.navItem}>👤</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  scrollContainer: {
    padding: 16,
    paddingBottom: 100,
  },
  logo: {
    fontSize: 28,
    color: '#00FFFF',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  albumHighlight: {
    backgroundColor: '#0ff',
    borderRadius: 20,
    padding: 16,
    position: 'relative',
    marginBottom: 20,
  },
  albumLabel: {
    color: '#000',
    fontWeight: '600',
  },
  albumTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  albumArtist: {
    fontSize: 16,
  },
  albumImage: {
    position: 'absolute',
    right: 10,
    top: -20,
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  tab: {
    color: '#fff',
    fontWeight: '600',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    width: '48%',
  },
  cardImage: {
    width: '100%',
    height: 140,
    borderRadius: 10,
    marginBottom: 8,
  },
  cardTitle: {
    color: '#fff',
    fontWeight: 'bold',
  },
  cardArtist: {
    color: '#ccc',
  },
  playlist: {
    marginBottom: 20,
  },
  playlistTitle: {
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  song: {
    color: '#bbb',
    marginBottom: 4,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 60,
    backgroundColor: '#0ff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  navItem: {
    fontSize: 24,
  },
});
