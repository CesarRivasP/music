import React, { useState } from 'react';

function Form() {
  return (
    <div className="bg-info">
      <div className="container">
        <div className="row">
          <form className="col card text-white bg-transparent mb-5 pt-5 pb-2">
            <fielset>
              <legend className="text-center">Buscador de Letras de Canciones</legend>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="">Artista</label>
                    <input
                      type="text"
                      className="form-control"
                      name="artista"
                      placeholder="Nombre de Artista"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="">Canción</label>
                    <input
                      type="text"
                      className="form-control"
                      name="cancion"
                      placeholder="Nombre de Canción"
                      required
                    />
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary float-right">Buscar</button>
            </fielset>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Form;
