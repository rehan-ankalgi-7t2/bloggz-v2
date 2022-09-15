import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


const BlogPage = () => {

  const { id } = useParams()

    const [post, setPost] = useState({})

    useEffect(() => {
      fetch(`/api/posts/${id}`)
      .then(res => res.json())
      .then(response => {setPost(response)})
    }, [id])
    

  return (
    <>
      <p>{post.author}</p>
      <p>{post.title}</p>
      <p>{post.content}</p>
      <p>{post.publicationDate}</p>
      <p>{`Blog details - ${id}`}</p>
    </>
  )
}

export default BlogPage