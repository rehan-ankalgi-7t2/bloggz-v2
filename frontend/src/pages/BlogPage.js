import React, { useState, useEffect } from 'react'

const BlogPage = () => {

    const [post, setPost] = useState({})

    useEffect(() => {
      fetch("/posts/:id")
      .then(res => res.json())
      .then(response => {setPost(response)})
    }, [])
    

  return (
    <div>{post}</div>
  )
}

export default BlogPage