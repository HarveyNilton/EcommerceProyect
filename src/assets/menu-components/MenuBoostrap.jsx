import React from 'react';
import { Offcanvas } from 'react-bootstrap';
import Menu from './Menu';

const MenuBoostrap = ({showMenu,handleCloseMenu}) => {
    return (
        <div>
            <Offcanvas show={showMenu} onHide={handleCloseMenu} >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>

                    {<Menu/>}
                    
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
};

export default MenuBoostrap;