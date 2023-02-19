// Imports react and the necessary bootstrap components
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


function Help() {
    const [show, setShow] = useState(false); // create a state variable called show and initialize it to false
    const handleClose = () => setShow(false); // define a function to close the Offcanvas
    const handleShow = () => setShow(true); // define a function to show the Offcanvas

    // define a function that returns a Tooltip component
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            How To Play
        </Tooltip>
    );

    // returns the HTML DOM elements for the overlay and off canvas menu
    return (
        <>
            <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
            >
                <Button id="helpBtn" onClick={handleShow}>
                    ?
                </Button>
            </OverlayTrigger>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton id="helpHeader">
                    <Offcanvas.Title>How To Play</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body id="helpBody">
                    <p>The aim of hangman is to guess all the letters in a randomly selected hidden word in as few guesses as possible to stop the the hangman from being hanged.</p>

                    <ul>
                        <li>When a new game of hangman starts a word is randomly selected. The word is displayed to the player as a series of underscores to represent the hidden letters of the word.</li>

                        <li>Select letters you think are in the word. When a correct letter is guessed, all instances of that letter are displayed in place of the underscores.</li>

                        <li>When a wrong letter is selected it brings the hangman closer to his end as shown in the hangman image.</li>

                        <li>If the player completes the word by selecting all its letters before the hangman is hanged then the player has succeeded. However if the hangman dies before the player completes the word then the player has failed.</li>
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

// exports component
export default Help