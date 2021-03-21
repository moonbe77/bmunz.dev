import next from 'next';
import { useState, useEffect } from 'react';
import { checkWinner, nextMove } from '../../../utils/ticTacToeLogic';

import styles from './ticTacToe.module.css';

function TicTacToe() {
  const [turn, setTurn] = useState(false);
  const [winner, setWinner] = useState(null);
  const [huPlayer, setHuPlayer] = useState('X');
  const [aiPlayer, setSiPlayer] = useState('O');
  const [player, setPlayer] = useState(huPlayer);
  const [moves, setMoves] = useState(0);
  const [startPlayer, setStartPlayer] = useState(huPlayer);
  const [game, setGame] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]);

  const config = {
    resetGame: [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ],
    turn: false,
    isWinner: false,
    isTie: false,
    moves: 0,
    startPlayer: huPlayer,
  };

  const drawGame = (board) => {
    console.log('draw game board', board);
    board[0].forEach((e, i) => {
      if (e != '') {
        switch (i) {
          case 0:
            document.getElementById('1').innerText = e;
            break;
          case 1:
            document.getElementById('2').innerText = e;
            break;
          case 2:
            document.getElementById('3').innerText = e;
            break;

          default:
            break;
        }
      }
    });

    board[1].forEach((e, i) => {
      if (e != '') {
        switch (i) {
          case 0:
            document.getElementById('4').innerText = e;
            break;
          case 1:
            document.getElementById('5').innerText = e;
            break;
          case 2:
            document.getElementById('6').innerText = e;
            break;

          default:
            break;
        }
      }
    });

    board[2].forEach((e, i) => {
      if (e != '') {
        switch (i) {
          case 0:
            document.getElementById('7').innerText = e;
            break;
          case 1:
            document.getElementById('8').innerText = e;
            break;
          case 2:
            document.getElementById('9').innerText = e;
            break;

          default:
            break;
        }
      }
    });
  };

  const update = () => {
    console.log('update');
    if (checkWinner(game)) {
      setWinner(player);
    } else {
      setTurn((prev) => !prev);
    }
  };

  const recordMove = (row, col) => {
    console.log('record move');
    setGame((prev) => {
      prev[row][col] = player;
      return prev;
    });
    update();
  };

  const handleClick = (e) => {
    if (winner) return;

    const { row } = e.target.dataset;
    const { col } = e.target.dataset;
    // TODO: add feedback to user that the cell is already filled
    if (e.target.innerText !== '') return; // prevent click on filled cell
    recordMove(row, col);
  };

  useEffect(() => {
    setPlayer(turn ? aiPlayer : huPlayer);
    drawGame(game);
  }, [turn]);

  useEffect(() => {
    if (player === aiPlayer) {
      console.log('ai moved');
      const aiMove = nextMove(game, aiPlayer, huPlayer);
      console.log(aiMove);
      const row = aiMove[0];
      const col = aiMove[1];
      recordMove(row, col, player);
    }
  }, [player]);

  const handleResetGame = () => {
    setTurn(false);
    setPlayer(config.startPlayer);
    setGame(config.resetGame);
    setWinner(false);
    const board = document.getElementById('board').children;
    const boardArray = Array.from(board);
    boardArray.forEach((element) => {
      element.innerText = '';
    });
  };

  return (
    <section className={styles.section}>
      <h1>Tic Tac Toe</h1>
      <div className={styles.gameWrapper}>
        <div className={styles.gameStats}>
          <div className={styles.players}>
            <div
              className={styles.player}
              id="player1"
              title="click to change name"
            >
              p1: {huPlayer}
            </div>
            <div
              className={styles.player}
              id="player2"
              title="click to change name"
            >
              p2: {aiPlayer}
            </div>
            Winner: {winner}
          </div>
          <div className="stats">
            <div>Turn: {player}</div>
            <div>
              Moves Left: <span id="moves" />
            </div>
            <div id="turn" />
          </div>
        </div>
        <div className={styles.boardWrapper}>
          <div id="board" className={styles.board}>
            <div
              className="cell"
              id="1"
              onClick={handleClick}
              role="button"
              data-row="0"
              data-col="0"
            />
            <div
              className="cell"
              id="2"
              onClick={handleClick}
              role="button"
              data-row="0"
              data-col="1"
            />
            <div
              className="cell"
              id="3"
              onClick={handleClick}
              role="button"
              data-row="0"
              data-col="2"
            />
            <div
              className="cell"
              id="4"
              onClick={handleClick}
              role="button"
              data-row="1"
              data-col="0"
            />
            <div
              className="cell"
              id="5"
              onClick={handleClick}
              role="button"
              data-row="1"
              data-col="1"
            />
            <div
              className="cell"
              id="6"
              onClick={handleClick}
              role="button"
              data-row="1"
              data-col="2"
            />
            <div
              className="cell"
              id="7"
              onClick={handleClick}
              role="button"
              data-row="2"
              data-col="0"
            />
            <div
              className="cell"
              id="8"
              onClick={handleClick}
              role="button"
              data-row="2"
              data-col="1"
            />
            <div
              className="cell"
              id="9"
              onClick={handleClick}
              role="button"
              data-row="2"
              data-col="2"
            />
          </div>
        </div>
      </div>
      <div className="modal">
        <button id="reset_game_button" onClick={handleResetGame}>
          Play Again
        </button>
      </div>
    </section>
  );
}

export default TicTacToe;
