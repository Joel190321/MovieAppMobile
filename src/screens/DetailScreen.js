import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

function DetailScreen({ route }) {
  const { movie } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: movie.poster }} style={styles.poster} />
      <View style={styles.info}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.year}>{movie.year}</Text>
        <Text style={styles.director}>Director: {movie.director}</Text>
        <Text style={styles.synopsis}>{movie.synopsis}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  poster: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  info: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  year: {
    fontSize: 18,
    color: '#666',
    marginBottom: 5,
  },
  director: {
    fontSize: 16,
    marginBottom: 10,
  },
  synopsis: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default DetailScreen;