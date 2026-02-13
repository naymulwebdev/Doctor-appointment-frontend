import React from 'react';
import loading from '../../assets/loading.gif'

const Loading = () => {
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <img className='img-fluid ' src={loading} alt="website loading" />
        </div>
    );
};

export default Loading;