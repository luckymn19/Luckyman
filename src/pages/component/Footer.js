import React from 'react';
import './footer.css';
import 'font-awesome/css/font-awesome.min.css';
import Fade from 'react-reveal/Fade';

function Footer() {
    return (
        <div>
            <section class="contact-section bg-black">
                <Fade bottom cascade>
                    <div class="row">
                        <div class="col-12 col-md-12">
                            <div class="social d-flex justify-content-center">
                                <a href="https://github.com/luckymn19" class="mx-2">
                                    <i class="fab fa-github"></i>
                                </a>
                                <a href="https://www.linkedin.com/in/lukman-nur-hakim-3b7203150/" class="mx-2">
                                    <i class="fab fa-linkedin-in"></i>
                                </a>
                                <a href="https://www.instagram.com/luckymn_/" class="mx-2">
                                    <i class="fab fa-instagram"></i>
                                </a>
                                <a href="https://web.facebook.com/profile.php?id=100015100937440" class="mx-2">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </Fade>
            </section>

            <footer class="py-5 page-footer">
                <div class="container-fluid container-fluid-max">
                    <div class="row">
                        <div class="col-12 col-md-12 footer-child footer-links">
                            <Fade top cascade>
                                © 2020 Luckyman
                            <br />
                                <small>Made with <i class="fas fa-heart text-red"></i> by <a href="https://www.instagram.com/luckymn_/" target="_blank">Lukman Nur Hakim</a>
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