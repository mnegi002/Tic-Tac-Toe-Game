import classes  from './Header.module.css'

function Header() {
  return (
    <div className={classes.header}>
      <img className={classes.headimg} src="./images/game-logo.png" alt="React Game" />
      <h1 className={classes.heading}>Tic-Tac-Toe</h1>
    </div>
  );
}

export default Header;