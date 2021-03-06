import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import Form from './components/form';
import Song from './components/song';
import Information from './components/info';

function App() {

  // Utilizar useState con tres states diferentes
  const [artist, addArtist] = useState('');
  const [letter, addLetter] = useState([]);
  const [info, addInfo] = useState({});

  useEffect(() => {
    // console.log('agregaste un artista');
    consultInfoAPI()
  }, [artist])

  // Metodo para consultar la api de letras de canciones
  const consultLetterAPI = async(search) => {
    const { artist, song } = search;
    const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;

    let result;
    try {
      // consultar la api
      result = await axios(url);
      // Almacenar el artista que se busco
      addArtist(artist);
      addLetter(result.data.lyrics);
    }
    catch(error){
      console.log(`Error al buscar la letra de la canción ${error}`);
    }
  }

  // Metodo para consultar la api de informacion
  const consultInfoAPI = async() => {
    // Hasta que alla un artista. ESta api realiza una consulta por defecto
    if(artist){
      const url = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;

      const result = await axios(url);

      addInfo(result.data.artists[0]);
    }
  }

  return (
    <Fragment>
      <Form consultLetterAPI={consultLetterAPI} />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Information info={info} />
          </div>
          <div className="col-md-6">
            <Song letter={letter} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
