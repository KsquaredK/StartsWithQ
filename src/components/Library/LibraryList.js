import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { FindWordContext } from "../FindWord/FindWordProvider";
import { LibraryCard } from "./LibraryCard"
import "./Library.css"



// cf letter to searchLetter.name w/ find
// cf that search letter id to that in userWords w/ find
export const LibraryList = () => {
  const {userWords, getUserWords, searchLetters, getSearchLetters} = useContext(FindWordContext)
  const {letter} = useParams()
  const currentUser = parseInt(localStorage.getItem("startswithq_user"));
  const [foundLetter, setFoundLetter] = useState({})
  const [libraryWords, setLibraryWords] = useState([])
  const headerLetter = letter.toUpperCase()
  
  useEffect(() => {
    getUserWords(currentUser)
    .then(() => {
      getSearchLetters()
    })
     
  }, [])

  useEffect(() => {
      /* match navbar letter to searchLetter.name  */
      const fLetter = searchLetters.find(searchLetter => letter === searchLetter.name)
      console.log("useEffect #1 - second in chain", fLetter)
      setFoundLetter(fLetter)
    }, [searchLetters])   

  useEffect(() => {
    /* find userWords whose userId foreign key matches 
    that of the foundLetter */
    console.log("useEffect #2 -- userWords", userWords, "foundletter", foundLetter)
    const libraryWords = userWords.filter(userWord => {
      return userWord.searchLetterId === foundLetter?.id
    })
    console.log("useEffect #2 -library words", libraryWords)
    setLibraryWords(libraryWords)
    }, [foundLetter])
  
  useEffect(() => {
      console.log("userWords - state change", userWords)
    }, [userWords])
  


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

•  √ Library List: Use dynamic interpolation to render a "Q", "X", or "Z" library view. 
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