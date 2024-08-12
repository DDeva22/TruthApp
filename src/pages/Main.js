import React from "react";
import "../pages/styles/Main.css";

import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';




import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import rawBSB from "../../Bibles/BSB.txt";
import rawKJV from "../../Bibles/KJV.txt";



import {useState} from "react";

const MainPage = () =>{
    const [show, setShow] = useState(false);
    const [modalContent, setModalContent] = useState("");
   

    const showSwitch = () =>{
        if (show === true){
            setShow(false);
        }
        else if (show === false){
            setShow(true);
        }
    }
    const modalContentSwitcher = (choice) =>{
        
        setShow(true);
        setModalContent(choice);
    }


    const bibleReader = (book, chapter, verse) =>{

    }

    const modalContentMap = {
        Books:
        <div id = "modalBook" className = "container modalBook">
            <div className = "row align-items-start">
                <div id = "OldTestament" className = "col">
                    <h1>Old Testament</h1>
                    <div className = "row">
                        <ul class="list-group col">
                        
                            <li class="list-group-item">Genesis</li>
                            <li class="list-group-item">Exodus</li>
                            <li class="list-group-item">Leviticus</li>
                            <li class="list-group-item">Numbers</li>
                            <li class="list-group-item">Deuteronomy</li>
                            <li class="list-group-item">Joshua</li>
                            <li class="list-group-item">Judges</li>
                            <li class="list-group-item">Ruth</li>
                            <li class="list-group-item">1 Samuel</li>
                            <li class="list-group-item">2 Samuel</li>
                            <li class="list-group-item">1 Kings</li>
                            <li class="list-group-item">2 Kings</li>
                            <li class="list-group-item">1 Chronicles</li>
                            <li class="list-group-item">2 Chronicles</li>
                            <li class="list-group-item">Ezra</li>
                            <li class="list-group-item">Nehemiah</li>
                            <li class="list-group-item">Esther</li>
                            <li class="list-group-item">Job</li>
                            <li class="list-group-item">Psalms</li>
                            
                        </ul>
                        <ul class="list-group col">
                            <li class="list-group-item">Proverbs</li>
                            <li class="list-group-item">Ecclesiastes</li>
                            <li class="list-group-item">Song of Solomon</li>
                            <li class="list-group-item">Isaiah</li>
                            <li class="list-group-item">Jeremiah</li>
                            <li class="list-group-item">Lamentations</li>
                            <li class="list-group-item">Ezekiel</li>
                            <li class="list-group-item">Daniel</li>
                            <li class="list-group-item">Hosea</li>
                            <li class="list-group-item">Joel</li>
                            <li class="list-group-item">Amos</li>
                            <li class="list-group-item">Obadiah</li>
                            <li class="list-group-item">Jonah</li>
                            <li class="list-group-item">Micah</li>
                            <li class="list-group-item">Nahum</li>
                            <li class="list-group-item">Habakkuk</li>
                            <li class="list-group-item">Zephaniah</li>
                            <li class="list-group-item">Haggai</li>
                            <li class="list-group-item">Zechariah</li>
                            <li class="list-group-item">Malachi</li>
                            
                            
                        </ul>
                    </div>
                </div>


                <div id = "NewTestament" className = "col">
                    <h1>New Testament</h1>
                    <div className = "row">
                        <ul class="list-group col">
                        
                            <li class="list-group-item">Matthew</li>
                            <li class="list-group-item">Mark</li>
                            <li class="list-group-item">Luke</li>
                            <li class="list-group-item">John</li>
                            <li class="list-group-item">Acts</li>
                            <li class="list-group-item">Romans</li>
                            <li class="list-group-item">1 Corinthians</li>
                            <li class="list-group-item">2 Corinthians</li>
                            <li class="list-group-item">Galatians</li>
                            <li class="list-group-item">Ephesians</li>
                            <li class="list-group-item">Philippians</li>
                            <li class="list-group-item">Colossians</li>
                            <li class="list-group-item">1 Thessalonians</li>
                            <li class="list-group-item">2 Thessalonians</li>
                            <li class="list-group-item">1 Timothy</li>
                            <li class="list-group-item">2 Timothy</li>
                            <li class="list-group-item">Titus</li>
                            <li class="list-group-item">Philemon</li>
                            <li class="list-group-item">Hebrews</li>
                            <li class="list-group-item">James</li>
                            
                        </ul>
                        <ul class="list-group col">
                            <li class="list-group-item">1 Peter</li>
                            <li class="list-group-item">2 Peter</li>
                            <li class="list-group-item">1 John</li>
                            <li class="list-group-item">2 John</li>
                            <li class="list-group-item">3 John</li>
                            <li class="list-group-item">Jude</li>
                            <li class="list-group-item">Revelation</li>
                            
                            
                        </ul>
                    </div>
                    

                </div>
            </div>
        </div>,
        Chapters:
        <>
            Chapters
        
        </>,
        Verses:
        <>
            Verses
        
        </>
    }





    return(
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">The Bible</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" onClick = {() => modalContentSwitcher("Books")}>Book</Nav.Link>
                        <Nav.Link href="#link" onClick = {() => modalContentSwitcher("Chapters")}>Chapter</Nav.Link>
                        <Nav.Link href="#link" onClick = {() => modalContentSwitcher("Verses")}>Verse</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                    
                    <Modal className = "modal-xl" show={show} onHide = {showSwitch}>
                        <Modal.Header closeButton>
                            <Modal.Title></Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {modalContentMap[modalContent]}
                        </Modal.Body>
                        
                    </Modal>
                </Container>
            </Navbar>
            



            








        </div>
    )
}
export default MainPage;