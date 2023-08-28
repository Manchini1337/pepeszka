import { FC } from 'react';
import { Button } from './components';

import classes from './PostGenerator.module.css';

export interface IPostGenerator {
  createPost: () => void;
}

export const PostGenerator: FC<IPostGenerator> = ({ createPost }) => (
  <div className={classes.container}>
    <Button text='Generuj story' type='button' onClick={createPost} />
  </div>
);
