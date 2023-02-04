import React from 'react';
import './slide.css'

const Slide = ({productImg}) => {
    
    console.log(productImg.images?.[0].url + 'hahahahah')
    return (
        <div className='container-general'>

            <input type="radio" id='1' name='image-slide' hidden />
            <input type="radio" id='2' name='image-slide' hidden />
            <input type="radio" id='3' name='image-slide' hidden />

            <section className='slide'>
            
                

                
            </section>

          { /* <section className='pagination'>

                <label className='pagination-item' htmlFor="1">
                    <img className='img-pag' src={imgBandera} alt="" />
                </label>

                <label className='pagination-item' htmlFor="2">
                    <img className='img-pag'  src={imgPaisajeUno} alt="" />
                </label>

                <label className='pagination-item' htmlFor="3">
                    <img  className='img-pag' src={imgPaisajeDos} alt="" />
                </label>

            </section>*/}

        </div>
    );
};


export default Slide;

