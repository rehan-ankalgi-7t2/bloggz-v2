import { React, useState, useEffect } from 'react'

const Post = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('/posts')
        .then(res => res.json())
        .then(response => {
        setPosts(response)
        })
    }, [])

  return (
    <div>
        {
        posts.map(post => (
          <div key={post._id}>
            <p>{post.author}</p>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <span>{post.publicationDate}</span>
          </div>
        ))
      }
    </div>
  )
}

export default Post