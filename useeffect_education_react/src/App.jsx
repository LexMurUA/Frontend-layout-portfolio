
import { useEffect, useState } from 'react'
import './App.css'
import { Main } from './views/Main/Main'
import axios from 'axios'
import { Header } from './views/Header/Header'

function App() {
  const [posts, setPosts] = useState([])
  const [comments, setComments] = useState([])

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setPosts(response.data)
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchPosts()
  },[])

  useEffect(()=>{
    async function fetchComments() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/comments')      
        setComments(response.data)
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchComments()
  },[])

  return (
    <>
    <Header/>
      <Main posts={posts} comments={comments}  />
    </>
  )
}

export default App
