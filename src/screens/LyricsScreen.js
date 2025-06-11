import { View, Text, ScrollView, StyleSheet, Image, Dimensions } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

const screenHeight = Dimensions.get('window').height;

export default function LyricsScreen() {
  return (
    <View style={styles.container}>
      {/* Fundo com imagem escura */}
      <Image
        source={{ uri: 'https://link-da-imagem-da-billie.jpg' }}
        style={styles.backgroundImage}
        blurRadius={10}
      />

      <ScrollView contentContainerStyle={styles.lyricsContainer}>
        <Text style={styles.title}>Bad Guys</Text>

        {/* Letras (exemplo com destaque na linha atual) */}
        <Text style={styles.sectionTitle}>[Verso 1]</Text>
        <Text style={styles.lyricLineMuted}>White shirt now red, my bloody nose</Text>
        <Text style={styles.lyricLineMuted}>Sleepin', you're on your tippy toes</Text>
        <Text style={styles.lyricLineMuted}>Creepin' around like no one knows</Text>
        <Text style={styles.lyricLineMuted}>Think you're so criminal</Text>
        <Text style={styles.lyricLineMuted}>Bruises on both my knees for you</Text>
        <Text style={styles.lyricLineMuted}>Say thank you or please</Text>
        <Text style={styles.lyricLineMuted}>I do what I want when I'm wanting to</Text>
        <Text style={styles.lyricLineCurrent}>My soul? So cynical</Text>

        <Text style={styles.sectionTitle}>[Pré-Refrão]</Text>
        <Text style={styles.lyricLineMuted}>So you're a tough guy</Text>
        <Text style={styles.lyricLineMuted}>Like it really rough guy</Text>
        {/* ... continue conforme necessário */}
      </ScrollView>

      {/* Player fixo na parte inferior */}
      <View style={styles.player}>
        <View style={styles.songInfo}>
          <Image
            source={{ uri: 'https://link-avatar-billie.jpg' }}
            style={styles.avatar}
          />
          <View>
            <Text style={styles.artist}>Billie Eilish</Text>
            <Text style={styles.song}>bad guy</Text>
          </View>
          <Feather name="heart" size={20} color="#fff" style={{ marginLeft: 'auto' }} />
        </View>

        <View style={styles.timeline}>
          <Text style={styles.time}>2:45</Text>
          <Text style={styles.time}>3:15</Text>
        </View>

        <View style={styles.controls}>
          <Ionicons name="play-skip-back" size={26} color="#fff" />
          <View style={styles.playButton}>
            <Ionicons name="play" size={26} color="#000" />
          </View>
          <Ionicons name="play-skip-forward" size={26} color="#fff" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  lyricsContainer: {
    paddingTop: 80,
    paddingHorizontal: 20,
    paddingBottom: 200,
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    color: '#0ff',
    fontWeight: '600',
    marginTop: 16,
    marginBottom: 6,
  },
  lyricLineMuted: {
    color: '#aaa',
    fontSize: 16,
    lineHeight: 26,
  },
  lyricLineCurrent: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 26,
  },
  player: {
    position: 'absolute',
    bottom: 0,
    padding: 16,
    backgroundColor: 'rgba(0,0,0,0.8)',
    width: '100%',
  },
  songInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 20,
    marginRight: 10,
  },
  artist: {
    color: '#fff',
    fontWeight: 'bold',
  },
  song: {
    color: '#aaa',
    fontSize: 14,
  },
  timeline: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    marginBottom: 10,
  },
  time: {
    color: '#aaa',
    fontSize: 12,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  playButton: {
    backgroundColor: '#0ff',
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
