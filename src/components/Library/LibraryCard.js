import React, { useContext, useState } from "react"
import { FindWordContext } from "../FindWord/FindWordProvider";
import "./Library.css";

export const LibraryCard = ( {libraryWord} ) => {
    const [libraryWords, setLibraryWords] = useState([])
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
