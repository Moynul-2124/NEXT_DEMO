



import React from 'react';

const Blog1 = ({ navichatlelombahouajai }) => {



    return (
        <div>
            <div>


                <div className="card  flex gap-4  flex-col w-96 shadow-sm">
                    <figure>
                        <img src={navichatlelombahouajai?.image} alt="Spit" />
                    </figure>
                    <div>
                        <div className="flex flex-col p-2 gap-2">
                            <h2 className="card-title">
                                {navichatlelombahouajai?.title}

                            </h2>
                            <p>{navichatlelombahouajai?.description}</p>

                        </div>

                    </div>
                </div>








            </div>
        </div>
    );
};

export default Blog1;