import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => {
    const activeStyle = { fontWeight: "bold", color: "red" }

    return (
        <div>
            <div className='mt-4'>
                <NavLink to="/home" activeStyle={activeStyle} className='text-decoration-none m-4 fs-5 ' >Home</NavLink>
                <NavLink to="/services" activeStyle={activeStyle} className='text-decoration-none m-4 fs-5 ' >Services</NavLink>
                <NavLink to="/about" activeStyle={activeStyle}
                    className='text-decoration-none m-4 fs-5 ' >About</NavLink>
                <NavLink to="/cart" activeStyle={activeStyle} className='text-decoration-none m-4 fs-5 '>Carerer</NavLink>
            </div>





        </div>
    );
};

export default Header;