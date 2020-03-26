import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import "./navbar.css";
import { CSSTransition } from "react-transition-group";


export default function Navbar() {
    const [isNavVisible, setNavVisibility] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 700px)");
        mediaQuery.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);

        return () => {
            mediaQuery.removeListener(handleMediaQueryChange);
        };
    }, []);

    const handleMediaQueryChange = mediaQuery => {
        if (mediaQuery.matches) {
            setIsSmallScreen(true);
        } else {
            setIsSmallScreen(false);
        }
    };

    const toggleNav = () => {
        setNavVisibility(!isNavVisible);
    };

    return (
        <header className="Header navbar-shrink">
            <div className="nav-brand">
                <h2>Luckyman</h2>
            </div>
            <CSSTransition
                in={!isSmallScreen || isNavVisible}
                timeout={350}
                classNames="NavAnimation"
                unmountOnExit
            >
                <nav className="Nav">
                    <Link to="/">Home</Link>
                    <Link to="/portfolio">Portfolio</Link>
                    <Link to="/blog">Blog</Link>
                </nav>
            </CSSTransition>
            <button onClick={toggleNav} className="Burger">
                <i class="fas fa-bars"></i>
            </button>
        </header>
    )
}
