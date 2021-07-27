import React, { useContext, useEffect } from "react"
import { FindWordContext } from "./FindWord/FindWordProvider"
// import { LibraryContext } from "./LibraryProvider"
import "./Library.css"

const currentUser = parseInt(localStorage.getItem("startswithq_user"));

export const LibraryList = () => {
    // const {deleteWord} = useContext(LibraryContext)
    const {getUserWords, userWords, chosenLetter} = useContext(FindWordContext)

    // const handleDelete = () => {
    //     deleteWord(userWords.id)
    //   }
    useEffect(() => {
        getUserWords(userWords)
        console.log(userWords)

}, [])

return (
    // temp JSX
    <section className="library">
        <h3 className="library__word">queem</h3>
    </section>
)
}