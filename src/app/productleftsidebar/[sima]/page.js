



import React from 'react';

const page = async({params}) => {
    
    
    const {sima} = await params
    
    
    return (
        <div>
            <div>

                    <p>I_LOVE_HOT_BOYS:{sima}</p>

            </div>
        </div>
    );
};

export default page;