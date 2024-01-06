import classes from './Moves.module.css'

function Moves({turns}) {
  return (
    <ol className={classes.log}>
      {turns.map(turn => <li key={`${turn.square.row}${turn.square.col}`}>{turn.player} selected {turn.square.row} , {turn.square.col}</li>)}
    </ol>
  );
}

export default Moves;