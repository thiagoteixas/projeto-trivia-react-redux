import React from 'react';
import universitarios from '../assets/universitarios.png';
import pulo from '../assets/pulo.png';
import cartas from '../assets/cartas.png';
import placas from '../assets/placas.png';

class Helps extends React.Component {
  render() {
    return (
      <div className="help-items">
        <div className="line1">
          <div className="universitarios">
            <img src={ universitarios } alt="Universitarios" />
            <p>Academics</p>
          </div>

          <div className="placas">
            <img src={ placas } alt="Placas" />
            <p>Board</p>
          </div>

          <div className="cartas">
            <img src={ cartas } alt="Cartas" />
            <p>Cards</p>
          </div>

        </div>

        <div className="line2">
          <div className="pulo">
            <img src={ pulo } alt="Pulo" />
            <p>Jump</p>
          </div>
          <div className="pulo">
            <img src={ pulo } alt="Pulo" />
            <p>Jump</p>
          </div>
          <div className="pulo">
            <img src={ pulo } alt="Pulo" />
            <p>Jump</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Helps;
