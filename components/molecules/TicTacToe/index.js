import { useState, useEffect, useReducer } from 'react';
import { checkWinner, nextMove } from '../../../utils/ticTacToeLogic';
import { useStateContext, useStateDispatch } from '../../../store/store';
import Button from '../../atoms/Button';

import styles from './ticTacToe.module.css';

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'TOGGLE_TURN':
//       return !state;
//     default:
//       throw new Error();
//   }
// };

function TicTacToe() {
  const { game, gTurn, gWinner } = useStateContext();
  const dispatch = useStateDispatch();

  // const [winner, setWinner] = useState(null);
  const [huPlayer, setHuPlayer] = useState('X');
  const [aiPlayer, setAiPlayer] = useState('O');
  const [startPlayer, setStartPlayer] = useState(huPlayer);
  const [moves, setMoves] = useState(0);
  const [movesHistory, setMovesHistory] = useState([]);
  const [isGameRecorded, setIsGameRecorded] = useState(0);

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

  const recordMove = (row, col, player) => {
    console.log('record move fn');
    const newBoard = [...game];
    newBoard[row][col] = player;
    dispatch({ type: 'ADD_GAME_MOVE', payload: [...newBoard] });
    dispatch({ type: 'ADD_GAME_HISTORY', payload: [row, col, player] });
    const isWinner = checkWinner(game, player);
    if (isWinner) {
      drawGame(game);
      dispatch({ type: 'ADD_GAME_WINNER', payload: player });
    } else {
      setIsGameRecorded((prev) => prev + 1);
    }
  };

  const aiMakesMove = () => {
    if (moves !== 9 && !gWinner) {
      console.log('ai makes move');
      console.log(game);
      const aiMove = nextMove(game, aiPlayer, huPlayer);
      const row = aiMove[0];
      const col = aiMove[1];
      recordMove(row, col, aiPlayer);
      dispatch({ type: 'TOGGLE_GAME_TURN' });
    }
  };

  const handleClick = (e) => {
    if (gWinner) return;
    const { row } = e.target.dataset;
    const { col } = e.target.dataset;
    // TODO: add feedback to user that the cell is already filled
    if (e.target.innerText !== '') return; // prevent click on filled cell
    recordMove(row, col, huPlayer);
    dispatch({
      type: 'TOGGLE_GAME_TURN',
    });
  };

  useEffect(() => {
    // this is to skip the asynchronous of hooks
    drawGame(game);
  }, [isGameRecorded]);

  useEffect(() => {
    console.log('useEffect turn >>>> ', gTurn);

    if (gTurn) {
      aiMakesMove();
    } else {
      console.log('waiting for use move');
    }
  }, [gTurn]);

  const handleResetGame = () => {
    dispatch({ type: 'RESET_GAME' });

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
            <div>Turn: {gTurn ? aiPlayer : huPlayer}</div>
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
        {gWinner && <div>Winner: {gWinner}</div>}
        {(gWinner || moves === 9) && (
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
