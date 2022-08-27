import {React} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ComposeblogPage from './pages/ComposeblogPage'
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <main className='py-5'>
          <div>
            <Routes>
              <Route path='/' element={<HomePage/>} exact/>
              <Route path='/compose' element={<ComposeblogPage/>}/>
            </Routes>
          </div>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
