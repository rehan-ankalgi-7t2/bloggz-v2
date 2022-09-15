import {React} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Blogs from './pages/Blogs';
import ComposePage from './pages/ComposePage';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <main>
          <div>
            <Routes>
              <Route path='/' element={<HomePage/>} exact/>
              <Route path='/posts' element={<Blogs/>} exact/>
              <Route path='/posts/:id' element={<BlogPage/>}/>
              <Route path='/compose' element={<ComposePage/>} exact/>
              <Route path='/about' element={<AboutPage/>} exact/>
            </Routes>
          </div>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
