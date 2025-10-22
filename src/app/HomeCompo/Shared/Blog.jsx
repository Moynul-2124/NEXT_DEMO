



import React from 'react';
import Blog1 from '../FIxed/Blog1';

const Blog = async() => {
    
    const dhon =await fetch("http://localhost:3004/blog")

    const mon = await dhon.json()
    
    
    
    
    return (
        <div>
            <div className='grid grid-cols-3 gap-12 pb-10 container mx-auto'>

                {



                        mon.map((guderroschehareuzzalkoe)=>(


                                <div>


                                    <p><Blog1 navichatlelombahouajai={guderroschehareuzzalkoe}></Blog1></p>


                                </div>



                        ))





                }

            </div>
        </div>
    );
};

export default Blog;