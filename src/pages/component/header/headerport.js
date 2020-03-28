import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './heade2.css';
import Fade from 'react-reveal/Fade';



class HeaderPort extends React.Component {
    render() {
        return (
            <>
                <header className="port">
                    <div className="container d-flex h-100 align-items-center">
                        <div className="mx-auto text-center">
                            <Fade bottom cascade>
                                <div>
                                    <h1 className="mx-auto my-0 home-title">Portfolio</h1>
                                    <h2 className="text-white-50 mx-auto mt-2 mb-5">Improve my skill with project, experiment, ect.</h2>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </header>

            </>
        )
    }
}

export default HeaderPort;