import React from 'react'
import { Link, Routes, Route} from "react-router-dom"
import logo from './house.png'
import Demo from './Demo'
import Mls from "./Mls"
import Blog from './Blog'
import About from './About'
export default function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white fixed-top shadow py-4">
        <div className="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="logo" />
            </Link>
            <ul className="navbar-nav d-flex mb-2 mb-lg-0">
              <li className="nav-item px-2">
                <Link className="nav-link text-dark fw-semibold" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item px-2">
                <Link className="nav-link text-dark fw-semibold" to="demo">Demos</Link>
              </li>
              <li className='nav-item px-2'>
                <Link className='nav-link text-dark fw-semibold' to="mls">MLS/IDX</Link>
              </li>
              <li className="nav-item px-2">
                <Link className="nav-link text-dark fw-semibold" to="blog" >Blog</Link>
              </li>
            </ul>
            <div className="a-buy">
              <Link to="/" className="buy">BUY Houzez</Link>
            </div>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<About />}></Route>
        <Route path="react-project" element={<About />}></Route>
        <Route path='demo' element={<Demo />}></Route>
        <Route path='mls' element={<Mls />}></Route>
        <Route path='blog' element={<Blog />}></Route>
      </Routes>
    </>
  )
}
