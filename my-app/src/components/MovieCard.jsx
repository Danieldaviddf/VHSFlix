import React from "react";

const MovieCard = ({ movies }) => {
  return (
    <div className="container-fluid bg-dark">
      <ul className="p-0 m-0">
        {movies.map((item, index) => (
          <li key={index} className="movie-item">
            <div className="movie-card">
              <div className="movie-card-body">
            
                <img src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}alt={item.title}/>
             

                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                   <p className="fecha">{item.release_date}</p>
                   <div> <p className="votacion">⭐ {(item.vote_average / 2).toFixed(1)} / 5</p></div>
               
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCard;