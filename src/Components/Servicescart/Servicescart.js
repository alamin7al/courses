import React from 'react';

const Servicescart = (props) => {
    const {name,documantaion,price,img}=props.service
    return (
        <div className='border border-5 m-3 p-3 w-100 shadow-lg p-3 mb-5 bg-body rounded '>
            <img className='img-fluid' src={img} alt="" />
            <h5>Name: {name} </h5>
            <p className='fst-italic'>Documantaion:{documantaion.slice(0,90)}</p>
            <p>Cource Fee: {price} </p>
        </div>
    );
};

export default Servicescart;