import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './header3.css';
import Fade from 'react-reveal/Fade';



class HeaderBlog extends React.Component {
    render() {
        return (
            <>
                <header className="blog">
                    <div className="container d-flex h-100 align-items-center">
                        <div className="mx-auto text-center">
                            <Fade bottom cascade>
                                <div>
                                    <h1>Coming Soon.....</h1>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </header>

            </>
        )
    }
}

export default HeaderBlog;