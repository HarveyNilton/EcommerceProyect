import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Accordion } from 'react-bootstrap';
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
            <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Accordion Item #1</Accordion.Header>
                    <Accordion.Body>
                        {category?.map(cate => (
                            <li className="list-inside">
                                <a href="#" className='nav-link nav-link-inside'>{cate.name}</a>
                            </li>
                        ))}
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            {/*<nav className='nav-menu'>
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

            </nav>*/}

        </div>
    );
};

export default Menu;