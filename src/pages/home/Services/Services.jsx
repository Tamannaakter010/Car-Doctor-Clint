import { useEffect, useState } from "react";
import ServiceCard from '../../../pages/home/Services/ServiceCard'

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        <div className="mt-4 mb-4">
            <div className="text-center">
                <h3 className="text-2xl text-orange-600 font-bold">Services</h3>
                <h2 className="text-4xl">Services Area</h2>
                <p>The term "car doctor" typically refers to a mechanic or 
                    auto repair technician who provides various services<br /> 
                    to maintain and repair vehicles.
                </p>
            </div>
           
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {services.map(service => (
    <ServiceCard
      key={service._id}
      service={service}
        className="h-[300px] w-full"
    />
  ))}
</div>


        </div>
    );
};

export default Services;
