import classes from './Header.module.css';

export const Header = () => (
  <div className={classes.header}>
    <div className={classes.headerWrapper}>
      <img src='src/assets/post_old.png' alt='xD' />
      Dzisiaj, 17:38
    </div>
    <span>#1</span>
  </div>
);
