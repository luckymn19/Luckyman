import React from 'react';
import Navbar from './component/Navbar.js';
import Header from './component/header/Header.js';
import Content from './component/content/content.js';
import Footer from './component/Footer.js';
function Home(props) {
    return (
        <>
            <Navbar />
            <Header />
            <Content />
            <Footer />
        </>
    )
}

export default Home;