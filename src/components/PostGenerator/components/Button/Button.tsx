import { FC, ReactNode } from 'react';

import classes from './Button.module.css';

export interface IButtonProps {
  text: ReactNode;
  type: 'submit' | 'button';
  onClick: () => void;
}

export const Button: FC<IButtonProps> = ({ text, onClick }) => (
  <button className={classes.button} onClick={onClick} type='button'>
    {text}
  </button>
);
