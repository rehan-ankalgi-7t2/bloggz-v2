import { React, useState, useEffect} from 'react'
import Post from '../components/Post'
import '../css/blogs.css'
import blush from '../assets/images/Goodies-Blush.png'
import kiss from '../assets/images/Goodies-Kiss.png'
import ok from '../assets/images/Goodies-Ok.png'
import thanks from '../assets/images/Goodies-Thanks.png'
import thumbsUp from '../assets/images/Goodies-Thumbs-Up.png'

const Blogs = () => {

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
    <>
        <section className='blogs'>
            <h1>Blog Posts</h1>
            <Post post={posts} imgArr={imgArr}/>
        </section>
    </>
  )
}

export default Blogs