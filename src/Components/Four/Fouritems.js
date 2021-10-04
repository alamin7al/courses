import React from 'react';

const Fouritems = (props) => {
    const { name, price, img, documantaion } = props.course
    return (
        <div className='border border-5 m-3 p-1 '>
            <img className='w-100  my-2' src={img} alt="" />

            <h4>Name: {name} </h4>
            <h5>Course Price: {price} </h5>
            <p>Documantation: {documantaion} </p>
        </div>
    );
};

export default Fouritems;