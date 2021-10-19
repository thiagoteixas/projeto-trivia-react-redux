import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactAudioPlayer from 'react-audio-player';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import playAction, { getTokenThunk } from '../Redux/Action';

import './login.css';
import logo from '../assets/logo.png';
import silvio from '../assets/silvio.png';
import ranking from '../assets/rank.png';
import settings from '../assets/settings.png';
import about from '../assets/about.png';
import trilha from '../assets/trilha.mp3';
// import { getToken } from '../Services/fetchAPI';
// import '../App.css';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerName: '',
      playerEmail: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.validateButton = this.validateButton.bind(this);
    this.onClick = this.onClick.bind(this);
    this.returnButton = this.returnButton.bind(this);
    this.returnLoginComponents = this.returnLoginComponents.bind(this);
    this.returnLoginComponents = this.returnLoginComponents.bind(this);
    this.returnFooterComponentsc = this.returnFooterComponents.bind(this);
    this.soundtrack = this.soundtrack.bind(this);
  }

  componentDidMount() {
    this.soundtrack();
  }

  onClick() {
    const { playerEmail: gravatarEmail, playerName: name } = this.state;
    const { updateNameEmail, sendTokenToState } = this.props;
    sendTokenToState();
    updateNameEmail({ gravatarEmail, name });
    const rank = localStorage.getItem('ranking');
    if (!rank) localStorage.setItem('ranking', '[]');
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
    this.validateButton();
  }

  validateButton() {
    const { playerName, playerEmail } = this.state;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
    if (emailRegex.test(playerEmail) && playerName) {
      return false;
    }
    return true;
  }

  returnSocials() {
    return (
      <div className="social-login">
        <div className="google">
          <img src="https://web.mobills.com.br/static/media/google.091331fc.svg" alt="google logo" />
          <span>Google</span>
        </div>
        <div className="facebook">
          <img src="https://web.mobills.com.br/static/media/facebook.3dfe870e.svg" alt="facebook logo" />
          <span>Facebook</span>
        </div>
        <div className="apple">
          <img src="https://web.mobills.com.br/static/media/apple.c8b37e55.svg" alt="apple logo" />
          <span>Apple</span>
        </div>
      </div>
    );
  }

  returnButton() {
    const { className } = this.state;
    return (
      <Link to="/game">
        <button
          type="button"
          data-testid="btn-play"
          onClick={ this.onClick }
          className={ className }
        >
          Jogar
        </button>
      </Link>
    );
  }

  returnLoginComponents() {
    const playButton = this.validateButton();
    const { playerName, playerEmail } = this.state;
    return (
      <div className="main-container">
        <div className="left-container">
          <img className="logo" src={ logo } alt="Logo Show do Milhão" />
          <img className="silvio" src={ silvio } alt="Silvio Santos" />
        </div>
        <div className="login-container">
          { this.returnSocials() }
          <input
            type="text"
            data-testid="input-player-name"
            onChange={ this.handleChange }
            name="playerName"
            value={ playerName }
            placeholder="Name"
          />
          <input
            type="email"
            data-testid="input-gravatar-email"
            onChange={ this.handleChange }
            name="playerEmail"
            value={ playerEmail }
            placeholder="E-mail"
          />
          <Link to="/game">
            <button
              type="button"
              data-testid="btn-play"
              disabled={ playButton }
              onClick={ this.onClick }
              className={ playButton ? 'disabled' : 'enabled' }
            >
              Jogar
            </button>
          </Link>
        </div>
      </div>
    );
  }

  returnFooterComponents() {
    const { history } = this.props;
    return (
      <footer className="footer-container">
        <button
          className="ranking"
          type="button"
          onClick={ () => { history.push('/ranking'); } }
        >
          <img src={ ranking } alt="rank" />
        </button>

        <button
          className="settings"
          type="button"
          onClick={ () => { history.push('/settings'); } }
          data-testid="btn-settings"
        >
          <img src={ settings } alt="settings" />
        </button>

        <button
          className="about"
          type="button"
          onClick={ () => { history.push('/about'); } }
        >
          <img src={ about } alt="about" />
        </button>
      </footer>
    );
  }

  soundtrack() {
    return (
      <ReactAudioPlayer
        src={ trilha }
        autoPlay
        controls
      />
    );
  }

  render() {
    return (
      <div className="wrapper">
        { this.returnLoginComponents() }
        { this.returnFooterComponents() }
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.objectOf(PropTypes.func).isRequired,
  sendTokenToState: PropTypes.func.isRequired,
  updateNameEmail: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  updateNameEmail: (payload) => dispatch(playAction(payload)),
  sendTokenToState: () => dispatch(getTokenThunk()),
});

export default connect(null, mapDispatchToProps)(Login);

/*
Link da biblioteca React Audio Player:
https://www.npmjs.com/package/react-audio-player
*/
