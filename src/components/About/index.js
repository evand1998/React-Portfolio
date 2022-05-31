import React from 'react';

function About() {

    return (
        <section id="about" className="about">
            <div className="container">

                <div>
                    <h2>About</h2>
                </div>

                <div className="row">
                    <div className="col-lg-4" data-aos="fade-right"> 
                        <img src={require('../../Assets/profile-img.png')} className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-right">
                        <p className="fst-italic">
                        “Those who dare to fail miserably can achieve greatly.” -John F. Kennedy
                        </p>
                        <p>
                        Throughout my entire life, I've had a passion for building; manifesting something from the ground up, to the point of success.
                        </p>
                        <p>
                        While currently enrolled at the University of Houston, perusing a degree in buisness managment, I wanted more- to aquire life long skills that could actually be applied in real world, while still being able to stay in my degree's feild of study. This desire lead me to enroll into the full-stack web development program at Rice University's Coding Bootcamp. With these illuminating experiences under my belt, I have developed a broad range of differing applications. If you are in the market for a self-motivated, extreamly diligent inidviudal to join your team, then look no further, for I hope to make your acquaintance. 
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;