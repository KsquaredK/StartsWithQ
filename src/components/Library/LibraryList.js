import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { FindWordContext } from "../FindWord/FindWordProvider";
import { LibraryCard } from "./LibraryCard"
import "./Library.css"


// when user clicks on nav (: letter ) to library

export const LibraryList = () => {
  /* access searchLetters.name, useParams string in order to find corresponding searchLetters.id of letter clicked in nav
     access local storage.id in order to fetch words saved to db by current user
     set searched letter to state as foundLetter, update
     set user's words filtered by searched letter to state, update
     change useParams' {letter} to upper case in header */
  const {userWords, getUserWords, searchLetters, getSearchLetters} = useContext(FindWordContext)
  const {letter} = useParams()
  const currentUser = parseInt(localStorage.getItem("startswithq_user"));
  const [foundLetter, setFoundLetter] = useState({})
  const [libraryWords, setLibraryWords] = useState([])
  const headerLetter = letter.toUpperCase()
  
  // First GET userWords by current user's id, then get search letters
  useEffect(() => {
    getUserWords(currentUser)
    .then(() => {
      getSearchLetters()
    })
     
  }, [])

// Second, find searchLetter whose name value matches string in useParams, set to state
  useEffect(() => {
      /* match navbar letter to searchLetter.name  */
    const findLetter = searchLetters.find(searchLetter => letter === searchLetter.name)
    setFoundLetter(findLetter)
  }, [searchLetters, letter])   

  // Third, filter user's words in state for words whose search letter foreign key match the found letter id,
  // and set those filtered library words to state, and track changes in state of foundLetter

  useEffect(() => {
    const libraryWords = userWords.filter(userWord  => {
      return userWord.searchLetterId === foundLetter?.id
    })
    setLibraryWords(libraryWords)
    }, [foundLetter, userWords])

  return (
    <>
      <h1>
        {headerLetter} Library
      </h1>
      <section>
        {libraryWords.map(libraryWord => {
          return (
            <LibraryCard key={libraryWord.id} libraryWord={libraryWord} />
            )
          } 
        ) 
       }
      </section>
		</>
	)
}



/* ========== LIBRARY LIST ============= 

•  Library List: 
   √ Use dynamic interpolation to render a "Q", "X", or "Z" library view. 
   √ Render list by importing LibraryCard. For each card, render a delete button
  that deletes the selected word from the words dataset. 
   √ Re-render library view upon click, fetching
  updated word list.

  - Stretch: Filter results by listing words in the following ways [array methods]:
    ~ aplhabetical/reverse alphabetical
    ~ chronological/reverse chronological
    ~ by word length (shortest first)
    ~ starts with letter/has letter

  - Stretchier: Filter results for Q words with no U as a bonus feature/nav link [array method or fetch call]

  - Stretchiest: Filter search results, removing capitalized words, phrases and hyphenated words, [array methods]
    and then verify words for wordgame viability by using Merriam-Webster API [add to ERD: verified boolean]*/