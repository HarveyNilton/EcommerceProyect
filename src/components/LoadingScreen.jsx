import React from 'react';
import '../style/loading-screen.css'

const LoadingScreen = () => {
    return (
        <div className='container-loading'>
            <div className="lds-dual-ring"></div>
        </div>
    );
};

export default LoadingScreen;