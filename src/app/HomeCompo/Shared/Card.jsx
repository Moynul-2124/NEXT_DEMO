



import React from 'react';

const Card = async () => {

    const dhon = await fetch("http://localhost:3004/products")

    const mon = await dhon.json()






    return (
        <div className='relative'>
            <div className='grid  grid-cols-3 container mx-auto gap-8'>


                {mon.map((chumu) => (


                    <div>


                        <div className="card   w-76 shadow-sm">
                            <div className="card-body">
                                <div className='flex flex-col gap-3 justify-center items-center'>
                                    <img width={60} src="/c-1.png" alt="" />
                                    <h2 className="card-title">{chumu.slug}</h2>

                                    <p>{chumu.category}</p>
                                    <p>{chumu.size}</p>

                                    <div>



                                        <div className="rating">
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                                        </div>





                                    </div>
                                    <div className='flex gap-12'>


                                        <p>{chumu.price} Items</p>
                                        <p className='line-through'>{chumu.discountedPrice}</p>



                                    </div>


                                </div>

                            </div>
                        </div>









                    </div>



                ))}












            </div>




            <div>

                <p className='border w-[60px] ml-25 bg-green-500 absolute  top-2 -left-12 p-1 rounded-md flex justify-center'>30 %</p>

            </div>





        </div>
    );
};

export default Card;