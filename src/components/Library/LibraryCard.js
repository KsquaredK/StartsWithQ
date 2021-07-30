import React, { useContext } from "react"
import { LibraryContext } from "./LibraryProvider"
import { useHistory } from "react-router"
import "./Library.css"

export const LibraryCard = ( {libraryWord} ) => {
    const { deleteUserWord } = useContext(LibraryContext)
    const history = useHistory();

    const handleDeleteWord = () => {
        deleteUserWord(libraryWord.userId)
        .then(() => {
        history.push("/library/:letter")
        })
    };

return (
    // temp JSX
    <section className="library">
        <h3 className="library__word">{libraryWord.word}</h3>
        <div className="library__btn">
            <button className="delete__library__word" onClick={() => 
                {handleDeleteWord()}}>Delete
            </button>
        </div>
    </section>
)
}