import React from 'react';
import Footer from '../Footer/Footer';
import './Cart.css'
const Cart = () => {
    const img = 'https://i.ibb.co/pnmQhzR/images.jpg'
    const img2 = 'https://i.ibb.co/4Yxrfwx/illustration-cover.png'
    const img3 = 'https://i.ibb.co/yXRfg9t/Programming-vs-coding.png'
    const img4 = 'https://i.ibb.co/5kxLKc7/images-1.jpg'
    const img5 = 'https://i.ibb.co/0fRQCXR/images.jpg'
    const img6 = 'https://i.ibb.co/kq1CmyY/download.jpg'
    const img7 = 'https://i.ibb.co/gTMkt8w/elementary-school-class-teacher-uses-260nw-1787104301.jpg'
    return (
        <div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-6">
                        <h1 className='mt-3'>Programming Lerning Course</h1>
                        <p className='fs-5'>To get Career Paths, sign up for Codecademy Pro. With Pro, you’ll have unlimited access to everything you need to take your learning to the next level.</p>
                        <button className='btn btn-outline-success'>Learn More</button>
                    </div>
                    <div className="col-lg-6">
                        <img className='img-fluid rounded h-100 w-75' src={img} alt="" />

                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <p className='fs-4'>First steps</p>
                        <h1>Not sure where to begin?</h1>
                        <p className='fs-5'>No need to worry, our quiz will help you make sense of it all.</p>
                        <button className='fs-5 mb-4 btn btn-primary'>Take Our Quaiz</button>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className="card-group ">

                    <div className="card m-3">
                        <div className="card-body ">
                            <h1 className="card-title">Carere Path</h1>
                            <p className="card-text">Computer Science.</p>
                            <h4 className="card-text"><small class="text-muted">Begainer Friendly 83 Lessons</small></h4>
                            <img className='shadow w-50 mx-auto img-fluid img-thumbnail' src={img2} alt="" />
                        </div>
                    </div>

                    <div className="card  m-3">
                        <div className="card-body">
                            <h1 className="card-title">Skill Path</h1>
                            <h6 className="card-text">BuildA Website With HTML,CSS,JAVASCRIPT.</h6>
                            <p className=" fs-5 card-text"><small class="text-muted"> Begainer Friendly 18 Lessons</small></p>
                            <img className='shadow w-50 mx-auto img-fluid img-thumbnail' src={img3} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <h1>Get Insperied</h1>
                    <p>  See stories from the Codecademy community.</p>
                    <div className="col-lg-4">

                        <div className="card-group">
                            <div className="card">
                                <img src={img4} class="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Taking a different  path one team Leads story</h5>

                                    <p className="card-text"><small class="text-muted"> Giacomo S.. Team Lead London </small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">

                        <div className="card-group">
                            <div className="card">
                                <img src={img5} class="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title"> See Hpw this architect switched to ux design</h5>

                                    <p className="card-text"><small class="text-muted"> Giacomo S.. Team Lead London </small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">

                        <div className="card-group">
                            <div className="card">
                                <img src={img6} class="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Taking a different  path one team Leads story</h5>

                                    <p className="card-text"><small class="text-muted"> Giacomo S.. Team Lead London </small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">

                        <div className="card-group">
                            <div className="card">
                                <img src={img7} class="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Taking a different  path one team Leads story</h5>

                                    <p className="card-text"><small class="text-muted"> Giacomo S.. Team Lead London </small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Cart;