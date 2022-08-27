import React from 'react'
import heroImg from '../assets/images/hero-illustration.png'
import '../css/homepage.css'

const HomePage = () => {
  return (
    <>
      <section className='hero'>
        <div className='hero__text'>
          <h1>Share your experiences with Blogz</h1>
          <button><a href='/blogs'>Read blogs</a></button>
        </div>
        <div className='hero__img'>
          <img src={heroImg} alt="" srcset=""/>
        </div>
      </section>
    </>
  )
}

export default HomePage