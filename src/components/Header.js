import React from "react";
import "./Header.css";
import Nav from "./Nav";
import DarkMode from "./DarkMode";



function Header() {
    return (
        <div className="container">
            {/* Bannière */}
            <div className="banner">
                <img src="https://sauveteurdudunkerquois.fr/wp-content/uploads/2021/09/BANNIERE-COMPLETE-2048x679-1.jpg" alt=""/>
            </div>
            {/* Nav */}
            <Nav/>
            {/* RS */}
            <div className="icons">
                <DarkMode/>
            </div>
        </div>
    );
}

export default Header