import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Fouritems from '../Four/Fouritems';
import './Home.css'
const image = 'https://i.ibb.co/cb87bdb/3f0364de80.jpg'

const Home = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('homeeduc.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <div class="container my-5">
                <div class="row">
                    <div class="col col-md-7 ">
                        <img src={image} className='rounded mx-auto d-block img-thumbnail' alt="" />
                    </div>
                    <div class="col col-md-5">
                        <h4 className='text-muted'>
                            We Have Experienced Professionals & We Do Our Best To Achieve Your Goal. Your Happiness Is Our First Priority.</h4>
                        <p className='text-center font-monospace'>Computer programming is the process of designing and building an executable computer program to accomplish a specific computing result or to perform a specific task. Programming involves tasks such as: analysis, generating algorithms, profiling algorithms' accuracy and resource consumption, and the implementation of algorithms in a chosen programming language (commonly referred to as coding).[1][2] The source code of a program is written in one or more languages that are intelligible to ic.</p>
                    </div>

                </div>
            </div>
            
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 my-5">
                        <h4 className='my-2 text-muted text-start'>includes</h4>
                        <h5> Technical Literacy, Career Overviews, Programming Concepts, and more...</h5>
                        <p className='text-start fs-5'>Experience</p>
                        <h4 >Beginners Welcome</h4>
                        <br />
                        <h5>For Those Who Want To</h5>
                        <ul className='list-group'>
                            <li className='list-group-item mx-auto w-50'>Learn coding 101</li>
                            <li className='mx-auto w-50 list-group-item'>Explore careers in tech
                            </li>
                            <li className='list-group-item mx-auto w-50'>Communicate with developers
                            </li>
                        </ul>
                        <h5 className='text-start text-muted'>Earn</h5>
                        <h3> Certificate of Completion
                        </h3>
                    </div>
                    <div className="col-lg-6 my-5 my-auto">
                        <h2 className='text-center'>Skill Path</h2>
                        <h5 className='text-lead fw-light'>Everyone’s talking about coding, but where do you start? This path will give you an introduction to the world of code and basic concepts. By the end, you’ll know whether Data Science, Computer Science or Web Development is right for you.</h5>
                        <h4>To start this Skill Path, sign up for Codecademy Pro.

                        </h4>
                        <button className='btn btn-outline-dark mt-4 '>Try It Free</button>
                    </div>
                </div>
            </div>

            <div className="container">
            <h3 className='text-center mb-4'>Our Courses</h3>

                <div class="row">
                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">POPULAR COURSES</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">MODERN LIBRARY</h5>
                                <p class="card-text">profiling algorithms' accuracy and resource consumption, and the implementation </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">QUALIFIED TEACHER</h5>
                                <p class="card-text"> you’ll know whether Data Science, Computer Science or Web Development is right for you</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">

                    <div className="grid">
                        {
                            courses.map(course => <Fouritems
                                key={course.id}
                                course={course}
                            ></Fouritems>)
                        }
                    </div>
                </div>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Home;