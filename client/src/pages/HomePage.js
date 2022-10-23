import React from 'react'
import {usePosts} from '../context/postContext'
import {VscEmptyWindow} from 'react-icons/vsc'
export const HomePage = () => {
  const {posts} = usePosts()

  if(posts.lenght ===0) return (
    <div className='flex flex-col justify-center items-center'>
      <VscEmptyWindow className='w-48 h-48 text-white '/>
      <h1 className='text-white text-2xl'>No Post Yet</h1>
    </div>
  )

  return (
    <div className='text-white'>
      <h2>HomePage</h2>
      {posts.map((post) => (
        <div key={post._id} >{post.title}</div>
      ))}

    </div>
  )
}
