import React from 'react';
import { Link as a } from "react-router-dom";

const Footer = () => {
    return (
        <div className='mt-5 mb-5'>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h3 className='text-start'>EDULYN</h3>
                        <p>Learning to code means more than just memorizing syntax. Instead, we help you think like a real programmer.</p>
                        <h5>Adress:Dhaka Bangladesh</h5>
                        <h5>Email:ma7029582@gmail.com</h5>
                        <h5>Number:01703754409</h5>
                    </div>
                    <div className="col-md-4">
                        <h4 className='text-start'>Usefull Links</h4>
                        <div className='d-flex '>

                            <div className='my-auto mx-3 mt-4'>
                                <a className='d-block text-decoration-none' href="/general">General Info</a>
                                <a className='d-block text-decoration-none' href="/help">Help Center</a>
                                <a className='d-block text-decoration-none' href="/our service">Ouer Services</a>
                                <a className='d-block text-decoration-none' href="/privacy">Privacy Policy</a>
                            </div>
                            <div className='my-auto mx-3 mt-4'>
                                <a className='d-block text-decoration-none' href="/online"> Online Support </a>
                                <a className='d-block text-decoration-none' href="/help"> Help Counter </a>
                                <a className='d-block text-decoration-none' href="/students"> Students ID </a>
                                <a className='d-block text-decoration-none' href="/secter"> Students Info </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h4 className='text-start'> Languages</h4>
                        <div className='d-flex '>                      
                        <div className='my-auto mx-auto mt-4'>
                            <h6> HTML5 </h6>
                            <h6> CSS3 </h6>
                            <h6> BOOTSTRAP </h6>
                            <h6> JAVASCRIPT </h6>
                        </div>
                        <div className='my-auto mx-auto mt-4'>
                            <h6> REACT JS </h6>
                            <h6> ANGULAR </h6>
                            <h6> MERN </h6>
                            <h6> NODE JS </h6>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;