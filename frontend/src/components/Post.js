import { React } from 'react'
import {Link} from 'react-router-dom'
import '../css/post.css'

const Post = ({ post, imgArr }) => {
  return (
    <div>
        {
        post.map(post => (
          <div className='post' key={post._id}>
            <div className='post__avatar'>
              <img src={imgArr[Math.floor(Math.random()*imgArr.length)]} alt=''/>
              <p>{post.author}</p>
            </div>
            <h2><Link to={`/blogs/${post._id}`}>{post.title}</Link></h2>
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