const moviesData = [
    {
      id: 1,
      title: "El Padrino",
      year: 1972,
      director: "Francis Ford Coppola",
      poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,704,1000_AL_.jpg",
      synopsis: "El patriarca de una organización criminal transfiere el control de su clandestino imperio a su reacio hijo."
    },
    {
      id: 2,
      title: "Pulp Fiction",
      year: 1994,
      director: "Quentin Tarantino",
      poster: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,686,1000_AL_.jpg",
      synopsis: "Las vidas de dos mafiosos, un boxeador, la esposa de un gángster y un par de bandidos se entrelazan en cuatro historias de violencia y redención."
    },
    {
      id: 3,
      title: "El Señor de los Anillos: El Retorno del Rey",
      year: 2003,
      director: "Peter Jackson",
      poster: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
      synopsis: "Gandalf y Aragorn lideran el Mundo de los Hombres contra el ejército de Sauron para distraer su atención de Frodo y Sam, quienes se aproximan al Monte del Destino con el Anillo Único."
    },
    {
      id: 4,
      title: "Forrest Gump",
      year: 1994,
      director: "Robert Zemeckis",
      poster: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
      synopsis: "Las presidencias de Kennedy y Johnson, la guerra de Vietnam, el escándalo Watergate y otros eventos históricos se desarrollan a través de la perspectiva de un hombre de Alabama con un coeficiente intelectual de 75."
    },
    {
      id: 5,
      title: "Inception",
      year: 2010,
      director: "Christopher Nolan",
      poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
      synopsis: "A un ladrón que roba secretos corporativos a través del uso de la tecnología de compartir sueños, se le da la tarea inversa de plantar una idea en la mente de un CEO."
    },
    {
      id: 6,
      title: 'The last of us 2',
      year: 2020,
      director: 'Ellie Williams',
      poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmVBYCLnstT5FsfTcRjo5kWZXnSLe1dobupw&s',
      synopsis: 'The Last of Us Part II es un videojuego de terror, acción y aventuras de 2020 desarrollado por Naughty Dog y publicado por Sony Interactive Entertainment para PlayStation'
    },
  ];
  
  export const fetchMovies = () => {
    // Simulamos un retraso de red
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(moviesData);
      }, 1000);
    });
  };