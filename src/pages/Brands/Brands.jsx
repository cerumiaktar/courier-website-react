import { useEffect, useState } from "react";
import Brand from "../Brand/Brand";



const Brands = () => {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        fetch('brands.json')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, [])
    return (
        <div className="container mx-auto mt-12 mb-12">
            <h1 className="text-3xl font-medium text-center mb-8">Our Valued Collaborations</h1>
            <div className="grid grid-cols-4 gap-6">
                {
                    brands.map(brand => <Brand brand={brand}></Brand>)
                }
            </div>
        </div>
    );
};

export default Brands;