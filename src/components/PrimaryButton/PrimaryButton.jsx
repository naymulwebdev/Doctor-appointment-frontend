import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <div className='bg-purple-500 p-5 m-2 w-auto'>
            <button>{children}</button>
        </div>
    );
};

export default PrimaryButton;