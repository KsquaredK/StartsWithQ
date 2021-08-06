import React, { useContext } from "react"
import { FindWordContext } from "../FindWord/FindWordProvider";
import { Card, CardBody, CardTitle, Button, Row, Col } from 'reactstrap';
import "./Library.css";

/* This module handles each word displayed in the library list by
    • displaying and assigning attributes to the word, and
    • rendering a delete button which, on click,
    • invokes the deleteUserWord function exposed in the provider,
      passing in the argument of the selected word's id.*/

export const LibraryCard = ( {libraryWord} ) => {
    const {deleteUserWord} = useContext(FindWordContext)
    const handleDeleteWord = () => {
        console.log("delete", libraryWord.id, libraryWord.word)
        deleteUserWord(libraryWord.id)
    };


return (
    <Row>
        <Col sm>
            <Card className="library__card">
                <CardBody>
                    <CardTitle className="library__word" tag="h5">{libraryWord.word}</CardTitle>
                    <Button className="delete__library__word" 
                        outline color="secondary"
                        size="sm"
                        onClick={(event) => {
                        handleDeleteWord()}}>
                            Delete
                    </Button>
                </CardBody>
            </Card>
        </Col>
    </Row>

)
}

        

