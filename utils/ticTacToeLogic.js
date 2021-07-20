const availableMoves = (board) => {
  const emptyCells = [];

  board.forEach((row, index) => {
    // rows
    row.forEach((e, i) => {
      // cols
      if (e === '') emptyCells.push([index, i]);
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
      const result = minimax(newBoard, huPlayer, aiPlayer, huPlayer);
      move.score = result.score;
    } else {
      const result = minimax(newBoard, aiPlayer, aiPlayer, huPlayer);
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

  return bestMove;
};
