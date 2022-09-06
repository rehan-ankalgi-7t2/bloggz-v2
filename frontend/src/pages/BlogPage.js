import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


const BlogPage = (props) => {

  const { id } = useParams()

    const [post, setPost] = useState({})

    useEffect(() => {
      fetch(`/api/posts/${id}`)
      .then(res => res.json())
      .then(response => {setPost(response)})
    }, [id])
    

  return (
    <>
      <div>{post}</div>
    </>
  )
}

export default BlogPage