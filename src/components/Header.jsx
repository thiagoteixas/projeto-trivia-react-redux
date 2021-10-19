import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { playerScore, timer, image, playerName, playerEmail } = this.props;
    return (
      <header className="header-container">
        <p className="header-timer" data-testid="header-score">
          Time Left:
          { timer }
          seconds
        </p>

        <p className="header-player-score" data-testid="header-score">
          Score:
          { playerScore }
        </p>

        <div className="player-info-container">
          <p
            className="header-player-name"
            data-testid="header-player-name"
          >
            { playerName }
          </p>
          <p className="header-player-email">{ playerEmail }</p>
        </div>

        <img
          src={ image }
          alt="Gravatar"
          className="header-avatar"
          data-testid="header-profile-picture"
        />

      </header>
    );
  }
}

Header.propTypes = {
  image: PropTypes.string.isRequired,
  playerEmail: PropTypes.string.isRequired,
  playerName: PropTypes.string.isRequired,
  playerScore: PropTypes.number.isRequired,
  timer: PropTypes.number.isRequired,
};

export default Header;
