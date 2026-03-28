import React from "react";

const MovieCard = ({ movies }) => {
  return (
    <div className="container">
      <ul className=" row justify-content-center list-unstyled">
        {movies.map((item, index) => (
          <li key={index} className="col-3 mb-4 list-unstyled">
            <div className="movie-card row">
              <div className="movie-card-body">
                <video width="200" controls>
                  <source
                    src={`https://archive.org/download/${item.identifier}/${item.identifier}.mp4`}
                    type="video/mp4"
                  />
                </video>

                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
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