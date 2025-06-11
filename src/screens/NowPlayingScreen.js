import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

export default function NowPlayingScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.nowPlaying}>Tocando agora</Text>

      <Image
        source={{ uri: 'https://akamai.sscdn.co/uploadfile/letras/albuns/8/6/5/7/2222671715859477.jpg' }}
        style={styles.cover}
      />

      <View style={styles.info}>
        <View style={styles.textInfo}>
          <Text style={styles.title}>Billie Eilish</Text>
          <Text style={styles.artist}>bad guy</Text>
        </View>
        <Feather name="heart" size={22} color="#fff" />
      </View>

      {/* Barra de progresso simulada */}
      <View style={styles.progressBar}>
        <View style={styles.progress} />
      </View>

      <View style={styles.timeRow}>
        <Text style={styles.time}>2:45</Text>
        <Text style={styles.time}>3:15</Text>
      </View>

      {/* Controles */}
      <View style={styles.controls}>
        <Ionicons name="play-skip-back" size={24} color="#fff" />
        <TouchableOpacity style={styles.playButton}>
          <Ionicons name="pause" size={24} color="#000" />
        </TouchableOpacity>
        <Ionicons name="play-skip-forward" size={24} color="#fff" />
      </View>

      {/* Botão para abrir a letra */}
      <TouchableOpacity style={styles.lyricsButton}>
        <Feather name="chevron-up" size={20} color="#fff" />
        <Text style={styles.lyricsText}>Letra</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
    paddingTop: 40,
  },
  nowPlaying: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  cover: {
    width: '100%',
    height: 320,
    borderRadius: 20,
    marginBottom: 20,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  textInfo: {
    flexDirection: 'column',
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  artist: {
    color: '#aaa',
    fontSize: 14,
  },
  progressBar: {
    height: 4,
    backgroundColor: '#333',
    borderRadius: 2,
    marginTop: 10,
  },
  progress: {
    width: '60%', // simulado como 2:45/3:15
    height: 4,
    backgroundColor: '#0ff',
    borderRadius: 2,
  },
  timeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 6,
    marginBottom: 20,
  },
  time: {
    color: '#aaa',
    fontSize: 12,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 20,
  },
  playButton: {
    backgroundColor: '#0ff',
    padding: 16,
    borderRadius: 32,
  },
  lyricsButton: {
    alignItems: 'center',
    marginTop: 10,
  },
  lyricsText: {
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 4,
  },
});
