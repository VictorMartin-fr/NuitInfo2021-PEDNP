import React, {useEffect} from "react";
import "./DarkMode.css";

function DarkMode() {
    let clickedClass = "click";
    const body = document.body;
    const lightTheme = "light";
    const darkTheme = "dark";
    let theme;
    
    useEffect(() => { 
        localStorage.setItem("theme", theme);
     },[theme]);

    if (localStorage) {
        theme = localStorage.getItem("theme");
    }

    if (theme === lightTheme || theme === darkTheme) {
        body.classList.add(theme)
    } else {
        body.classList.add(lightTheme)
    }

    const switchTheme = (e) => {
        if(theme === darkTheme) {
            body.classList.replace(darkTheme, lightTheme);
            e.target.classList.remove(clickedClass);
            theme = lightTheme;
        } else {
            body.classList.replace(lightTheme, darkTheme);
            e.target.classList.add(clickedClass);
            theme = darkTheme;
        }
    }

    return (
        <div className="icons">
            <a href="https://twitter.com/@boutelierphili1"><i className={theme === 'dark fab fa-twitter' ? clickedClass : 'light fab fa-twitter'}></i></a>
            <a href="https://www.facebook.com/groups/938396409644949"><i className="fab fa-facebook icons__rs"></i></a>
            <a href="sauveteurdudunkerquois@gmail.com"><i className="fas fa-envelope icons__rs"></i></a>
            <button
                className={theme === "dark" ? clickedClass : "light"}
                id="darkMode"
                onClick={(e) => switchTheme(e)}
            >
                <i className="fas fa-moon toggleBtn"></i>
            </button>
        </div>
    )
}

export default DarkMode