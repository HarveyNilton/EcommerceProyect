import React from 'react';
import { Offcanvas } from 'react-bootstrap';

const AppNavBarCard = ({shows,handleClose}) => {
    return (
        <div>
             <Offcanvas show={shows} onHide={handleClose} placement='end'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
};

export default AppNavBarCard;