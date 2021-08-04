import React, { useContext } from "react"
import { FindWordContext } from "../FindWord/FindWordProvider";
import "./Library.css";

/* This module handles each word displayed in the library list by
    • displaying and assigning attributes to the word, and
    • rendering a delete button which, on click,
    • invokes the deleteUserWord function exposed in the provider,
      passing in the argument of the selected word's id.*/

export const LibraryCard = ( {libraryWord} ) => {
    const {deleteUserWord} = useContext(FindWordContext)
      
    const handleDeleteWord = () => {
        deleteUserWord(libraryWord.id)
        .then(() => {
        console.log("delete", libraryWord.id, libraryWord.word)
        })
    };


return (
    <section className="library">
        <h3 className="library__word">{libraryWord.word}</h3>
        <div className="library__btn">
            <button className="delete__library__word" 
                onClick={(event) => {
                handleDeleteWord()}}>
                    Delete
            </button>
        </div>
    </section>
)
}
