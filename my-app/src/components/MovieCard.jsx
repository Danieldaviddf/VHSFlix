import React from "react";

const MovieCard = () => {
    return(

        <div className="container-row text-center mt-5">
            <ul className="row justify-content-center">
                <div className="card" style={{width: 200}}>
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </ul>
        </div>
    )
}

export default MovieCard;