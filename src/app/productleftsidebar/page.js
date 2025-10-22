



import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import PP1 from './Fixed/PP1';
import PP2 from './Fixed/PP2';

const page = async () => {


    const dhon = await fetch("http://localhost:3004/hot")

    const mon = await dhon.json()

    const body = await fetch("http://localhost:3004/topics")

    const cody = await body.json()


    return (
        <div className='bg-white min-h-screen text-black'>


            <div>


                <div>


                    <div className='flex border p-3 rounded-md shadow-xl container mx-auto justify-between'>


                        <h1 className='font-semibold'>Product Page</h1>

                        <div className='flex items-center gap-4'>


                            <h1>Home</h1>

                            <IoIosArrowForward />

                            <h1 className='text-green-600'>Product Page</h1>

                        </div>


                    </div>






                </div>






            </div>



            <div className='flex container mx-auto justify-between  py-12'>


                <div className='w-[25%] text-gray-600 border-green-400 min-h-screen p-4 rounded-xl border'>


                    <div className='flex items-center justify-between border-b pb-2'>

                        <p className='text-3xl font-bold text-green-800'>Category</p>

                        <IoIosArrowDown className='text-2xl font-bold' />


                    </div>



                    <div className='pt-4'>


                        {mon.map((gu) => (

                            <div key={gu.name}>

                                <p>{gu.category.map(nunu =>
                                    <p><PP1 kamranga={nunu}></PP1></p>
                                )}</p>
                            </div>

                        ))}


                    </div>

                    <div className='flex items-center justify-between border-b pb-2 pt-8'>

                        <p className='text-3xl font-bold text-green-800'>Weight</p>

                        <IoIosArrowDown className='text-2xl font-bold' />


                    </div>


                    <div className='pt-4'>


                        {mon.map((gu) => (

                            <div key={gu.name}>

                                <p>{gu.weight.map(nunu =>
                                    <p><PP1 kamranga={nunu}></PP1></p>
                                )}</p>
                            </div>

                        ))}


                    </div>




                    <div className='flex items-center justify-between border-b pb-2 pt-8'>

                        <p className='text-3xl font-bold text-green-800'>Tags</p>

                        <IoIosArrowDown className='text-2xl font-bold' />


                    </div>


                    <div className='pt-4'>


                        {mon.map((gu) => (

                            <div key={gu.name}>

                                <p>{gu.tags.map(nunu =>
                                    <p><PP1 kamranga={nunu}></PP1></p>
                                )}</p>
                            </div>

                        ))}


                    </div>



                    <div className='flex items-center justify-between border-b pb-2 pt-8'>

                        <p className='text-3xl font-bold text-green-800'>Price</p>

                        <IoIosArrowDown className='text-2xl font-bold' />


                    </div>


                    <div className='pt-4'>


                        {mon.map((gu) => (

                            <div key={gu.name}>

                                <div className='flex justify-center gap-16 p-6 bg-[#F8F8FB] rounded-md containe mx-auto w-[50%] '><p>{gu.price.from}</p>
                                    <p>{gu.price.to}</p></div>
                            </div>

                        ))}


                    </div>



                    <div className='flex items-center justify-between border-b pb-2 pt-8'>

                        <p className='text-3xl font-bold text-green-800'>Details</p>

                        <IoIosArrowDown className='text-2xl font-bold' />


                    </div>


                    <div className='pt-4'>


                        {mon.map((gu) => (

                            <div key={gu.name}>

                                <div className='flex flex-col gap-6'>


                                    <p>{gu.tag}</p>
                                    <p className='text-2xl font-bold text-blue-800 hover:scale-75'>{gu.description}</p>
                                    <p className='-rotate-5 pb-4 font-extrabold'>{gu.availability}</p>


                                </div>
                            </div>

                        ))}


                    </div>







                </div>




                <div className='w-[60%] overflow-hidden h-[750px] object-content rounded-xl '>


                    <div>

                            {cody.map((gui)=>(



                                <div key={gui.id}><PP2 mistymalta={gui}></PP2></div>


                            ))}





                    </div>



                               









                </div>





            </div>








        </div>
    );
};

export default page;