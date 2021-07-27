import React, { useContext, useEffect } from "react";
import { FindWordContext } from "../FindWord/FindWordProvider";
import { useHistory } from "react-router";
import "./Library.css"

/* ========== LIBRARY LIST ============= 

• Library List: Use dynamic interpolation to render a "Q", "X", or "Z" library view. 
Render list by importing LibraryCard. For each card, render a delete button
that deletes the selected word from the words dataset. Re-render library view upon click, fetching
updated word list.

  - Stretch: Filter results by listing words in the following ways [array methods]:
    ~ aplhabetical/reverse alphabetical
    ~ chronological/reverse chronological
    ~ by word length (shortest first)
    ~ starts with letter/has letter

  - Stretchier: Filter results for Q words with no U as a bonus feature/nav link [array method or fetch call]

  - Stretchiest: Filter search results, removing capitalized words, phrases and hyphenated words, [array methods]
    and then verify words for wordgame viability by using Merriam-Webster API [add to ERD: verified boolean]*/

const currentUser = parseInt(sessionStorage.getItem("startswithq_user"));

export const LibraryList = () => {
    const {getUserWords, chosenLetter, searchLetters} = useContext(FindWordContext)
    const history = useHistory()


    
    useEffect(() => {
         console.log("useEffect: getWords");
         getUserWords();
     }, [])

    // const findLibraryName = () => {
    //     const libraryLetter = chosenLetter

    
    
    
    
    return (
        <>
    <h1>
        Library
    </h1>
    </>
)}