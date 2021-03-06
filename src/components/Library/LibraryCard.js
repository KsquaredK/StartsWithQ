import React, { useContext } from "react"
import { FindWordContext } from "../FindWord/FindWordProvider";
import "./Library.css";

/* This module handles each word displayed in the library list by
    • displaying and assigning attributes to the word, and
    • rendering a delete button which, on click,
    • invokes the deleteUserWord function exposed in the provider,
      passing in the argument of the selected word's id.*/

export const LibraryCard = ( {libraryWord, letter} ) => {
    const {deleteUserWord} = useContext(FindWordContext)
    const handleDeleteWord = () => {
        console.log("delete", libraryWord.id, libraryWord.word)
        deleteUserWord(libraryWord.id)
    };


return (
    <section className="library-card">
         <h3 className="library-word">{libraryWord.word}</h3>
        <div className="library-btn">
            <button className="delete-library-word" 
                onClick = {
                handleDeleteWord}>
                Delete
            </button>
        </div>
    </section>
)
}

        

