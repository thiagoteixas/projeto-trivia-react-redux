import React from 'react';
import { Link } from 'react-router-dom';

class Ranking extends React.Component {
  render() {
    const rank = JSON.parse(localStorage.getItem('ranking'));
    rank.sort((a, b) => b.score - a.score);
    return (
      <div>
        <h3 data-testid="ranking-title">Ranking</h3>
        <ul>
          {rank.map((player, index) => (
            <li key={ index }>
              <img src={ player.picture } alt="Gravatar" />
              <p data-testid={ `player-name${index}` }>{player.name}</p>
              <p data-testid={ `player-score${index}` }>{player.score}</p>
            </li>
          ))}
        </ul>

        <Link to="/">
          <button type="button" data-testid="btn-go-home">Home</button>
        </Link>
      </div>
    );
  }
}

export default Ranking;
