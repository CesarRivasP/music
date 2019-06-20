import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import Form from './components/form';

function App() {

  // Utilizar useState con tres states diferentes
  const [artist, addArtist] = useState('');
  const [letter, addLetter] = useState([]);
  const [info, addInfo] = useState({});

  // Metodo para consultar la api de letras de canciones
  const consultLetterAPI = async(search) => {
    const { artist, song } = search;
    const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;

    // consultar la api
    const result = await axios(url);

    addLetter(result.data.lyrics);
  }

  return (
    <Fragment>
      <Form consultLetterAPI={consultLetterAPI} />
    </Fragment>
  );
}

export default App;
