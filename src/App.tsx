import { useState } from 'react';
import { Post, PostGenerator } from './components';

function App() {
  const [post, setPost] = useState('');

  const createPost = () => {
    setPost('asdf');
  };

  return (
    <>
      <PostGenerator createPost={createPost} />
      <Post postData={post} />
    </>
  );
}

export default App;
