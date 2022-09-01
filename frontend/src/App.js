import {React} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Blogs from './pages/Blogs';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <main className='py-5'>
          <div>
            <Routes>
              <Route path='/' element={<HomePage/>} exact/>
              <Route path='/blogs' element={<Blogs/>} exact/>
            </Routes>
          </div>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
