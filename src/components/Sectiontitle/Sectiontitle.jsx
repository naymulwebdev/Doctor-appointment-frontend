import React from 'react';

const Sectiontitle = ({title,des}) => {
    return (
        <div className='w-[70%] md:text-center mx-auto space-y-4 md:space-y-8'>
            <h1 className='text-2xl md:text-5xl font-semibold'>{title}</h1>
            <p className='text-[#757373]'>{des}</p>
        </div>
    );
};

export default Sectiontitle;