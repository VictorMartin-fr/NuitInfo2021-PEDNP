import React from "react";
import "./Nav.css";

function Nav() {
    return (
        <div className="navbar">
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link" href="/sauveteur">Sauveteurs</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/p">Sortie en mer</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/station">Stations</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/services">Services du port</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/bateaux">Bateaux</a>
                </li>
                <form class="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Rechercher" aria-label="Rechercher"/>
                    <button className="btn btn-outline-success" type="submit"><i className="fas fa-search search__icon"></i></button>
                </form>
            </ul>
        </div>
    );
}

export default Nav