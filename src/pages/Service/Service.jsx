import React from 'react';

const Service = ({service}) => {
    const {img, title, id} = service;
    return (
        <div className='border border-[#40C4D8] text-center py-8 rounded-xl'>
            <img className='w-40 mx-auto' src={img} alt="" />
            <h1 className='font-medium text-2xl'>{title}</h1>
        </div>
    );
};

export default Service;