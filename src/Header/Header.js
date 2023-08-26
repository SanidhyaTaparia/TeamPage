// header for a website
import React from 'react';
import './Header.css';

export default function Header() {
    return (
        <div>
            <video autoPlay loop muted plays-inline="true" className="background-video">
            <source
                src="https://www.sciastra.com/Assets/rocket/desktop/04.mp4"
                type="video/mp4" />
            </video>
        
            <header>
            <a href="#"
                ><img
                src="https://www.sciastra.com/Assets/Images/newsciastra.jpg"
                alt="logo"
                className="logo"
            /></a>
        
            <input type="checkbox" id="check" />
            <label htmlFor="check" className="icons">
                <i className="bx bx-menu" id="menu-icon"></i>
                <i className="bx bx-x" id="close-icon"></i>
            </label>
        
            <nav className="navbar">
                <a href="#" className="nav-item" >Home</a>
                <a href="#" className="nav-item" >Courses</a>
                <a href="#" className="nav-item" >Selections</a>
                <a href="#" className="nav-item" >Blogs</a>
                <a href="#" className="nav-item" >Materials</a>
                <a href="#" className="nav-item" >Team</a>
                <a href="#" className="nav-item" >Contact Us</a>
            </nav>
            </header>
        
            <section className="content">
            <h1>SciAstra</h1>
            <h2 className="subheader">For the love of Science</h2>
            <a href="#" className="btn light"></a>
            </section>
        </div>
    );
  }
