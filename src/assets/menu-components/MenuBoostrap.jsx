import React from 'react';
import { Offcanvas } from 'react-bootstrap';
import Menu from './Menu';

const MenuBoostrap = ({shows,handleClose}) => {
    return (
        <div>
            <Offcanvas show={shows} onHide={handleClose} >
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