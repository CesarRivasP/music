import React, { useState } from 'react';

function Form() {

  const [search, addSearch] = useState({
    artist: '',
    song: ''
  });

  const updateState = (e) => {
    addSearch({
      ...search,
      [e.target.name]: e.target.value
    })
  };
  
  return (
    <div className="bg-info">
      <div className="container">
        <div className="row">
          <form className="col card text-white bg-transparent mb-5 pt-5 pb-2">
            <fieldset>
              <legend className="text-center">Buscador de Letras de Canciones</legend>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="">Artista</label>
                    <input
                      type="text"
                      className="form-control"
                      name="artist" //debe ser igual al del state
                      placeholder="Nombre de Artista"
                      required
                      onChange={updateState}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="">Canción</label>
                    <input
                      type="text"
                      className="form-control"
                      name="song"
                      placeholder="Nombre de Canción"
                      required
                      onChange={updateState}
                    />
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary float-right">Buscar</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Form;
