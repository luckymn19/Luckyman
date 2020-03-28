import React from 'react'
import './contentportfolio.css'
import Fade from 'react-reveal/Fade';
class ContentPortfolio extends React.Component {
    render() {

        return (
            <section id="projects" className="projects-section">
                <div className="container">
                    <Fade bottom cascade>
                        <div className="row justify-content-center" id="ini">
                            <div className="col-lg-12">
                                <div className="row row-grid">
                                    <div className="col-lg-4 col-md-6 my-3 ">
                                        <div className="card border-0 h-100 card-lift--hovershadow ">
                                            <div className="card-body pt-0 px-0 ">
                                                <img className="card-img-top" src="/img/portfolio/todolist.png" alt="Card image cap" />
                                                <a href="#!">
                                                    <div className="mask rgba-white-slight"></div>
                                                </a>
                                                <div className="px-3 pt-4">
                                                    <h4 className="text-primary mb-4">To Do List</h4>
                                                    <p className="card-text">Simple To Do List with React</p>
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <a href="https://github.com/luckymn19/To-Do-List" className="mt-2 mx-2">
                                                    <i className="fab fa-github"></i>
                                                </a>
                                                <a href="https://todolist28.netlify.com/" className="mt-2 mx-2">
                                                    <i className="fas fa-globe"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 my-3 ">
                                        <div className="card border-0 h-100 card-lift--hovershadow ">
                                            <div className="card-body pt-0 px-0 ">
                                                <img class="card-img-top" src="/img/portfolio/calculator.png" alt="Card image cap" />
                                                <a href="#!">
                                                    <div className="mask rgba-white-slight"></div>
                                                </a>
                                                <div className="px-3 pt-4">
                                                    <h4 className="text-primary mb-4">Calculator</h4>
                                                    <p className="card-text">Calculator with React</p>
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <a href="https://github.com/luckymn19/Calculator" className="mt-2 mx-2">
                                                    <i className="fab fa-github"></i>
                                                </a>
                                                <a href="https://calculator11.netlify.com/" className="mt-2 mx-2">
                                                    <i className="fas fa-globe"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
            </section>
        )
    }
}

export default ContentPortfolio;