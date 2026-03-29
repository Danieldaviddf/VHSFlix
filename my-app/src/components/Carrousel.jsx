import React from "react";

const Carrousel = ({ movies }) => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      
      <div className="carousel-inner">
        {movies.map((item, index) => (
          
          <div
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            key={item.id}
          >
            <img src={`https://image.tmdb.org/t/p/w780/${item.poster_path}`} className="d-block w-100"  style={{ height: "700px", objectFit: "contain" }} alt={item.title} />

            <div className="carousel-caption d-none d-md-block">
              <h5>{item.title}</h5>
              <p>{item.release_date}</p>
            </div>
          </div>

        ))}
      </div>

      <button
        className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon btn btn-dark"></span>
      </button>

      <button
        className="carousel-control-next" type="button"data-bs-target="#carouselExampleCaptions" data-bs-slide="next"
      >
        <span className="carousel-control-next-icon btn btn-dark" ></span>
      </button>
    </div>
  );
};

export default Carrousel;