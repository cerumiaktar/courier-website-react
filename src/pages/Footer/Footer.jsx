import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#9BDAEA80]'>
            <footer className="footer sm:footer-horizontal text-base-content p-10 container mx-auto">
                <aside>
                    <img className='w-16' src="https://i.ibb.co.com/9TBpjC8/courier-logo-1.png" alt="" />
                    <p className='text-base'>
                        This is committed to delivering fast, <br /> reliable, and secure courier services.
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">About</h6>
                    <a className="link link-hover">Terms & Condition</a>
                    <a className="link link-hover">Return Policy</a>
                    <a className="link link-hover">Exchange Policy</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Contact</h6>
                    <a className="link link-hover">Address: Mohammadpur, Dhaka</a>
                    <a className="link link-hover">Phone: 01234567890</a>
                    <a className="link link-hover">Email: info@gmail.com</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Follow Us</h6>
                    <a className="link link-hover">Facebook</a>
                    <a className="link link-hover">Youtube</a>
                    <a className="link link-hover">LinkedIn</a>
                </nav>
            </footer>
            <div className='bg-[#068DBE] text-center py-2'>
                <h2 className='text-lg text-white' >© Copyright 2024 All rights reserved by <span className='font-bold'>Rumi Aktar</span></h2>
            </div>
        </div>

    );
};

export default Footer;