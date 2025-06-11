import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const topMusics = [
  { id: '1', title: 'How You Like That', artist: 'BLACKPINK', duration: '3:01', image: require('../../assets/music1.png') },
  { id: '2', title: 'As It Was', artist: 'Harry Styles', duration: '2:47', image: require('../../assets/music2.png') },
  { id: '3', title: 'Story of My Life', artist: 'One Direction', duration: '4:05', image: require('../../assets/music3.png') },
  { id: '4', title: 'Not Like Us', artist: 'Kendrick Lamar', duration: '4:34', image: require('../../assets/music4.png') },
];

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      {/* Top profile */}
      <View style={styles.profileBox}>
        <Image
          source={{ uri: 'https://static.vecteezy.com/ti/fotos-gratis/p2/3491968-imagem-retrato-de-mulher-linda-encantadora-close-up-gratis-foto.jpg' }}
          style={styles.avatar}
        />
        <View style={styles.nameBox}>
          <Text style={styles.name}>Amanda</Text>
          <Text style={styles.email}>amanda@gmail.com</Text>
        </View>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editText}>Editar</Text>
        </TouchableOpacity>
      </View>

      {/* Stats */}
      <View style={styles.statsBox}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>566</Text>
          <Text style={styles.statLabel}>Seguidores</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>766</Text>
          <Text style={styles.statLabel}>Seguindo</Text>
        </View>
      </View>

      {/* Músicas mais escutadas */}
      <Text style={styles.sectionTitle}>Músicas mais escutadas</Text>
      <FlatList
        data={topMusics}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.musicItem}>
            <Image source={item.image} style={styles.musicImage} />
            <View style={styles.musicInfo}>
              <Text style={styles.musicTitle}>{item.title}</Text>
              <Text style={styles.musicArtist}>{item.artist}</Text>
            </View>
            <Text style={styles.musicDuration}>{item.duration}</Text>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 20,
  },
  profileBox: {
    alignItems: 'center',
    marginTop: 30,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  nameBox: {
    marginTop: 10,
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
  email: {
    fontSize: 14,
    color: '#ccc',
  },
  editButton: {
    position: 'absolute',
    right: 0,
    top: 0,
    backgroundColor: '#1FE0B0',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  editText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 12,
  },
  statsBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    color: '#aaa',
    fontSize: 13,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 16,
  },
  musicItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },
  musicImage: {
    width: 48,
    height: 48,
    borderRadius: 8,
  },
  musicInfo: {
    flex: 1,
    marginLeft: 12,
  },
  musicTitle: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  musicArtist: {
    color: '#aaa',
    fontSize: 12,
  },
  musicDuration: {
    color: '#999',
    fontSize: 12,
  },
});
