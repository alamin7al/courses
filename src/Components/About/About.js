import React from 'react';
import Footer from '../Footer/Footer';

const About = () => {
    const img = 'https://i.ibb.co/5RvhY71/about-1.jpg'
    return (
        <div className='my-5'>
            <h2 className='my-4'>Ready to kick-start your career</h2>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <img className='rounded  img-fluid' src={img} alt="" />
                    </div>
                    <div className="col-lg-6">
                        <h5>Career Path</h5>
                        <p className='lead fs-4'>No matter what your coding goals are, the best place to start is by building a strong foundation. Similar to a college course, this Path will teach you how to think and code like a professional. You’ll learn Computer Science fundamentals, build a professional portfolio, and prepare for an entry-level role in tech.</p>
                        <p className='fs-3'>To start this Career Path, sign up for Codecademy Pro.</p>
                        <button className='btn btn-success'>Course Deatails</button>
                    </div>
                </div>
            </div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-7 my-auto shadow p-3 mb-5  rounded border border-5 ">
                        <div className="card h-100 w-100">
                            <div className="card-body my-auto">
                                <h3 className="card-text  font-monospace   ">You really feel like <br /> there's nothing <br /> you can't learn, <br /> which in turn <br /> builds so much <br /> confidence in your <br /> skills and gives the <br /> momentum to <br /> keep learning. </h3>
                                <h6 className="card-subtitle mt-3 text-muted">                                JoeCodecademy Learner
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <h1> How are Career Paths different? </h1>
                        <h4>  Get in-depth knowledge. </h4>
                        <p className='lead '> Learning to code means more than just memorizing syntax. Instead, we help you think like a real programmer. </p>
                        <h3> Get a helpful roadmap.
                        </h3>
                        <p className='lead '> Like a career advisor, we guide you through each step. You’ll learn the right thing at the right time, all in one place. </p>
                        <h3>Get job ready.  </h3>
                        <p className='lead '> Gain practical experience as you go by creating portfolio-worthy projects that will help you land your next job. </p>
                    </div>
                </div>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default About;