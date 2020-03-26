import React from 'react'
import './contentportfolio.css'
import Fade from 'react-reveal/Fade';
class ContentPortfolio extends React.Component {
    render() {

        return (
            <section id="projects" class="projects-section">
                <div class="container">
                    <Fade bottom>
                        <div class="row justify-content-center align-items-center no-gutters mb-4 mb-lg-5" id="ini">
                            <div className="col-lg-12">
                                <div className="row row-grid">
                                    <div className="col col-lg-4 col-md-6 my-3 ">

                                        <div class="card border-0 h-100 card-lift--hovershadow ">
                                            <div className="card-body pt-0 px-0 ">
                                                <img class="card-img-top" src="/img/todolist.png" alt="Card image cap" />
                                                <a href="#!">
                                                    <div class="mask rgba-white-slight"></div>
                                                </a>
                                                <div class="px-3 pt-4">
                                                    <h4 class="text-primary mb-4">To Do List</h4>
                                                    <p class="card-text">Simple To Do List with React</p>
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <a href="https://github.com/luckymn19/To-Do-List" class="mt-2 mx-2">
                                                    <i class="fab fa-github"></i>
                                                </a>
                                                <a href="https://todolist28.netlify.com/" class="mt-2 mx-2">
                                                    <i class="fas fa-globe"></i>
                                                </a>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
            </section >
        )
    }
}

export default ContentPortfolio;