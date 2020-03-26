import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './header.css';
import Fade from 'react-reveal/Fade';


class Header extends React.Component {
    render() {
        return (
            <>
                <header class="masthead">
                    <div class="container d-flex h-100 align-items-center">
                        <div class="mx-auto text-center">
                            <Fade bottom cascade>
                                <div>
                                    <h1 class="mx-auto my-0 home-title">Hello, I'm Lukman</h1>
                                    <h2 class="text-white-50 mx-auto mt-2 mb-5">Someone who likes to improve his skill</h2>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </header>
            </>
        )
    }
}

export default Header;