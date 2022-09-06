import React, { useState } from 'react'
import '../css/composepage.css'

const ComposePage = () => {

    const [data, setData] = useState({
        title: "",
        author: "",
        publishDate: "",
        readTime: "",
        content: ""
    })

    const handleInputChange = (e) => {
        setData(...data, e.target.id = e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

  return (
    <>
        <div className='compose'>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type='text' placeholder='title of the blog' value={data.title} onChange={(e) => handleInputChange(e)}/>
                <input type='text' placeholder='author name' value={data.author} onChange={(e) => handleInputChange(e)}/>
                <input type='date' placeholder='Date of publish' value={data.title} onChange={(e) => handleInputChange(e)}/>
                <input type='number' placeholder='readtime' value={data.title} onChange={(e) => handleInputChange(e)}/>
                <textarea type='text' cols="100" placeholder='content goes here...' value={data.title} onChange={(e) => handleInputChange(e)}></textarea>
                <button type='submit'>publish post</button>
            </form>
        </div>
    </>
  )
}

export default ComposePage