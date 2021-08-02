import React, { useContext } from "react"
import { FindWordContext } from "../FindWord/FindWordProvider";
import { useParams } from "react-router-dom"
import { useHistory } from "react-router-dom"
import "./Library.css"

export const LibraryCard = ( {libraryWord} ) => {
    const { deleteUserWord } = useContext(FindWordContext)
    const history = useHistory()
    const {letter} = useParams()

    const currentLibraryLetter = letter
    

    const handleDeleteWord = () => {
        deleteUserWord(libraryWord.id)
        .then(() => {
            console.log("delete", libraryWord.id, libraryWord.word)
        })
        .then(() => history.push(`/library/${currentLibraryLetter}`))
    };

return (
    <section className="library">
        <h3 className="library__word">{libraryWord.word}</h3>
        <div className="library__btn">
            <button className="delete__library__word" 
                onClick={() => 
                {handleDeleteWord()}}>Delete
            </button>
        </div>
    </section>
)
}