




import Link from 'next/link';
import React from 'react';

const Hero1 = ({ nunu,kam }) => {
    return (
        <div>
            <div className='py-12'>


                <div key={nunu.slug}
                    className="hero min-h-screen"
                    style={{
                        backgroundImage:
                            "url(https://pyxis.nymag.com/v1/imgs/bef/54c/2351815d32ace76ba09a0d0b509c2afef0-19-black-the-fall-1.jpg)",
                    
                        
                            
                    
                    
                        }}
                >
                    <div className="hero-overlay"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className=" flex flex-col items-start justify-center -translate-x-58">
                            <h1 className="mb-5 text-2xl text-green-700 font-bold">Starting At {nunu?.price}</h1>
                            <p className="mb-5 text-3xl w-[689px] mx-auto font-semibold text-start">
                                {nunu?.description}
                            </p>
                            
                            <div key={nunu.slug}>

                                    <Link href={`/${nunu.slug}`}><button  className="btn btn-primary">{nunu?.slug}</button></Link>

                            </div>
                        </div>
                    </div>
                </div>














            </div>
        </div>
    );
};

export default Hero1;