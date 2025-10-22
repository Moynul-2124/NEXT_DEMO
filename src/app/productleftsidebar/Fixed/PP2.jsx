



import React from 'react';
import { FaGripLinesVertical } from "react-icons/fa6";
import { BsDot } from "react-icons/bs";
import Link from 'next/link';
const PP2 = ({ mistymalta }) => {
    return (
        <div>

            <div className='flex p-4 '>



                <div>


                    <img width={400} className='h-[460px] border border-lime-600 rounded-xl' src={mistymalta?.image} alt="SEX HOBE" />


                </div>

                <div className='flex flex-col pl-8 gap-6'>


                    <div className='flex flex-col text-[22px] font-normal items-center  container  mx-auto'>

                        <p>{mistymalta?.name},</p>
                        <p>{mistymalta?.flavour} Flavour,</p>
                        <p>{mistymalta?.category}.</p>

                    </div>


                    <div className='flex container items-center gap-4 mx-auto justify-center'>

                        <div>

                            <div className="rating gap-1">
                                <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" aria-label="1 star" />
                                <input type="radio" name="rating-3" className="mask mask-heart bg-orange-400" aria-label="2 star" defaultChecked />
                                <input type="radio" name="rating-3" className="mask mask-heart bg-yellow-400" aria-label="3 star" />
                                <input type="radio" name="rating-3" className="mask mask-heart bg-lime-400" aria-label="4 star" />
                                <input type="radio" name="rating-3" className="mask mask-heart bg-green-400" aria-label="5 star" />
                            </div>

                        </div>


                        <FaGripLinesVertical className='text-2xl' />

                        <div>


                            <p>{mistymalta?.ratings} Ratings</p>

                        </div>



                    </div>



                    <div className='flex justify-center gap-14'>


                        <div className='flex flex-col gap-2'>


                            <div className='flex gap-8 items-center'>


                                <p className='text-2xl font-bold'>$ {mistymalta?.price}.00</p>
                                <p>{mistymalta?.discount}</p>




                            </div>

                            <p>M.R.P : $ {mistymalta?.mrp}</p>





                        </div>



                        <div className='flex flex-col gap-2'>


                            <div className='flex flex-col gap-2'>


                                <p className='text-2xl font-bold'>SKU # {mistymalta?.sku}</p>
                                <p className='text-green-600'>{mistymalta?.availability}</p>




                            </div>







                        </div>







                    </div>



                    <div className='flex flex-col w-[546px] mx-auto gap-4 text-start'>


                        <p className=''>{mistymalta?.description}</p>

                        <div className='flex items-center gap-2'>

                            <BsDot className='text-3xl' />

                            <p><span className='font-semibold'>Closure</span> : {mistymalta?.specs.closure}</p>


                        </div>

                        <div className='flex items-center gap-2'>

                            <BsDot className='text-3xl' />

                            <p><span className='font-semibold'>Sole</span> : {mistymalta?.specs.sole}</p>


                        </div>

                        <div className='flex items-center gap-2'>

                            <BsDot className='text-3xl' />

                            <p><span className='font-semibold'>Width</span> : {mistymalta?.specs.width}</p>


                        </div>

                        <div className='flex items-center gap-2'>

                            <BsDot className='text-3xl' />

                            <p><span className='font-semibold'>Outer Material</span> : {mistymalta?.specs.outer_material}</p>


                        </div>

                    </div>



                    <div className='flex flex-col gap-2 items-center'>


                        <p className='font-semibold'>WEIGHT</p>
                        <div className='flex gap-4'>


                            {mistymalta?.available_weights.map(nunu =>


                                <p className='border rounded-md p-3 bg-green-800'>{nunu}</p>

                            )}

                        </div>









                    </div>






                </div>



            </div>


            <div className='mt-12'>

                <Link href={"/productleftsidebar/hi"}><button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">Responsive</button></Link>

            </div>


        </div>
    );
};

export default PP2;