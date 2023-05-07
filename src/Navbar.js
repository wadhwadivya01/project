import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import WhatIDo from './WhatIDo'
import Skills from './Skills'
import Experience from './Experience'
import Contact from './Contact'
import NavLinks from './NavLinks'


const Navbar = () => {
    return (
        <>
            <Routes>
                <Route  path='/' element={<NavLinks fixed="top"/>}>
                <Route index element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/whatIDo" element={<WhatIDo />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/contact" element={<Contact />} />
                </Route>
            </Routes>
        </>

    )
}

export default Navbar