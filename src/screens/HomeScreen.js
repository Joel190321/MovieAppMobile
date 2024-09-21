import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import MovieList from '../components/MovieList';
import { fetchMovies } from '../services/api';

function HomeScreen({ navigation }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMovies = async () => {
      const data = await fetchMovies();
      setMovies(data);
      setLoading(false);
    };
    loadMovies();
  }, []);

  if (loading) {
    return (
       <View style={styles.centered}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
     
    );
  }

  return (
    <View style={styles.container}>
      <MovieList movies={movies} onSelectMovie={(movie) => navigation.navigate('Detail', { movie })} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
});

export default HomeScreen;