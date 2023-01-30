import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './menu.css'

const Menu = () => {

    const [category, setCategory] = useState()

    useEffect(() => {
        axios.get('https://e-commerce-api-v2.academlo.tech/api/v1/categories')
        .then(res => setCategory(res.data))
    }, [])
/*
    const listElements = document.querySelectorAll('.list-button-click')

    listElements.forEach(listElement => {
        listElement.addEventListener('click',()=>{
            listElement.classList.toggle('arrow')

            const height = 0
            const menu = listElement.nextElementSibling
            menu.scrollHeight
            if (menu.clientHeight =='0') {
               height = menu.scrollHeight
            }
            menu.style.height = `${height}px`
        })
    });
*/

    return (
        <div>

            <nav className='nav-menu'>
                <ul className='list'>

                    <li className="list-item">
                        <div className="list-button">
                            <a href="#" className='nav-link'>Inicio</a>
                        </div>
                    </li>

                    <li className="list-item list-item-click">
                        <div className="list-button list-button-click">
                            <a href="#" className='nav-link'>Servicios</a>
                            <h1 className='list-arrow'>{'>'}</h1>
                        </div>

                        <ul className="list-show">
                            {category?.map(cate =>(
                                <li className="list-inside">
                                <a href="#" className='nav-link nav-link-inside'>{cate.name}</a>
                            </li>
                            ))}
                           
                        </ul>
                    </li>

                    <li className="list-item">
                        <div className="list-button">
                            <a href="#" className='nav-link'>Estadisticas</a>
                        </div>
                    </li>

                    <li className="list-item list-item-click">
                        <div className="list-button list-button-click">
                            <a href="#" className='nav-link'>Notificaciones</a>
                            <h1 className='list-arrow'>{'>'}</h1>
                        </div>

                        <ul className="list-show">
                            <li className="list-inside">
                                <a href="#" className='nav-link nav-link-inside'>Servicios</a>
                            </li>

                            <li className="list-inside">
                                <a href="#" className='nav-link nav-link-inside'>Servicios</a>
                            </li>

                            <li className="list-inside">
                                <a href="#" className='nav-link nav-link-inside'>Servicios</a>
                            </li>
                        </ul>
                    </li>

                    <li className="list-item">
                        <div className="list-button">
                            <a href="#" className='nav-link'>Contacto</a>
                        </div>
                    </li>

                </ul>

            </nav>

        </div>
    );
};

export default Menu;