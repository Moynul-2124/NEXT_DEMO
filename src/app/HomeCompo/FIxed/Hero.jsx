


import React from 'react';
import Hero1 from './Hero1';

const Hero = async({chat}) => {
    
    const dhon = await fetch ("http://localhost:3008/products")

    const mon= await dhon.json()
    
    
    
    
    
    return (
        <div>
            <div>

                {mon.map((chumu)=>(


                        <div key={chumu.slug}>



                            <p><Hero1 kam={chat} nunu={chumu}></Hero1></p>


                        </div>


                ))}









            </div>
        </div>
    );
};

export default Hero;