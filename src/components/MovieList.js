import React from 'react';
import { FlatList } from 'react-native';
import MovieCard from './MovieCard';

function MovieList({ movies, onSelectMovie }) {
  return (
    <FlatList
      data={movies}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <MovieCard movie={item} onPress={() => onSelectMovie(item)} />}
    />
  );
}

export default MovieList;