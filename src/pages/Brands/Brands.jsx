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
            <div className=" flex justify-center gap-3 mt-6">
                <p className="w-3 h-3 bg-[#068DBE] rounded-full"></p>
                <p className="w-3 h-3 bg-[#D9D9D9] rounded-full"></p>
                <p className="w-3 h-3 bg-[#D9D9D9] rounded-full"></p>
            </div>
        </div>
    );
};

export default Brands;