import { useState } from 'react';
import { Post, PostGenerator } from './components';
import { getRandomPosts, IPost } from './utils';

function App() {
  const [post, setPost] = useState<IPost[]>([]);

  const createPostHandler = () => {
    const createdPost = getRandomPosts(1, 2, 1);
    setPost(createdPost);
  };
  return (
    <>
      <PostGenerator createPost={createPostHandler} />
      <Post postData={post} />
    </>
  );
}

export default App;
