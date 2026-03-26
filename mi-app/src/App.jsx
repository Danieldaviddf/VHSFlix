import React from 'react';

function App() {
  // Aquí puedes simular algunos datos de películas
  const peliculas = [
    { id: 1, titulo: "Terminator", año: 1984 },
    { id: 2, titulo: "Back to the Future", año: 1985 },
    { id: 3, titulo: "RoboCop", año: 1987 }
  ];

  return (
    <div className="app-container">
      <header>
        <h1>vhs<span>flix</span></h1>
      </header>

      <main>
        <section className="hero">
          <h2>Tus clásicos favoritos en un solo lugar</h2>
        </section>

        <div className="movie-list">
          {peliculas.map(pelicula => (
            <div key={pelicula.id} className="movie-card">
              <h3>{pelicula.titulo}</h3>
              <p>{pelicula.año}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
