



import React from 'react';
import Feature1 from '../FIxed/Feature1';

const Feature = async() => {
    
    const dhon = await fetch("http://localhost:3004/features")

    const mon = await dhon.json()
    
    
    
    
    
    return (
        <div>
            <div className=' flex justify-center gap-6 container mx-auto '>

                    {


                            mon.map((dhonerkit)=>(


                                    <div>


                                        <p><Feature1 balerchosha={dhonerkit}></Feature1></p>

                                    </div>


                            ))

                    }






            </div>
        </div>
    );
};

export default Feature;