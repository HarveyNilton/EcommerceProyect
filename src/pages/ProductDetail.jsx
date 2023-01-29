import React, { useEffect, useState } from 'react';
import '../style/product-detail.css'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '../store/slice/loading.slice';
import { filterProductsthunk } from '../store/slice/products.slice';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductDetail = () => {

    const { id } = useParams()
    const [product, setProduct] = useState({})
    const dispatch = useDispatch()

    const productsRelacionados = useSelector(state => state.products)

    const newFilterProducts = productsRelacionados.filter(produc => produc.id !== Number(id))

    const navigate = useNavigate()

    useEffect(() => {
        dispatch(setLoading(true))
        axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`)
            .then(res => {
                setProduct(res.data)
                dispatch(filterProductsthunk(res.data.category.id))
            })
            .finally(() => dispatch(setLoading(false)))
    }, [id])


    return (
        <div className='product-detail'>
            <div className='container-link'>
                <Link className='link-product-detail' to='/'>Home </Link>
                <li> {product?.title}</li>
            </div>



            <section className='container-product'>

                <div className='container-img-detail'>

                    <figure className='container-img-general'>
                        <img
                            className="img-detail"
                            src={product?.images?.[0].url} alt=""
                        />

                    </figure>

                    <figure className='container-img-detail-scroll'>
                        <div className='img-cuadro'>
                            <img className='img-detail-scroll' src={product?.images?.[0].url} alt="" />
                        </div>         <div className='img-cuadro'>
                            <img className='img-detail-scroll' src={product?.images?.[1].url} alt="" />

                        </div>

                        <div className='img-cuadro'>
                            <img className='img-detail-scroll' src={product?.images?.[2].url} alt="" />
                        </div>

                    </figure>
                </div>

                <div className='container-description-detail'>
                    <h6> {product?.brand}</h6>
                    <h3> {product?.title}</h3>
                    <p>{product?.description}</p>
                    <div className='container-precios'>
                        <div className='price-cont'>
                            <h2 className='item'>Price</h2>
                            <h3> S/.{product?.price}</h3>
                        </div>
                        <div className='quantity-cont'>
                            <h2 className='item'>Quantity</h2>
                            <div className='container-button-detail'>
                                <button className='button-deatil'>-</button>
                                <div>1</div>
                                <button className='button-deatil'>+</button>
                            </div>
                        </div>

                    </div>
                    <button className='button-add-card'>Add to card</button>
                </div>


            </section>

            <div className='container-gene-simile'>
                <h3 className='text-simile'>Discover similar items</h3>
                <div className='container-card-simile'>

    
                    {
                        newFilterProducts.map(relaciProduc => (
                            <div className='card-simile' key={relaciProduc.id} onClick={() => navigate(`/product/${relaciProduc.id}`)}>
                                <div className="container-img-card-simile">
                                    <img className='img-card-simile' src={relaciProduc?.images[0].url} />
                                    <img className='img-car2-simile' src={relaciProduc?.images[1].url} />
                                </div>

                                <h2>{relaciProduc.brand} <br /><span>{relaciProduc?.title}</span></h2>
                                <p>Price <br />S/.{relaciProduc?.price}</p>

                                <div className='container-button-card-simile'>
                                    <div className='button-card-simile'>
                                        <svg className='svg-icon-button-simile' version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 480 480" ><g><g><g><path d="M177.28,368c-30.928,0-56,25.072-56,56c0,30.928,25.072,56,56,56c30.913-0.035,55.965-25.087,56-56 C233.28,393.072,208.208,368,177.28,368z M177.28,464c-22.091,0-40-17.909-40-40c0-22.091,17.909-40,40-40 c22.08,0.026,39.974,17.92,40,40C217.28,446.091,199.371,464,177.28,464z" /><path d="M369.28,368c-30.928,0-56,25.072-56,56c0,30.928,25.072,56,56,56c30.913-0.035,55.965-25.087,56-56 C425.28,393.072,400.208,368,369.28,368z M369.28,464c-22.091,0-40-17.909-40-40c0-22.091,17.909-40,40-40 c22.08,0.026,39.974,17.92,40,40C409.28,446.091,391.371,464,369.28,464z" /><path d="M470.72,112H82.136L57.064,6.16C56.211,2.551,52.989,0.001,49.28,0h-40c-4.418,0-8,3.582-8,8s3.582,8,8,8h33.672 l70.544,297.84c0.853,3.609,4.075,6.159,7.784,6.16h304c4.418,0,8-3.582,8-8s-3.582-8-8-8H127.608l-11.368-48H440.4 c4.418,0.442,8.359-2.781,8.801-7.199s-2.781-8.359-7.199-8.801c-0.533-0.053-1.069-0.053-1.602,0H112.48l-11.368-48H455.6 c4.418,0,8-3.582,8-8s-3.582-8-8-8H97.28l-11.36-48h384.8c4.418,0,8-3.582,8-8S475.138,112,470.72,112z" /></g></g></g></svg>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;