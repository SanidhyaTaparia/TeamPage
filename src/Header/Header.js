// header for a website
import React from 'react';
import './Header.css';

export default function Header() {
    return (
        <div>
            <video autoPlay loop muted plays-inline="true" className="background-video">
            <source
                src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/82f375e7-244f-4c21-90ac-9abd7549ed05"
                type="video/webm" />
            </video>
        
            <header>
            <a href="#"
                ><img
                src="https://github.com/ecemgo/today-i-learned-app/assets/13468728/4f2923ea-9eca-4221-8b18-7198f78fd04e"
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
                <a href="#" className="nav-item" >Plan Your Visit</a>
                <a href="#" className="nav-item" >Magical Places</a>
                <a href="#" className="nav-item" >Contact</a>
            </nav>
            </header>
        
            <section className="content">
            <h1>The North</h1>
            <a href="#" className="btn light"></a>
            </section>
        </div>
    );
  }
