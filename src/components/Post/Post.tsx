import { FC, ReactNode } from 'react';

import { Header, Footer, PostContent, UserContent } from './components';

import classes from './Post.module.css';

export interface IPostProps {
  children?: ReactNode;
  postData: string;
}

export const Post: FC<IPostProps> = ({ postData }) => {
  return (
    <div className={classes.container}>
      <Header />
      <div className={classes.content}>
        <UserContent />
        <PostContent postData={postData} />
      </div>
      <Footer />
    </div>
  );
};
