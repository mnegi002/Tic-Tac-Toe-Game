import classes from './Won.module.css'

function Winner({winner}) {
  return (
    <div className={classes.gameover}>
      <h2>Game Over</h2>
      {winner && <p>{winner} won</p>}
      {!winner && <p>It's a draw</p>}

      <p>
        <button onClick={()=> window.location.reload()}>Rematch!</button>
      </p>
    </div>
  );
}

export default Winner;