import { useState, useEffect, useReducer } from 'react';
import { checkWinner, nextMove } from '../../../utils/ticTacToeLogic';
import Button from '../../atoms/Button';

import styles from './ticTacToe.module.css';

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_TURN':
      return !state;
    default:
      throw new Error();
  }
};

function TicTacToe() {
  const [turn, dispatch] = useReducer(reducer, false);
  const [winner, setWinner] = useState(null);
  const [huPlayer, setHuPlayer] = useState('X');
  const [aiPlayer, setAiPlayer] = useState('O');
  const [startPlayer, setStartPlayer] = useState(huPlayer);
  // const [player, setPlayer] = useState(huPlayer);
  const [moves, setMoves] = useState(0);
  const [movesHistory, setMovesHistory] = useState([]);
  const [isGameRecorded, setIsGameRecorded] = useState(0);
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
    startPlayer,
  };

  const drawGame = (board) => {
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

  // const updateGame = () => {
  //   console.log('update game fn');
  //   const player = turn ? aiPlayer : huPlayer;
  //   const isWinner = checkWinner(game, player);
  //   console.log('isWinner', isWinner);

  //   if (isWinner) {
  //     setWinner(player);
  //   } else {
  //     setMoves((move) => move + 1);
  //   }
  // };

  const recordMove = (row, col, p) => {
    console.log('record move fn');
    const player = turn ? aiPlayer : huPlayer;

    setGame((board) => {
      board[row][col] = player;
      return board;
    });
    setMoves((move) => move + 1);
    setMovesHistory((prev) => [...prev, [row, col, player]]);
    const isWinner = checkWinner(game, player);
    console.log('isWinner', isWinner);
    if (isWinner) {
      setWinner(player);
    } else {
      setIsGameRecorded((prev) => prev + 1);
    }
  };

  const aiMakesMove = () => {
    if (moves !== 9 && !winner) {
      console.log('ai makes move');
      const aiMove = nextMove(game, aiPlayer, huPlayer);
      const row = aiMove[0];
      const col = aiMove[1];
      recordMove(row, col);
      dispatch({ type: 'TOGGLE_TURN' });
    }
  };

  const handleClick = (e) => {
    if (winner) return;
    const { row } = e.target.dataset;
    const { col } = e.target.dataset;
    // TODO: add feedback to user that the cell is already filled
    if (e.target.innerText !== '') return; // prevent click on filled cell
    recordMove(row, col);
    dispatch({ type: 'TOGGLE_TURN' });
  };

  useEffect(() => {
    // this is to skip the asynchronous of hooks
    console.log('isGameRecorded useEffect');
    drawGame(game);
    // const player = turn ? huPlayer : aiPlayer;
    // console.log(game, player);
    // const isWinner = checkWinner(game, player);
    // console.log('isWinner', isWinner);

    // if (isWinner) {
    //   setWinner(player);
    // } else {
    //   setMoves((move) => move + 1);
    // }
  }, [isGameRecorded]);

  useEffect(() => {
    console.log('useEffect turn >>>> ', turn);

    if (turn) {
      aiMakesMove();
    } else {
      console.log('waiting for use move');
    }
  }, [turn]);

  const handleResetGame = () => {
    dispatch({ type: 'TOGGLE_TURN' });
    // setPlayer(config.startPlayer);
    setGame(config.resetGame);
    setWinner(false);
    setMoves(0);

    const board = document.getElementById('board').children;
    const boardArray = Array.from(board);
    boardArray.forEach((element) => {
      element.innerText = '';
    });
  };

  return (
    <div className={styles.section}>
      <div>
        <h2>TicTacToe - minimax algo</h2>
        <h4>play it against the computer</h4>
      </div>

      <div className={styles.gameWrapper}>
        <div className={styles.gameStats}>
          <div className={styles.players}>
            <div
              className={styles.player}
              id="player1"
              title="click to change name"
            >
              p1:{' '}
              <span
              // contentEditable="false"
              // onBlur={(e) => {
              //   setHuPlayer(e.target.innerText);
              // }}
              >
                {huPlayer}
              </span>
            </div>
            <div
              className={styles.player}
              id="player2"
              title="click to change name"
            >
              p2:{' '}
              <span
              // contentEditable="false"
              // onBlur={(e) => {
              //   setAiPlayer(e.target.innerText);
              // }}
              >
                {aiPlayer}
              </span>
            </div>
          </div>
          <div className="stats">
            <div>Turn: {turn ? aiPlayer : huPlayer}</div>
            <div>Moves : {moves}</div>
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
        {winner && <div>Winner: {winner}</div>}
        {(winner || moves === 9) && (
          <div>
            <Button id="reset_game_button" onClick={handleResetGame}>
              Play Again
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default TicTacToe;
