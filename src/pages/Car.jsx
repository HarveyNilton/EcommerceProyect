import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Car = ({ products }) => {

    const navigate = useNavigate()


    return (
        <div className='cards'>
            <div className="sub-card" onClick={() => navigate(`/product/${products.id}`)}>


                <div className="container-img-card">
                    <img className='img-card' src={products?.images[0].url} />
                    <img className='img-card2' src={products?.images[1].url} />
                </div>

                <h2>{products.brand} <br /><span>{products?.title}</span></h2>
                <h2>Price<br /><span>S/.{products?.price}</span></h2>

            </div>
            <div className='container-button-card'>
                <div className='button-card'>
                    <svg className='svg-icon-button' version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 480 480" ><g><g><g><path d="M177.28,368c-30.928,0-56,25.072-56,56c0,30.928,25.072,56,56,56c30.913-0.035,55.965-25.087,56-56 C233.28,393.072,208.208,368,177.28,368z M177.28,464c-22.091,0-40-17.909-40-40c0-22.091,17.909-40,40-40 c22.08,0.026,39.974,17.92,40,40C217.28,446.091,199.371,464,177.28,464z" /><path d="M369.28,368c-30.928,0-56,25.072-56,56c0,30.928,25.072,56,56,56c30.913-0.035,55.965-25.087,56-56 C425.28,393.072,400.208,368,369.28,368z M369.28,464c-22.091,0-40-17.909-40-40c0-22.091,17.909-40,40-40 c22.08,0.026,39.974,17.92,40,40C409.28,446.091,391.371,464,369.28,464z" /><path d="M470.72,112H82.136L57.064,6.16C56.211,2.551,52.989,0.001,49.28,0h-40c-4.418,0-8,3.582-8,8s3.582,8,8,8h33.672 l70.544,297.84c0.853,3.609,4.075,6.159,7.784,6.16h304c4.418,0,8-3.582,8-8s-3.582-8-8-8H127.608l-11.368-48H440.4 c4.418,0.442,8.359-2.781,8.801-7.199s-2.781-8.359-7.199-8.801c-0.533-0.053-1.069-0.053-1.602,0H112.48l-11.368-48H455.6 c4.418,0,8-3.582,8-8s-3.582-8-8-8H97.28l-11.36-48h384.8c4.418,0,8-3.582,8-8S475.138,112,470.72,112z" /></g></g></g></svg>
                </div>
            </div>


        </div>
    );
};

export default Car;