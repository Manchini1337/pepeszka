import { FC } from 'react';
import classes from './PostContent.module.css';

export interface IPostContent {
  postData: string;
}

export const PostContent: FC<IPostContent> = ({ postData }) => (
  <div className={classes.container}>
    <img
      src='src/assets/post_icon.png'
      className={classes.icon}
      alt='brawo borys'
    />
    <div className={classes.post}>{postData.length ? postData : 'xD'}</div>
  </div>
);
