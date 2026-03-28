import React from "react";

const MovieCard = () => {
    return(

        <div className="container-row text-center mt-5">
            <ul className="row justify-content-center">
                <div className="card" style={{width: 200}}>
                    <img src="https://static.posters.cz/image/1300/153628.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Titulo de la pelicula</h5>
                        <p className="card-text">Categoría</p>
                        <p className="card-text">Duración</p>
                        <a href="#" className="btn btn-primary">Link a la pelicula</a>
                    </div>
                </div>
            </ul>
        </div>
    )
}

export default MovieCard;