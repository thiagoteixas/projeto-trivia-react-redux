import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import md5 from 'crypto-js/md5';
import playAction from '../Redux/Action';
import './feedback.css';

class Feedback extends React.Component {
  constructor() {
    super();
    this.resetPoints = this.resetPoints.bind(this);
    this.returnHeaderComponents = this.returnHeaderComponents.bind(this);
    this.returnFeedbackComponents = this.returnFeedbackComponents.bind(this);
    this.returnButtons = this.returnButtons.bind(this);
    this.returnGravatar = this.returnGravatar.bind(this);
  }

  resetPoints() {
    const { resetScoreAssertion } = this.props;
    resetScoreAssertion({
      score: 0,
      assertions: 0,
    });
  }

  returnGravatar() {
    const { playerEmail } = this.props;
    const imgPath = 'https://www.gravatar.com/avatar/$ce11fce876c93ed5d2a72da660496473';
    const hash = md5(playerEmail).toString();
    const image = `${imgPath}${hash}`;

    return image;
  }

  returnHeaderComponents() {
    const { playerName, playerScore } = this.props;
    return (
      <div>
        <div>
          <span data-testid="feedback-text" className="end-game">FIM DE JOGO!</span>
        </div>
        <header>
          <img
            src={ this.returnGravatar() }
            alt="Gravatar"
            data-testid="header-profile-picture"
            className="gravatar"
          />
          <span data-testid="header-player-name" className="text">{ playerName }</span>
          <span data-testid="header-score">{ playerScore }</span>
        </header>
      </div>
    );
  }

  returnFeedbackComponents() {
    const { playerAssertions, playerScore } = this.props;
    const ASSERTIONS = 3;
    return (
      <div>
        <div>
          <p
            data-testid="feedback-text"
            className="feedback-text"
          >
            {(playerAssertions >= ASSERTIONS)
              ? 'Mandou bem!'
              : 'Podia ser melhor...'}
          </p>
        </div>
        <div className="results">
          <span
            data-testid="feedback-total-score"
          >
            Score:
            {' '}
            { playerScore }
          </span>
          <span
            data-testid="feedback-total-question"
          >
            Hits:
            {' '}
            { playerAssertions }
          </span>
        </div>
      </div>
    );
  }

  returnButtons() {
    return (
      <div>
        <Link to="/">
          <button
            type="button"
            data-testid="btn-play-again"
            onClick={ this.resetPoints }
            className="end-buttons"
          >
            Jogar novamente
          </button>
        </Link>
        <Link to="/ranking">
          <button
            type="button"
            data-testid="btn-ranking"
            onClick={ this.resetPoints }
            className="end-buttons"
          >
            Ver Ranking
          </button>
        </Link>
      </div>
    );
  }

  render() {
    return (
      <div className="feedback-wrapper">
        <div className="result-box">
          { this.returnHeaderComponents() }
          { this.returnFeedbackComponents() }
          { this.returnButtons()}
        </div>
      </div>
    );
  }
}

Feedback.propTypes = {
  playerAssertions: PropTypes.number.isRequired,
  playerEmail: PropTypes.string.isRequired,
  playerName: PropTypes.string.isRequired,
  playerScore: PropTypes.number.isRequired,
  resetScoreAssertion: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  playerName: state.player.name,
  playerAssertions: state.player.assertions,
  playerScore: state.player.score,
  playerEmail: state.player.gravatarEmail,
});

const mapDispatchToProps = (dispatch) => ({
  resetScoreAssertion: (payload) => dispatch(playAction(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);
