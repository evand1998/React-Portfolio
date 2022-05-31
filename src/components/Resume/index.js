import React from 'react';
import './style.css'

function Resume() {

    return (

        <section id="resume" className="skills">
            <div className="container">

                <div>
                    <h2>Resume</h2>
                </div>

                
                <div>
                    <br />
                    <h4>Education</h4>
                    <p className='school'> University of Houston — Buisness </p>
                    <p className='date'> January 2019 - Present </p>
                    <p className='school-content'> Worked alongside like-minded individuals to better my understanding of buisness, something that later pushed me to shift my attention to the tech industry. </p>
                    <br />
                    <p className='school'> Rice University — Coding Bootcamp  </p>
                    <p className='date'> November 2021 - April 2022 </p>
                    <p className='school-content'> A fast pace yet thorough program that pushed me to go beyond my limits into becoming a capable & proficient full-stack web developer.</p>
                </div>  

                <div>
                    <br />
                    <h4>Resume PDF</h4>
                    <p> View a downloadable copy of my resume on <a className='school' href="https://docs.google.com/document/d/1eSbnBMeIGR5Rc4-cRF_albNBEa38qHdT_IRyFG7JE_E/edit?usp=sharing">Google Docs</a> </p>
            
                </div>
            </div>
        </section>
    )
}

export default Resume;