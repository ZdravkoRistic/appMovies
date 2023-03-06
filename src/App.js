import React, { useState, useEffect } from 'react';
import FilmskaKartica from './filmskaKartica.jsx';
import SearchIcon from './search.svg';
import './css/App.css';

/* eslint-disable */

const API_URL = "http://www.omdbapi.com?apikey=b8935107";



const App = () => {

  const [usloviPretrage, podesiUslovePretrage] = useState('');
  const [filmovi, podesiFilmove] = useState([]);


  useEffect(() => {

    pretraziFilmove('Batman');
  }, []);

  const pretraziFilmove = async (naslov) => {
    const odgovor = await fetch(`${API_URL}&s=${naslov}`);
    const podaci = await odgovor.json();

    podesiFilmove(podaci.Search);


  };




  return (

    <div className="app">

      <h1> Filmovizijica </h1>

      <div className='search'>
        <input value={usloviPretrage} onChange={(e) => podesiUslovePretrage(e.target.value)} placeholder='Pretrazite filmove' />

        <img src={SearchIcon} alt="search" onClick={() => pretraziFilmove(usloviPretrage)} />
      </div>

      {filmovi.length > 0 ? (
        <div className='container'>
          {filmovi.map((film) => (<FilmskaKartica film={film} />))}
        </div>

      ) : (
        <div className='empty'>
          <h2>Nije pronadjen film.</h2>
        </div>
      )}

    </div>
  );

};

export default App;
