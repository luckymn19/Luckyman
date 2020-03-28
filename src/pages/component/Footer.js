import React from 'react';
import './footer.css';
import 'font-awesome/css/font-awesome.min.css';
import Fade from 'react-reveal/Fade';

function Footer() {
    return (
        <div>
            <section className="contact-section bg-black">
                <Fade bottom cascade>
                    <div className="row">
                        <div className="col-12 col-md-12">
                            <div className="social d-flex justify-content-center">
                                <a href="https://github.com/luckymn19" className="mx-2">
                                    <i className="fab fa-github"></i>
                                </a>
                                <a href="https://www.linkedin.com/in/lukman-nur-hakim-3b7203150/" className="mx-2">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                                <a href="https://www.instagram.com/luckymn_/" className="mx-2">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="https://web.facebook.com/profile.php?id=100015100937440" className="mx-2">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </Fade>
            </section>

            <footer className="py-5 page-footer">
                <div className="container-fluid container-fluid-max">
                    <div className="row">
                        <div className="col-12 col-md-12 footer-child footer-links">
                            <Fade top cascade>
                                © 2020 Luckyman
                            <br />
                                <small>Made with <i className="fas fa-heart text-red"></i> by <a href="https://www.instagram.com/luckymn_/" >Lukman Nur Hakim</a>
                                </small>
                            </Fade>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;