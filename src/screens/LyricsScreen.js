import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function LyricsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.lyrics}>
        Aqui vai a letra da música...
        {'\n'}Continuação da letra...
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  lyrics: {
    fontSize: 16,
    lineHeight: 24,
  },
});