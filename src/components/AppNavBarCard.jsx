import React, { useEffect } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addProducCarthunk } from '../store/slice/addProductsCar.slice';
import '../style/app-nav-bar-car.css'

const AppNavBarCard = ({ shows, handleClose }) => {

    const addProductCar = useSelector(state => state.addProductCar)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(addProducCarthunk())
    }, [])

    console.log(addProductCar);

    return (
        <div>
            <Offcanvas show={shows} onHide={handleClose} placement='end'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>My Car</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul className='container-product-car'>
                        {addProductCar.map(productCar => (
                            <li className='card-product' key={productCar.product.id}>
                                <div className='container-img-car-product'>
                                    <img className='img-product-car' src={productCar.product.images[0].url} alt="" />
                                </div>
                                <div className='container-action'>
                                    <div className='container-title'>
                                        <div className='title-button'>
                                            <div><p>{productCar.product.title}</p></div>
                                            <div className='container-button'>
                                                <button className='button-prev'>-</button>
                                                <div className='count'>1</div>
                                                <button className='button-next'>+</button>
                                            </div>
                                        </div>
                                        <div className='container-icon-delete'>
                                            <svg className='icon-delete' viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg"><g id="Layer_13" data-name="Layer 13"><path d="m4.26 20.24a2.72 2.72 0 0 0 2.74 2.76h11a2.72 2.72 0 0 0 2.71-2.71v-11.84h-16.45zm11.06-8.85a.5.5 0 0 1 .5-.5.51.51 0 0 1 .5.5v6.61a.51.51 0 0 1 -.5.5.5.5 0 0 1 -.5-.5zm-6.64 0a.51.51 0 0 1 .5-.5.5.5 0 0 1 .5.5v6.61a.5.5 0 0 1 -.5.5.51.51 0 0 1 -.5-.5z" /><path d="m20.24 2.05h-15.48a2.72 2.72 0 0 0 -2.71 2.71v2.24a.49.49 0 0 0 .37.48h.13 19.9.13a.49.49 0 0 0 .42-.48v-2.24a2.72 2.72 0 0 0 -2.76-2.71z" /></g></svg>
                                        </div>
                                    </div>
                                    <div className='container-price'>
                                        <div className='total-name'>Total</div>
                                        <div className='precio-total'>S/.{productCar.product.price}</div>
                                    </div>
                                </div>
                            </li>
                        ))

                        }
                    </ul>

                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
};

export default AppNavBarCard;