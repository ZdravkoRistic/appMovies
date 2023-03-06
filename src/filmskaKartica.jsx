
import React from 'react';


const FilmskaKartica = ({ film: { imdbID, Godina, Poster, Naslov, Tip } }) => {

    return (

        <div className="movie" key={imdbID}>

            <div>
                <p>{Godina}</p>
            </div>

            <div>
                <img src={Poster !== 'N/A' ? Poster : "https://via.placeholder.com/400"} alt={Naslov} />
            </div>

            <div>
                <span>{Tip}</span>
                <h3>{Naslov}</h3>
            </div>

        </div>

    );

}


export default FilmskaKartica;