import React, { useEffect, useState } from 'react';
import Servicescart from '../Servicescart/Servicescart';
import '../../Components/Home/Home.css'
import Footer from '../Footer/Footer';
const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('educational.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h1 className='text muted fst-italic mt-5'> Our Services</h1>
            <div className="container">
                <div className="grid">
                    {
                        services.map(service => <Servicescart
                            key={service.id}
                            service={service}
                        ></Servicescart>)
                    }
                </div>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Services;