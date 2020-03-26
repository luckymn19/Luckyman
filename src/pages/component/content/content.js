import React from 'react';
import './content.css';
import Fade from 'react-reveal/Fade';
class Content extends React.Component {
    render() {
        return (
            <>
                <section id="projects" class="projects-section">
                    <div class="container">
                        <div class="row align-items-center no-gutters mb-4 mb-lg-5">
                            <div class="col-xl-8 col-lg-7">
                                <Fade left cascade>
                                    <div>
                                        <img class="img-fluid mb-3 mb-lg-0" src="img/1.jpg" alt="" />
                                    </div>
                                </Fade>
                            </div>
                            <div class="col-xl-4 col-lg-5">
                                <div class="ini-text text-center text-lg-left">
                                    <Fade right cascade>
                                        <div>
                                            <h4>Lukman Nur Hakim</h4>
                                            <p class="text-black-50 mb-0"> I am is a front end junior. I am very interested in the field of web development, particularly in the front end. but I also have the capacity backend. I like learning new things, especially about technology. Someone who is very interested in the world of scientific knowledge and technology. Therefore I am very happy to apply such knowledge and have to others, so it is very useful.</p>
                                        </div>
                                    </Fade>
                                </div>
                            </div>
                            <Fade left cascade>
                                <div>
                                    <div class="card-content-actions py-4 mt-lg-0 contact">
                                        <a type="" class="btn float-right btn-info btn-sm" href="mailto:luckymanlukman19@gmail.com">
                                            <div title="Md Mail Icon" name="md-mail-icon" class="ion  ">
                                                <i class="fas fa-envelope"></i>
                                            </div>Contact</a>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default Content;