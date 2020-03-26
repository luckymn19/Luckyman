import React from 'react'
import Navbar from './component/Navbar.js';
import HeaderPort from './component/header/headerport.js';
import ContentPortfolio from './component/content/contentportfolio.js';
import Footer from './component/Footer.js';

function Portfolio() {
    return (
        <>
            <Navbar />
            <HeaderPort />
            <ContentPortfolio />
            <Footer />
        </>
    )
}

export default Portfolio;