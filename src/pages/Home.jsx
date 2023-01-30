import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Menu from '../assets/menu-components/Menu';
import { filterforNamethunk, filterProductsthunk, getProductsthunk } from '../store/slice/products.slice';
import '../style/home.css'
import Car from './Car';

const Home = () => {

    const dispatch = useDispatch()

    const products = useSelector(state => state.products)

    const [category, setCategory] = useState([])
    const [newSearch, setNewSearch] = useState('')


    useEffect(() => {
        dispatch(getProductsthunk())

        axios.get('https://e-commerce-api-v2.academlo.tech/api/v1/categories')
            .then(res => setCategory(res.data))
    }, [])



    return (
        <div className='home' >
            <div className='container-input-home'>

                <input type="text" value={newSearch} placeholder ='What are you looking for?' 
                    onChange={(e) => setNewSearch(e.target.value)} />
                <button onClick={() => dispatch(filterforNamethunk(newSearch))}>Search</button>
            </div>


            <select className='select-home' onChange={(e)=> dispatch(filterProductsthunk(e.target.value))}>
                {category.map(categor => ((
                    <option key={categor.id} value={categor.id}>{categor.name}</option>
                )))
                }
            </select>
            <div className='container-car'  >
                {
                    products.map(produc => (
                        <div key={produc.id} >
                            <Car products={produc} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Home;