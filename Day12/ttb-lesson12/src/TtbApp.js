import React from 'react'
import {Link, Route, Routes, BrowserRouter  as Router} from 'react-router-dom'
import TtbHome from './components/TtbHome'
import TtbAbout from './components/TtbAbout'
import TtbContact from './components/TtbContact'
import TtbProduct from './components/TtbProduct'
import TtbNews from './components/TtbNews'

export default function TtbApp() {
  return (
    <div className='container border my-3'>
      <div className='alert alert-primary'>
      <h1 className='text-center'>React Router Demo</h1>
      </div>
        <hr />
        <Router>
          <div>
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/product">Product</Link></li>
                <li><Link to="/news">News</Link></li>
              </ul>
            </nav>
            <div className='alert alert-danger'>
              <Routes>
                  <Route path="/" element={<TtbHome />} />
                  <Route path="/about" element={<TtbAbout />} />
                  <Route path="/contact" element={<TtbContact />} />
                  <Route path="/product" element={<TtbProduct />} />
                  <Route path="/news" element={<TtbNews />} />
              </Routes>
            </div>
          </div>
        </Router>
    </div>
  )
}