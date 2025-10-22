



import React from 'react';

const Title = ({gudu,vudu}) => {
    return (
        <div>
            <p className='text-3xl font-semibold container mx-auto text-[#0056B3]'>{gudu}</p>
            <p className='text-gray-500'>{vudu}</p>
        </div>
    );
};

export default Title;