import React, { useContext } from "react"
import { FindWordContext } from "../FindWord/FindWordProvider";
import "./Library.css";

export const LibraryCard = ( {libraryWord, letter} ) => {
    const {deleteUserWord} = useContext(FindWordContext)
    const handleDeleteWord = () => {
        console.log("delete", libraryWord.id, libraryWord.word)
        deleteUserWord(libraryWord.id)
    };


return (
    <section className="library">
        <h3 className="library__word">{libraryWord.word}</h3>
        <div className="library__btn">
            <button className="delete__library__word" 
                onClick = {
                handleDeleteWord}>
                    Delete
            </button>
        </div>
    </section>
)
}
