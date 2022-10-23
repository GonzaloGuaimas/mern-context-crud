import React from 'react'
import {usePosts} from '../context/postContext'
import {Link} from 'react-router-dom'
export const HomePage = () => {
  const {posts, setPosts} = usePosts()
  console.log(posts)
  return (
    <div>
      <h2>HomePage</h2>
      <Link to={'/new'}>go to new</Link>
      <button onClick={() => setPosts([1,3,4])}>Add</button>
    </div>
  )
}
