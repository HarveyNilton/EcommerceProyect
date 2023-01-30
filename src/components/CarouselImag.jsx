import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../components/carousel.css'



const CarouselImag = ({ productImg }) => {


    return (
        <div>
 <Carousel className='container-carousel'>
            <Carousel.Item className='item-img' id='item1' >
                <img
                    className="img-detail" 
                    src={productImg?.images?.[0].url}
                />
             
              
            </Carousel.Item>
            <Carousel.Item className='item-img' id='item2' >
                <img
                    className="img-detail" 
                    src={productImg?.images?.[1].url}
                />

            </Carousel.Item>
            <Carousel.Item className='item-img' id='item3' >
                <img
                    className="img-detail"  
                    src={productImg?.images?.[2].url}
                />
            </Carousel.Item>

        </Carousel>

        </div>
       

        
    );
};

export default CarouselImag;