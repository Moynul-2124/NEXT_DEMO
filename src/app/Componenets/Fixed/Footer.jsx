


import React from 'react';
import { FaApple } from "react-icons/fa";
import { IoLogoAppleAr } from "react-icons/io5";
const Footer = () => {
    return (
        <div>
            <div>

                <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">

                    <div>

                        <div className='w-[286px] mx-auto flex flex-col gap-6'>


                            <img width={120} src="/logo (1).png" alt="Sex Hobe" />

                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, neque.</p>

                            <div className='flex gap-3'>


                                <button className="btn btn-xs text-[14px] sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">

                                    <div className='flex items-center'><div className='text-3xl'><FaApple /></div>
                                        <p className='translate-y-0.5'>Get It on</p></div>


                                </button>

                                <button className="btn btn-xs text-[14px] sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"><div className='flex items-center gap-1'><div className='text-3xl'><IoLogoAppleAr /></div>
                                    <p className='translate-y-0.5'>Download</p></div>



                                </button>


                            </div>

                        </div>










                    </div>








                    <nav>
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                    <form>
                        <h6 className="footer-title">Newsletter</h6>
                        <fieldset className="w-80">
                            <label>Enter your email address</label>
                            <div className="join mt-5">
                                <input
                                    type="text"
                                    placeholder="username@site.com"
                                    className="input input-bordered join-item" />
                                <button className="btn btn-primary join-item">Subscribe</button>
                            </div>
                        </fieldset>
                    </form>
                </footer>


            </div>
        </div>
    );
};

export default Footer;