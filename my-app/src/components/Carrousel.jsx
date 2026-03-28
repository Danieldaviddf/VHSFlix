import React from "react";

const Carrousel = () => {
    return(
        <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src="https://sm.ign.com/ign_es/feature/e/every-star/every-star-wars-game-in-development_nm3v.jpg" className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <h5>Primer Título</h5>
                    <p>Algunas palabras descriptivas</p>
                </div>
                </div>
                <div className="carousel-item">
                <img src="https://media.revistagq.com/photos/604b2f499fc97c95e82c1c14/16:9/w_2560%2Cc_limit/2101913.jpg" className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <h5>Segundo Título</h5>
                    <p>Algunas palabras descriptivas</p>
                </div>
                </div>
                <div className="carousel-item">
                <img src="https://itc.ua/wp-content/uploads/2024/11/Star-wars-logo-new-tall.webp" className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <h5>Tercer Título</h5>
                    <p>Algunas palabras descriptivas</p>
                </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
    )
}

export default Carrousel;