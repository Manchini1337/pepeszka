import { FC } from 'react';
import classes from './PostContent.module.css';
import { IPost } from 'utils';

export interface IPostContent {
  postData: IPost[];
}

export const PostContent: FC<IPostContent> = ({ postData }) => (
  <div className={classes.container}>
    <img
      src='src/assets/post_icon.png'
      className={classes.icon}
      alt='brawo borys'
    />
    {postData?.map(({ content, id }) => (
      <div key={id} className={classes.post}>
        {content}
      </div>
    ))}
  </div>
);
