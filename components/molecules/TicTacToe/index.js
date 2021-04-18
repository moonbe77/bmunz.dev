import { useState, useEffect, useReducer } from 'react';
import { checkWinner, nextMove } from '../../../utils/ticTacToeLogic';
import { useStateContext, useStateDispatch } from '../../../store/store';
import Cell from './Cell';
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
  const {
    game,
    gTurn,
    gWinner,
    gMoves,
    gIsTie,
    isDarkTheme,
  } = useStateContext();
  const dispatch = useStateDispatch();
  const [huPlayer, setHuPlayer] = useState('🤩');
  const [aiPlayer, setAiPlayer] = useState('🤖');
  const [moves, setMoves] = useState(0);
  const [isGameRecorded, setIsGameRecorded] = useState(0);

  const theme = isDarkTheme ? styles.dark : styles.light;
  const themeInverted = !isDarkTheme ? styles.dark : styles.light;

  const drawGame = (board) => {
    // TODO:improve this function
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
    if (gTurn && gMoves < 9) {
      setTimeout(aiMakesMove(), 5000);
    }

    if (gMoves === 9 && !gWinner) {
      dispatch({ type: 'ADD_GAME_DRAW', payload: true });
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

  const handleKeydown = (e) => {
    // console.log(e);
  };
  const handleCloseGame = () => {
    dispatch({ type: 'SWITCH_GAME' });
  };

  return (
    <div className={`${styles.section} ${theme}`}>
      <div
        className={styles.closeButton}
        onClick={handleCloseGame}
        onKeyDown={handleKeydown}
        role="button"
        aria-pressed="false"
        tabIndex="0"
        aria-label=" Tic Tac Toe Close Button"
      >
        &#10007;
      </div>
      <div className={styles.header}>
        <h2>Tic Tac Toe</h2>
        <h4>play against the machine</h4>
      </div>
      <div className={styles.gameWrapper}>
        <div className={styles.gameStats}>
          <div className={styles.statsBox}>
            <div className={styles.players}>
              <span className={styles.p1}>{huPlayer}</span>
              <span>vs</span>
              <span className={styles.p2}>{aiPlayer}</span>
            </div>
          </div>
          <div className="stats">
            <div className={styles.statsBox}>Moves Left: {9 - gMoves}</div>
          </div>
        </div>
        <div className={styles.boardWrapper}>
          <div id="board" className={styles.board}>
            {Array.of(1, 2, 3).map((item, i) => (
              <Cell
                key={item}
                id={item}
                className={`${theme}`}
                dataRow={0}
                dataCol={i}
                handleClick={handleClick}
                handleKeydown={handleKeydown}
              />
            ))}
            {Array.of(4, 5, 6).map((item, i) => (
              <Cell
                key={item}
                id={item}
                dataRow={1}
                dataCol={i}
                handleClick={handleClick}
                handleKeydown={handleKeydown}
              />
            ))}
            {Array.of(7, 8, 9).map((item, i) => (
              <Cell
                key={item}
                id={item}
                dataRow={2}
                dataCol={i}
                handleClick={handleClick}
                handleKeydown={handleKeydown}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={`${styles.gameReset}`}>
        {gWinner && <div>The Winner Is {gWinner}</div>}
        {gIsTie && <div>It's a tie</div>}
        {(gWinner || gIsTie) && (
          <div>
            <Button
              id="reset_game_button"
              isDarkTheme={isDarkTheme}
              onClick={handleResetGame}
            >
              Play Again
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default TicTacToe;
