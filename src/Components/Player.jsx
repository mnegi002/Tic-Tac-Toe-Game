import { useState } from 'react'
import classes from './Player.module.css'
const Player = ({name, symbol , isActive}) => {
    const [isEditing, setIsEditing] = useState(false)
    const [enteredName , setEnteredName ] = useState(name)
    const editHandler = () => {
        setIsEditing((wasEditing) =>!wasEditing)
    }
    // const saveHandler = () => {
    //     setIsEditing(false)
    // }

    const inputHandler = (event) =>{
        setEnteredName(event.target.value)
    }

    let playerName = <span className={classes['player-name']}>{enteredName} </span>
    let btnCaption = 'Edit'

    if (isEditing){
        playerName = <input type='name' onChange={inputHandler} value={enteredName} required />
        btnCaption='Save' 
    }
    return (
        
            <li className={isActive ? classes.active : ''}>
                <span className={classes.player}>
                    {playerName}
                    <span className={classes['player-symbol']}>{symbol}</span>
                </span>
                <button className={classes['player-button']} onClick={editHandler}>{btnCaption}</button>
                
            </li>
            )
}
    export default Player;