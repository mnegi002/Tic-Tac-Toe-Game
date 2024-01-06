import { useState } from 'react'
import classes from './GameBoard.module.css'


const GameBoard = ({onSelectSquare , board }) =>{
    return (
        <ol className={classes['game-board']}>
        {board.map((row,rowIndex)=><li key={rowIndex}>
            <ol>
                {row.map((playersymbol , colIndex)=><li key={colIndex}>
                   <button onClick={() => onSelectSquare(rowIndex , colIndex)} 
                   disabled={playersymbol !== null}
                   >{playersymbol}</button> 
                </li>)}
            </ol>
        </li>)}
        </ol>
    )
}

export default GameBoard