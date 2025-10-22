



import React from 'react';
import Cloth2 from '../FIxed/Cloth2';

const Cloth = async() => {
    
    const dhon = await fetch("http://localhost:3004/cloth")
    
    const mon = await dhon.json()
    
    
    return (
        <div>
            <div className='flex container py-12 justify-between  mx-auto'>


                {

                        mon.map((chumu)=>(

                                <div key={chumu.id}>




                                    <p><Cloth2 dudh={chumu}></Cloth2></p>
                                </div>

                                



                        ))

                }

                   



            </div>
        </div>
    );
};

export default Cloth;