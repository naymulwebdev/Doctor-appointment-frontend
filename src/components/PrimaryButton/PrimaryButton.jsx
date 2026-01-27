import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <div className='bg-primary rounded-lg p-5 w-auto text-center'>
            <button>{children}</button>
        </div>
    );
};

export default PrimaryButton;