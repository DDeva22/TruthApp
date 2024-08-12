import React from "react";

import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';

const ModalPopup = (prop) =>{











    return(
        <div>

            <Modal show={prop.show} id = {prop.id} >
                <Modal.Header closeButton>
                    <Modal.Title>{prop.Title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{prop.content}</Modal.Body>
                <Button variant="secondary" onClick = {(e) =>{
                    console.log(e.target.parentElement.parentElement.className = "hide")
                }}>
                    Close
                </Button>
                    
                
            </Modal>
        </div>
    )
}
export default ModalPopup;