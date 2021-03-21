const availableMoves = (board) => {
  const emptyCells = [];

  board.forEach((row, index) => {
    // rows
    row.forEach((e, i) => {
      // cols
      e == '' && emptyCells.push([index, i]);
    });
  });

  return emptyCells;
};

export const checkWinner = (board, ply) => {
  const r1c1 = board[0][0] === ply;
  const r1c2 = board[0][1] === ply;
  const r1c3 = board[0][2] === ply;

  const r2c1 = board[1][0] === ply;
  const r2c2 = board[1][1] === ply;
  const r2c3 = board[1][2] === ply;

  const r3c1 = board[2][0] === ply;
  const r3c2 = board[2][1] === ply;
  const r3c3 = board[2][2] === ply;

  if (
    (r1c1 && r1c2 && r1c3) ||
    (r2c1 && r2c2 && r2c3) ||
    (r3c1 && r3c2 && r3c3)
  ) {
    return true;
  }

  if (
    (r1c1 && r2c1 && r3c1) ||
    (r1c2 && r2c2 && r3c2) ||
    (r1c3 && r2c3 && r3c3)
  ) {
    return true;
  }

  if (r1c1 && r2c2 && r3c3) {
    return true;
  }

  if (r3c1 && r2c2 && r1c3) {
    return true;
  }

  return false;
};

function minimax(newBoard, player, aiPlayer, huPlayer) {
  const availSpots = availableMoves(newBoard);

  if (checkWinner(newBoard, huPlayer)) {
    return { score: -10 };
  }
  if (checkWinner(newBoard, aiPlayer)) {
    return { score: 10 };
  }
  if (availSpots.length === 0) {
    return { score: 0 };
  }
  const moves = [];

  for (let i = 0; i < availSpots.length; i += 1) {
    const move = {};
    move.index = [availSpots[i][0], availSpots[i][1]];
    move.orig = newBoard[availSpots[i][0]][availSpots[i][1]];
    newBoard[availSpots[i][0]][availSpots[i][1]] = player;

    if (player === aiPlayer) {
      const result = minimax(newBoard, huPlayer);
      move.score = result.score;
    } else {
      const result = minimax(newBoard, aiPlayer);
      move.score = result.score;
    }

    newBoard[availSpots[i][0]][availSpots[i][1]] = move.orig;

    moves.push(move);
  }

  let bestMove;
  if (player === aiPlayer) {
    let bestScore = -10000;
    for (let i = 0; i < moves.length; i += 1) {
      if (moves[i].score > bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  } else {
    let bestScore = 10000;
    for (let i = 0; i < moves.length; i += 1) {
      if (moves[i].score < bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  }

  return moves[bestMove];
}

export const nextMove = (game, aiPlayer, huPlayer) => {
  const copyGame = [...game];
  const bestMove = minimax(copyGame, aiPlayer, aiPlayer, huPlayer).index;
  console.log('minimax', bestMove);

  return bestMove;

  // setTimeout(() => {
  //   addToGame(bestMove[0], bestMove[1], player);
  // }, 600);
};

//

// const declareWinner = (board, player) => {
//   if (checkWinner(board, player)) {
//     isWinner = true;
//     winnerNode.innerText = `${player} is the winner`;
//     player2.classList.remove('next_turn');
//     player1.classList.remove('next_turn');
//     showModal();
//     return;
//   }

//   if (moves === 9) {
//     isTie = true;
//     winnerNode.innerText = `the game is draw`;
//     player2.classList.remove('next_turn');
//     player1.classList.remove('next_turn');
//     showModal();
//   }
// };

// const addNameToPlayer = (e) => {
//   const target = e.target.id;
//   // console.log(target);

//   if (target === 'player1') {
//     huPlayer = prompt('Enter player X name') || 'X';
//     player1.innerHTML = `P1: ${huPlayer}`;
//   }
//   if (target === 'player2') {
//     aiPlayer = prompt('Enter player X name') || 'X';
//     player2.innerHTML = `P2: ${aiPlayer}`;
//   }
//   startGame();
// };

// const countMoves = (board) => {
//   moves = 0;
//   board.forEach((e, i) => {
//     e.forEach((e) => {
//       e != '' && moves++;
//     });
//   });
// };

// const showModal = () => {
//   modalNode.classList.add('show');
// };
// const hideModal = () => {
//   modalNode.classList.remove('show');
// };

// player1.addEventListener('click', addNameToPlayer);
// player2.addEventListener('click', addNameToPlayer);
// document
//   .getElementById('reset_game_button')
//   .addEventListener('click', startGame);

// startGame();
