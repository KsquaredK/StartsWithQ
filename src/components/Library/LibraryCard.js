import React, { useContext } from "react"
import { LibraryContext } from "./LibraryProvider"
import { useHistory } from "react-router"
import "./Library.css"

export const LibraryCard = ( {userWord} ) => {
    const { deleteUserWord } = useContext(LibraryContext)
    const history = useHistory();

    const handleDeleteWord = () => {
        deleteUserWord(userWord.userId)
        .then(() => {
        history.push("/library")
        })
    };

return (
    // temp JSX
    <section className="library">
        <h3 className="library__word">{userWord.word}</h3>
        <div className="library__btn">
            <button className="delete__library" onClick={() => 
                {handleDeleteWord()}}>Delete
            </button>
        </div>
    </section>
)
}