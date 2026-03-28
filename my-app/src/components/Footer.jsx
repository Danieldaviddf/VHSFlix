import React from "react";

const Footer = () =>{
    return(
        <footer className="bg-dark text-white pt-5 pb-4">
            <div className="container text-center text-md-start">
                <div className="row text-center text-md-start">
                
                
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                    <h5 className="text-uppercase mb-4 font-weight-bold text-primary">Nombre Empresa</h5>
                    <p>Proporcionamos soluciones web modernas y adaptables para todo tipo de negocios.</p>
                </div>

                
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                    <h5 className="text-uppercase mb-4 font-weight-bold text-primary">Productos</h5>
                    <p><a href="#" className="text-white" style={{textDecoration: 'none'}}>Diseño Web</a></p>
                    <p><a href="#" className="text-white" style={{textDecoration: 'none'}}>Marketing</a></p>
                    <p><a href="#" className="text-white" style={{textDecoration: 'none'}}>Hosting</a></p>
                </div>

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                    <h5 className="text-uppercase mb-4 font-weight-bold text-primary">Contacto</h5>
                    <p><i className="fas fa-home mr-3"></i> Segovia, ES 40001</p>
                    <p><i className="fas fa-envelope mr-3"></i> info@ejemplo.com</p>
                    <p><i className="fas fa-phone mr-3"></i> +34 900 000 000</p>
                </div>
                
                </div>

                <hr className="mb-4"/>

                
                <div className="row align-items-center">
                <div className="col-md-7 col-lg-8">
                    <p>© 2026 Copyright: <a href="#" style={{textDecoration: 'none'}}><strong className="text-primary">MiSitioWeb.com</strong></a></p>
                </div>
                <div className="col-md-5 col-lg-4">
                    <div className="text-center text-md-end">
                    <ul className="list-unstyled list-inline">
                        <li className="list-inline-item"><a href="#" className="btn-floating btn-sm text-white" style={{size: 23}}><i className="fab fa-facebook"></i></a></li>
                        <li className="list-inline-item"><a href="#" className="btn-floating btn-sm text-white" style={{size: 23}}><i className="fab fa-twitter"></i></a></li>
                        <li className="list-inline-item"><a href="#" className="btn-floating btn-sm text-white" style={{size: 23}}><i className="fab fa-linkedin-in"></i></a></li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer;