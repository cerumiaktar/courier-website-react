import { useEffect, useState } from "react";
import Service from "../Service/Service";


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() =>{
        fetch('services.json')
        .then(res =>res.json())
        .then(data =>setServices(data))
    } ,[])
    return (
        <div className="container mx-auto mt-12 mb-12">
            <h1 className="text-3xl font-medium text-center">Out Services</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
                {
                    services.map((service, idx) =><Service key={idx} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;