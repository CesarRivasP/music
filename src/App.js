import React, { useState, useEffect, Fragment } from 'react';
import Form from './components/form';

function App() {

  // Utilizar useState con tres states diferentes
  const [artist, addArtist] = useState('');
  const [letter, addLetter] = useState('');
  const [info, addInfo] = useState('');

  return (
    <Fragment>
      <Form />
    </Fragment>
  );
}

export default App;
