import React from 'react';
import logo from './logo.png'; // Make sure to add your logo image to the project

const Header = ({ menuOpen, setMenuOpen, scrollPosition }) => {
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className={`App-header ${scrollPosition > 100 ? 'hide' : ''}`}>
            <img src={logo} className="App-logo" alt="The Woodroffe Arms" />
            <div className="menu-toggle" onClick={toggleMenu}>
                <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </div>
            <nav className={menuOpen ? 'open' : ''}>
                <a href="#home">Home</a>
                <a href="#menu">Menu</a>
                <a href="#stay">Stay With Us</a>
                <a href="#contact">Contact</a>
            </nav>
            <div className="social-icons">
                <a href="https://facebook.com/thewoodroffearms" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook"></i>
                </a>
                <a href="https://instagram.com/thewoodroffearms" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                </a>
            </div>
        </header>
    );
};

export default Header;