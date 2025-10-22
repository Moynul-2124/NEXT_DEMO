

import React from 'react';

const Cloth2 = ({ dudh }) => {
    return (
        <div>
            <div className='relative'>



                <div className="hero  w-[400px] h-[280px] mx-auto"
                    style={{
                        backgroundImage:
                            "url(https://c4.wallpaperflare.com/wallpaper/791/588/965/eye-wallpaper-preview.jpg)",
                    }}
                >
                    <div className="hero-overlay"></div>
                    <div className="hero-content  text-neutral-content text-center">
                        <div className="items-start flex flex-col pr-44 text-justify justify-start">
                            <h1 className="mb-5 text-xl font-bold">{dudh?.slug}</h1>
                            <p className="mb-5">
                                {dudh?.title}
                            </p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>






                <div>

                    <p className='border w-[60px] ml-25 bg-green-500 absolute  top-2 right-8 p-1 rounded-md flex justify-center'>30 %</p>

                </div>









            </div>
















        </div>
    );
};

export default Cloth2;