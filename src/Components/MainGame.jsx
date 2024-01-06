// import { act } from 'react-dom/test-utils';
import GameBoard from './GameBoard';
import classes from './MainGame.module.css'
import Moves from './Moves';
import Player from './Player';
import { winningCombinations } from './WinningCombination';
import { useState } from 'react'
import Winner from './Won'

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

function derivedPlayer(gameTurns) {
  let currentPlayer = 'X'

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O'
  }

  return currentPlayer;
}


function Game() {
  const [gameTurns, setGameTurns] = useState([])
  const [activePlayer, setActivePlayer] = useState(derivedPlayer(gameTurns))
  // const activePlayer = derivedPlayer(gameTurns)
  let boardGame = initialGameBoard
  for (const turn of gameTurns) {
    const { square, player } = turn
    const { row, col } = square
    boardGame[row][col] = player
  }
  let winner
  for (const combinations of winningCombinations) {
    console.log("COMBINATIONS", combinations);
    const firstSqSymbol = boardGame[combinations[0].row][combinations[0].col]
    const secondSqSymbol = boardGame[combinations[1].row][combinations[1].col]
    const thirdSqSymbol = boardGame[combinations[2].row][combinations[2].col]
    if (firstSqSymbol &&
      firstSqSymbol === secondSqSymbol &&
      firstSqSymbol === thirdSqSymbol) {
      winner = firstSqSymbol
    }
  }
  const hasDraw = gameTurns.length === 9 && !winner
  const selectSquareHandler = (rowIndex, colIndex) => {
    setActivePlayer((curractivePlayer) => curractivePlayer === 'X' ? 'O' : 'X')
    setGameTurns(prevTurns => {
      const currentPlayer = derivedPlayer(prevTurns)
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns
      ]
      // console.log(updatedTurns)
      return updatedTurns
    })
  }
  return (
    <main>
      <div className={classes['game-container']}>
        <ol className={`${classes.players} ${classes.highlightplayer}`}>
          <Player name='Player 1' symbol='X' isActive={activePlayer === 'X'} />
          <Player name='Player 2' symbol='O' isActive={activePlayer === 'O'} />
        </ol>
        {(winner || hasDraw) && <Winner winner={winner} />}
        <GameBoard onSelectSquare={selectSquareHandler} board={boardGame} />
      </div>
      <Moves turns={gameTurns} />
    </main>
  );
}

export default Game;