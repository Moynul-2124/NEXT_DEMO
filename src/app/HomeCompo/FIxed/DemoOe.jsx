


import React from 'react';

const DemoOe = async () => {

    const dhon = await fetch("http://localhost:3004/features")
    const mon = await dhon.json()



    return (
        <div>
            <div className='flex container  mx-auto justify-between gap-8 py-8'>

                {


                    mon.map((dudherpochasutki) => (


                        <div className='border flex gap-4 p-5 text-start items-center rounded-md w-[376px]  mx-auto'>

                            <img width={86} src={dudherpochasutki.image} alt="Kakoli Vege" />
                            <div className='flex flex-col gap-1'>

                                <p className='font-bold'>{dudherpochasutki.title}</p>
                                <p>{dudherpochasutki.description}</p>

                            </div>




                        </div>


                    ))




                }






            </div>
        </div>
    );
};

export default DemoOe;