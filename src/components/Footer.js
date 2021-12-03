import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <ul className="nav col-md-4 justify-content-end">
                    <li className="nav-item"><a href="#1" className="nav-link px-2 text-muted">Qui sommes-nous</a></li>
                    <li className="nav-item"><a href="#2" className="nav-link px-2 text-muted">Presse</a></li>
                    <li className="nav-item"><a href="#3" className="nav-link px-2 text-muted">Sites amis</a></li>
                    <li className="nav-item"><a href="#4" className="nav-link px-2 text-muted">Plan du site</a></li>
                </ul>
            </footer>
        </div>
    );
}

export default Footer