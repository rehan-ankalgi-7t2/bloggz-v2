import { React, useState, useEffect } from 'react'
import blush from '../assets/images/Goodies-Blush.png'
import kiss from '../assets/images/Goodies-Kiss.png'
import ok from '../assets/images/Goodies-Ok.png'
import thanks from '../assets/images/Goodies-Thanks.png'
import thumbsUp from '../assets/images/Goodies-Thumbs-Up.png'
import '../css/post.css'

const Post = () => {

    const [posts, setPosts] = useState([])

    const imgArr = [blush, kiss, ok, thanks, thumbsUp]

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
          <div className='post' key={post._id}>
            <div className='post__avatar'>
              <img src={imgArr[Math.floor(Math.random()*imgArr.length)]} alt=''/>
              <p>{post.author}</p>
            </div>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <span>{post.publicationDate}</span>
            <hr/>
          </div>
        ))
      }
    </div>
  )
}

export default Post