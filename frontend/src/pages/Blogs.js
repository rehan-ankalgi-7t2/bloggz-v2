import React from 'react'
import Post from '../components/Post'
import '../css/blogspage.css'

const Blogs = () => {
  return (
    <>
        <section className='blogs'>
            <h1>Blog Posts</h1>
            <Post/>
        </section>
    </>
  )
}

export default Blogs