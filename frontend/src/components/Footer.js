import React from 'react'
import '../css/footer.css'

const Footer = () => {
  return (
    <footer>
        <h1>Made with style by reho.</h1>
        <div className='footer__info'>
            <div>
                <h2>Website links</h2>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
            <div>
                <h2>Socials</h2>
                <ul>
                    <li><a href="https://twitter.com/RehanAnkalgi">Twitter</a></li>
                    <li><a href="https://www.instagram.com/rehan.ankalgi/">Instagram</a></li>
                    <li><a href="https://www.linkedin.com/in/rehan-ankalgi-84466619a/">LinkedIn</a></li>
                    <li><a href="https://dribbble.com/rehan_ankalgi">Dribbble</a></li>
                    <li><a href="https://github.com/rehan-ankalgi-7t2">Github</a></li>
                </ul>
            </div>
            <div>
                <h2>contact</h2>
                <span>Email: creative.reho@gmail.com</span>
                <br/>
                <span>Phone no: +91 9741120672</span>
            </div>
        </div>
    </footer>
  )
}

export default Footer