import React, { useState, useEffect, Fragment } from 'react';
import Form from './components/form';

function App() {

  // Utilizar useState con tres states diferentes
  const [artist, addArtist] = useState('');
  const [letter, addLetter] = useState('');
  const [info, addInfo] = useState('');

  // Metodo para consultar la api de letras de canciones
  const consultLetterAPI = (search) => {
    console.log(search);
  }

  return (
    <Fragment>
      <Form consultLetterAPI={consultLetterAPI} />
    </Fragment>
  );
}

export default App;
