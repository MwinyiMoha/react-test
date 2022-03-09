import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import PostSelector from './components/PostSelector';
import CommentList from './components/CommentList';

function App() {

  const [posts, setPosts] = useState([])
  const [currentPost, setCurrentPost] = useState(null)

  const getPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    return await response.json()
  }

  const handleSelectedPost = postId => {

    // log id of selected post
    console.log(postId)

    setCurrentPost(postId)
  }

  useEffect(
    async () => {
      const posts = await getPosts()

      // show posts fetched on load
      console.log(posts)

      setPosts(posts)
    }, 
    []
  )

  return (
    <>
      
      <PostSelector posts={posts} onSelect={handleSelectedPost}/>

      <CommentList postId={currentPost}/>

    </>
  );
}

export default App;
