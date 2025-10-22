

import React from 'react';

const Feature1 = ({ balerchosha }) => {
    return (
        <div>
            <div>



                <div className="card card-border bg-[#F8840D] w-76 my-8">
                    <div className="card-body">

                        <div className='flex flex-col items-center text-center gap-2'>

                            <img width={120} src={balerchosha?.image} alt={balerchosha?.title} />

                            <h2 className="card-title">{balerchosha?.title}</h2>
                            <p>{balerchosha?.description}</p>   


                        </div>

                    </div>
                </div>





            </div>
        </div>
    );
};

export default Feature1;