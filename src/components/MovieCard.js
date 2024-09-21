import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

function MovieCard({ movie, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <Image source={{ uri: movie.poster }} style={styles.poster} />
        <View style={styles.info}>
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.year}>{movie.year}</Text>
          <Text style={styles.director}>{movie.director}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    
  },
  poster: {
    width: 100,
    height: 150,
  },
  info: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  year: {
    fontSize: 16,
    color: '#666',
    marginBottom: 3,
  },
  director: {
    fontSize: 14,
    color: '#888',
  },
});

export default MovieCard;