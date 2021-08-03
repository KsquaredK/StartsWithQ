import React, { useContext } from "react"
import { useHistory } from "react-router-dom"
import { FindWordContext } from "../FindWord/FindWordProvider";
import "./Library.css";

export const LibraryCard = ( {libraryWord, letter} ) => {
    // const [libraryWords, setLibraryWords] = useState([])
    const {deleteUserWord, getUserWords} = useContext(FindWordContext)
    const history = useHistory()
      
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
