import React, { useState } from 'react';

function Card() {

  const [nombre, setNombre] = useState('');
  const [color, setColor] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [validInputs, setValidInputs] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (nombre.length < 3 || color.length < 6) {
      setValidInputs(false);
    } else if (nombre[0] == ' ' || color[0] != '#') {
      setValidInputs(false)
    } else if (nombre && color) {
      setValidInputs(true)
    } else {
      setValidInputs(false);
    }

    console.log(nombre)

    setFormSubmitted(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </label>

        <label>
          Color:
          <input type="text" value={color} onChange={(e) => setColor(e.target.value)} />
        </label>

        <button type="submit">Enviar</button>
      </form>

      {formSubmitted && validInputs && (
        <p>Hola {nombre}! sabemos que tu color favorito es {color}.</p>
      )}

      {formSubmitted && !validInputs && (
        <p>Por favor checkea que la informacion sea correcta</p>
      )}
    </div>
  );
}

export default Card;
