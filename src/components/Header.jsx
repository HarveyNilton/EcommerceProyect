import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Menu from '../assets/menu-components/Menu';
import MenuBoostrap from '../assets/menu-components/MenuBoostrap';
import '../style/header.css'
import AppNavBarCard from './AppNavBarCard';


const Header = () => {

    const [clasheard, setClasHeard] = useState('')
    const [colorLogo, setColorLogo] = useState('')
    const [fillSvg, setFillSvg] = useState('')
    const [colorCar, setColorCar] = useState('')

    const [openMenu, setOpernMenu] = useState(false)

    window.addEventListener('scroll', () => {
        if (scrollY >= 25) {
            setClasHeard('scroll-bg')
            setColorLogo('coloChangeLogo h1')
            setFillSvg('changeColorFill')
            setColorCar('changeColorCantidadProduct')
        } else {
            setClasHeard('')
            setColorLogo('')
            setFillSvg('')
            setColorCar('')
        }
    })

    const [loginIcon, setLoginIcon] = useState(false)

    const submit = () => {
        setOpernMenu(!openMenu)
       /* setLoginIcon(!loginIcon)*/
    }

   
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showMenu, setShowMenu] = useState(false);
    const handleCloseMenu = () => setShowMenu(false);
    const handleShowMenu = () => setShowMenu(true);


    const logout = () => {
        /*const localToken = localStorage.getItem('token')*/
          const local = localStorage.setItem('token', '')   
         
         /* setLoginIcon(!loginIcon)*/
    }

    const addProductCar = useSelector(state => state.addProductCar)


    return (
        <div className={`header ${clasheard} `}>
            {/*<MenuBoostrap showMenu = {showMenu} handleCloseMenu={handleCloseMenu}/>*/}
            <div className='container-logo-nav'>
                {/*<svg id="Icons" className={`svg-icon ${fillSvg}`} onClick={handleShowMenu} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path id="Menu" d="m116 68h-104c-2.209 0-4-1.789-4-4s1.791-4 4-4h104c2.209 0 4 1.789 4 4s-1.791 4-4 4zm4 28c0-2.211-1.791-4-4-4h-104c-2.209 0-4 1.789-4 4s1.791 4 4 4h104c2.209 0 4-1.789 4-4zm0-64c0-2.211-1.791-4-4-4h-104c-2.209 0-4 1.789-4 4s1.791 4 4 4h104c2.209 0 4-1.789 4-4z" /></svg> */}
                <Link className={`logo-text ${colorLogo}`} to='/'>
                    <h1>e-commerce</h1>
                </Link>
            </div>

            <nav className='nav'>
                <div className='container-svg-icon'>
                  <Link to='/Login'>
                        <svg className={`svg-icon ${fillSvg}`} id="Capa_1" viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg"><g><path id="Person_1_" d="m240 0c-132.336 0-240 107.656-240 240s107.664 240 240 240 240-107.656 240-240-107.664-240-240-240zm0 96c44.108 0 80 35.892 80 80s-35.892 80-80 80-80-35.892-80-80 35.892-80 80-80zm0 336c-55.248 0-104.976-23.592-140.04-61.068 12.852-47.684 56.352-82.932 108.04-82.932h64c51.688 0 95.188 35.248 108.04 82.932-35.064 37.476-84.792 61.068-140.04 61.068z" /></g></svg>
                    </Link> 
                    


                </div>
                <div className='container-svg-icon'>
                <Link to='/Login' onClick={logout}>
                        <svg className={`svg-icon ${fillSvg}`} id="Layer_1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m256 0c141.385 0 256 114.615 256 256s-114.615 256-256 256-256-114.615-256-256 114.615-256 256-256zm-72.5 229.748a5.655 5.655 0 0 0 -5.643 5.648v41.204a5.657 5.657 0 0 0 5.643 5.652h108.3v39.59a7.19 7.19 0 0 0 10.986 6.1l52.327-32.559 53.5-33.283a7.189 7.189 0 0 0 0-12.211l-53.5-33.287-52.327-32.556a7.19 7.19 0 0 0 -10.986 6.105v39.591zm-83.5 131.461a5.66 5.66 0 0 0 5.645 5.649h79.3a5.66 5.66 0 0 0 5.645-5.649v-41.209a5.655 5.655 0 0 0 -5.645-5.643h-32.445v-116.712h32.44a5.654 5.654 0 0 0 5.645-5.645v-41.209a5.66 5.66 0 0 0 -5.645-5.649h-79.3a5.66 5.66 0 0 0 -5.64 5.649z" /></svg>
                    </Link>

                </div>
                <div className='container-svg-icon'>
                    <Link to='/purchases'>
                        <svg className={`svg-icon ${fillSvg}`} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m492 281h-67v-8c0-43.007812-34.988281-78-78-78s-78 34.992188-78 78v8h-73c-11.046875 0-20 8.953125-20 20v134c0 13.28125 3.265625 25.902344 9.414062 37h-105.414062c-22.804688 0-40-15.90625-40-37v-299h93v20c0 11.046875 8.953125 20 20 20s20-8.953125 20-20v-20h76v20c0 11.046875 8.953125 20 20 20s20-8.953125 20-20v-20h96v20c0 11.046875 8.953125 20 20 20s20-8.953125 20-20v-40c0-11.046875-8.953125-20-20-20h-116v-18c0-43.007812-34.988281-78-78-78s-78 34.992188-78 78v18h-113c-11.046875 0-20 8.953125-20 20v319c0 21.457031 8.503906 41.1875 23.945312 55.5625 14.847657 13.824219 34.753907 21.4375 56.054688 21.4375h352c44.113281 0 80-35.886719 80-80v-131c0-11.046875-8.953125-20-20-20zm-319-203c0-20.953125 17.046875-38 38-38s38 17.046875 38 38v18h-76zm136 195c0-20.953125 17.046875-38 38-38s38 17.046875 38 38v8h-76zm163 159c0 22.054688-17.945312 40-40 40h-176c-22.804688 0-40-15.90625-40-37v-114h53v21c0 11.046875 8.953125 20 20 20s20-8.953125 20-20v-21h76v21c0 11.046875 8.953125 20 20 20s20-8.953125 20-20v-21h47zm0 0" /></svg>
                    </Link>


                </div>


                <div className='container-svg-icon'>
                    <Link className='container-icon-car' onClick={handleShow} >
                        <svg className={`svg-icon ${fillSvg}`} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 480 480" ><g><g><g><path d="M177.28,368c-30.928,0-56,25.072-56,56c0,30.928,25.072,56,56,56c30.913-0.035,55.965-25.087,56-56 C233.28,393.072,208.208,368,177.28,368z M177.28,464c-22.091,0-40-17.909-40-40c0-22.091,17.909-40,40-40 c22.08,0.026,39.974,17.92,40,40C217.28,446.091,199.371,464,177.28,464z" /><path d="M369.28,368c-30.928,0-56,25.072-56,56c0,30.928,25.072,56,56,56c30.913-0.035,55.965-25.087,56-56 C425.28,393.072,400.208,368,369.28,368z M369.28,464c-22.091,0-40-17.909-40-40c0-22.091,17.909-40,40-40 c22.08,0.026,39.974,17.92,40,40C409.28,446.091,391.371,464,369.28,464z" /><path d="M470.72,112H82.136L57.064,6.16C56.211,2.551,52.989,0.001,49.28,0h-40c-4.418,0-8,3.582-8,8s3.582,8,8,8h33.672 l70.544,297.84c0.853,3.609,4.075,6.159,7.784,6.16h304c4.418,0,8-3.582,8-8s-3.582-8-8-8H127.608l-11.368-48H440.4 c4.418,0.442,8.359-2.781,8.801-7.199s-2.781-8.359-7.199-8.801c-0.533-0.053-1.069-0.053-1.602,0H112.48l-11.368-48H455.6 c4.418,0,8-3.582,8-8s-3.582-8-8-8H97.28l-11.36-48h384.8c4.418,0,8-3.582,8-8S475.138,112,470.72,112z" /></g></g></g></svg>
                        <div className={`cantidad-product ${colorCar}`}>{addProductCar.length}</div>
                    </Link>

                </div>
                {<AppNavBarCard shows={show} handleClose={handleClose}/>}
            </nav>
        </div>
    );
};

export default Header;