import React, { useEffect } from "react";
import CardHome from "./CardHome";
import "./Home.css";

function Home() {

    /* const text = "Les sauvetages? Mais tout le monde en fait … Si un homme tombe dans la « Baille » est ce qu’on ne va pas le chercher? Il n’y a à cela aucun mérite…"
    let index = 0;
      
    function AnimText() {
        let container = document.getElementById("quotes");
        container.innerHTML = text.slice(0, index);
        index++
        if (index > text.length) {
            index = 0;
        } 
      }  
      
      setInterval(AnimText, 250); */
      let change = "change";
      const body = document.body;
      const english = "english";
      const german = "german";
      const french = "french";
      let language;
      
      useEffect(() => {
          localStorage.setItem("language", language);
      }, [language]);

      if (localStorage) {
          language = localStorage.getItem("language");
      }

      if (language === english || language === german) {
          body.classList.add(language);
      } else {
          body.classList.add(french)
      }

    const switchLanguage = (e) => {
        if (language === german) {
            body.classList.replace(german, english);
            e.target.classList.remove(change);
            language = english;
        } else if (language === english) {
            body.classList.replace(english, german);
            e.target.classList.add(change);
            language = german;
        } else {
            body.classList.replace(german, french);
            e.target.classList.add(change);
            language = french;
        }
    }
 

    return(
        <div className="container">
            <div className="row g-5">
                <div className="col-md-8">
                    <div className="language-btn">
                        <button 
                            className="french"
                            onClick={(e) => switchLanguage(e) }
                        >FR</button>
                        <button 
                            className="english"
                            onClick={(e) => switchLanguage(e) }
                        >
                            EN
                        </button>
                        <button 
                            className="german"
                            onClick={(e) => switchLanguage(e) }
                        >GE</button>
                    </div>

                    <article className="intro">
                        <p className="text french">
                            Bienvenue sur le site des sauveteurs du dunkerquois. Ce site rend hommage aux femmes, hommes et enfants qui ont réalisé des actes de sauvetages en milieu aquatique.
                            Ces sauveteurs, habitants du dunkerquois (de Bray-Dunes à Grand-Fort-Philippe), ont participé à plus de 900 sauvetages en mer et plus de 1100 sauvetages individuels. Œuvrant avec courage, abnégation et souvent au mépris du risque ils méritent amplement que leurs actes soient pérennisés. 
                        </p>

                        <p className="text english">
                            Welcome to the Dunkerque lifeguard site. This site pays tribute to the women, men and children who carried out rescues in the aquatic environment. These rescuers, inhabitants of Dunkerque (from Bray-Dunes to Grand-Fort-Philippe), participated in more than 900 rescues at sea and more than 1,100 individual rescues. Working with courage, self-sacrifice, and often disregarding risk, they are well deserving of their actions being perpetuated.
                        </p>

                        <p className="text german">
                            Willkommen auf die Website der Dunkerque-Retter. Die Website würdigt Frauen, Männer und Kinder, die Rettungsaktionen im Wasser durchgeführt haben. Diese Retter, die in Dunkerque (von Bray-Dunes bis Grand-Fort-Philippe) lebten, beteiligten sich an mehr als 900 Rettungen auf See und mehr als 1100 Einzelrettungen. Sie sind mutig, selbstlos und oft ohne Rücksicht auf das Risiko, dass ihre Taten Bestand haben sollten.
                        </p>

                        <img className="article-image" src="https://sauveteurdudunkerquois.fr/wp-content/uploads/2021/09/1PF8675-1024x315.jpg" alt=""/>
                        <h1 id="quotes">*</h1>
                    </article>
                </div>
                <div className="col-md-4">
                    {/* Card */}
                    <a href="../BoatGame.html">
                    <CardHome href="../BoatGame.html" image={"https://sauveteurdudunkerquois.fr/wp-content/uploads/2021/10/Journal-e1634902104276.png"}/>
                    </a>
                    <CardHome image={"https://sauveteurdudunkerquois.fr/wp-content/uploads/2021/10/Semaine-e1634902115510.png"}/>
                </div>
            </div>
        </div>
    );
}

export default Home