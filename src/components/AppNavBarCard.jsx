import React, { useEffect, useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addProducCarthunk, purchaseCartthunk } from '../store/slice/addProductsCar.slice';
import '../style/app-nav-bar-car.css'

const AppNavBarCard = ({ shows, handleClose }) => {

    const addProductCar = useSelector(state => state.addProductCar)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(addProducCarthunk())
    }, [])

    const [quantityProduct, setQuantityProduct] = useState(1)

    const subTotalPrice =(price)=>{
        const subTotalPrecie = price
        return subTotalPrecie * quantityProduct
    }

     

    return (
        <div>
            <Offcanvas show={shows} onHide={handleClose} placement='end'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>My Car</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul className='container-product-car'>
                        {addProductCar.map(productCar => (
                            <li className='card-product' key={productCar.id}>
                                <div className='container-img-car-product'>
                                    <img className='img-product-car' src={productCar.product.images[1].url} alt="" />
                                </div>
                                <div className='container-action'>
                                    <div className='container-title'>
                                        <div className='title-button'>
                                            <div><p>{productCar.product.title}</p></div>
                                            <div className='container-button'>


                                                <button onClick={()=> setQuantityProduct(quantityProduct-1)} disabled={quantityProduct===1} className='button-prev'>-</button>
                                                <div className='count'>{productCar.quantity +quantityProduct}</div>
                                                <button onClick={()=>setQuantityProduct(quantityProduct+1)} className='button-next'>+</button>
                                            </div>
                                        </div>
                                        <div className='container-icon-delete'>
                                            <svg className='icon-delete' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><g id="Layer_13" data-name="Layer 13"><path d="M20.24,2.05H4.76A2.72,2.72,0,0,0,2.05,4.76V7a.5.5,0,0,0,.5.5H4.26V20.24A2.72,2.72,0,0,0,7,23H18a2.72,2.72,0,0,0,2.71-2.71V7.47h1.71A.5.5,0,0,0,23,7V4.76A2.72,2.72,0,0,0,20.24,2.05Zm-.5,18.19A1.72,1.72,0,0,1,18,22H7a1.72,1.72,0,0,1-1.71-1.71V7.47H19.74ZM22,6.47H3.05V4.76A1.72,1.72,0,0,1,4.76,3.05H20.24A1.72,1.72,0,0,1,22,4.76Z" /><path d="M9.18,18.53a.5.5,0,0,0,.5-.5V11.39a.5.5,0,0,0-.5-.5.51.51,0,0,0-.5.5V18A.51.51,0,0,0,9.18,18.53Z" /><path d="M15.82,18.53a.51.51,0,0,0,.5-.5V11.39a.51.51,0,0,0-.5-.5.5.5,0,0,0-.5.5V18A.5.5,0,0,0,15.82,18.53Z" /></g></svg>

                                        </div>
                                    </div>
                                    <div className='container-price'>
                                        <div className='total-name'>Total</div>
                                        <div className='precio-total'>S/.{subTotalPrice(productCar.product.price)}</div>
                                    </div>
                                </div>
                            </li>
                        ))

                        }
                    </ul>

                </Offcanvas.Body>
                <div>
                    <div>
                        <div className='total-name'>Total</div>
                        <div className='precio-total'>S/.{}</div>
                    </div>
                    <button onClick={()=> dispatch(purchaseCartthunk())}>ChecKCout</button>
                </div>

            </Offcanvas>
         
        </div>
    );
};

export default AppNavBarCard;