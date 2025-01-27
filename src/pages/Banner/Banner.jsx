import React from 'react';

const Banner = () => {
    return (
        <div className='container mx-auto'>
            <div className="w-full flex flex-col md:flex-row justify-between items-center ">
                <div class="w-6/12 bg-[url('./images/skyblue.png')]">
                    <h1 class="md:text-5xl font-semibold">Book Your Courier in Minutes Hassle-Free Shipping</h1>
                    <p class="md:w-4/6 mt-3 mb-6">Our simple and quick booking process ensures a smooth, hassle-free
                        experience, allowing you to ship</p>
                    <button class="btn bg-[#068DBE] md:text-xl font-medium text-white">Contact Us</button>
                </div>
                <div class="w-6/12">
                    <img className='w-xl' src="https://i.ibb.co.com/KxG204s/courier-1.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;