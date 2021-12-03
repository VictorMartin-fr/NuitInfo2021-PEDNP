import React from "react";

function CardHome({ NomOpe, image })  {
    return (
        <div className="card">
            <img src={image} className="card-img-top" alt=""/>
            <div className="card-body text-center">
                <a href="#7" className="btn btn-primary">{NomOpe}</a>
            </div>
        </div>
    );
}

export default CardHome