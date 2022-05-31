import React from 'react';
import ('./style.css')

function portfolio() {

    return (
        <section id="portfolio" className="portfolio">
            <div className="container">

                <div>
                    <h2>Portfolio</h2>
                    <p>Please take the time to view the following projects I have proudly worked on. Some have been built solely by myself, while others have been group efforts, please visit the Github repositories in order to view any collaborators. </p>
                    <p>Additionally, these are all public projects, any I have done for private clients or applications that are yet to be made public are excluded from this gallery. Both hard work and discretion are tools in my arsenal as a professional.</p>
                </div>

                <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">

                    <div className="col-lg-4 col-md-6 portfolio-item">
                        <div className="portfolio-wrap">
                        <img src={require('../../Assets/portfolio/movienight.png')} className="img-fluid" alt="" />
                        <div className="portfolio-links">
                            <a href="https://github.com/evand1998/Movie-Night" title="View Github"><i className="bx bxl-github"></i></a>
                            <a href="https://evand1998.github.io/Movie-Night/" title="View Page"><i className="bx bx-link"></i></a>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item">
                        <div className="portfolio-wrap">
                        <img src={require('../../Assets/portfolio/DI.png')} className="img-fluid" alt="" />
                        <div className="portfolio-links">
                            <a href="https://github.com/evand1998/DevelopIT-Full-Stack-Forum" title="View Github"><i className="bx bxl-github"></i></a>
                            <a href="https://safe-river-61746.herokuapp.com/" title="View Page"><i className="bx bx-link"></i></a>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item">
                        <div className="portfolio-wrap">
                        <img src={require('../../Assets/portfolio/weather.png')} className="img-fluid" alt="" />
                        <div className="portfolio-links">
                            <a href="https://github.com/evand1998/WA2" title="View Github"><i className="bx bxl-github"></i></a>
                            <a href="https://evand1998.github.io/WA2/" title="View Page"><i className="bx bx-link"></i></a>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item">
                        <div className="portfolio-wrap">
                        <img src={require('../../Assets/portfolio/sch.png')} className="img-fluid" alt="" />
                        <div className="portfolio-links">
                            <a href="https://github.com/evand1998/DailyPlanner" title="View Github"><i className="bx bxl-github"></i></a>
                            <a href="https://evand1998.github.io/DailyPlanner/" title="View Page"><i className="bx bx-link"></i></a>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item">
                        <div className="portfolio-wrap">
                        <img src={require('../../Assets/portfolio/codingq.png')} className="img-fluid" alt="" />
                        <div className="portfolio-links">
                            <a href="https://github.com/evand1998/CQ2" title="View Github"><i className="bx bxl-github"></i></a>
                            <a href="https://evand1998.github.io/CQ2/" title="View Page"><i className="bx bx-link"></i></a>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item">
                        <div className="portfolio-wrap">
                        <img src={require('../../Assets/portfolio/budget.png')} className="img-fluid" alt="" />
                        <div className="portfolio-links">
                            <a href="" title="View Github"><i className="bx bxl-github"></i></a>
                            <a href="https://fierce-cliffs-95591.herokuapp.com/" title="View Page"><i className="bx bx-link"></i></a>
                        </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default portfolio;