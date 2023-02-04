import React from 'react';
import './slide.css'

const Slide = ({ productImg }) => {

    console.log(productImg.images?.[0].url + 'lalalal')

    return (
        <div className='container-general'>

            {
                productImg.images?.map((imgProd, index) => (
                    <input type="radio" id={index} name='image-slide' hidden />

                ))
            }
          
         

            <section className='slide'>

                {
                    productImg.images?.map((imgProd, index) => (
                        <figure className='item-slide'>
                            <img className='img-slide' src={imgProd.url} alt="" />

                        </figure>

                    ))
                }

            </section>

            <section className='pagination'>
                {
                    productImg.images?.map((imgProd, index) => (
                        <label className='pagination-item' htmlFor={index}>

                            <img className='img-pag' src={imgProd.url} alt="" />
                        </label>


                    ))
                }

            </section>

        </div>
    );
};


export default Slide;

