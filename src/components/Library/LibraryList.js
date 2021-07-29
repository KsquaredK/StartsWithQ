import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom"
import { FindWordContext } from "../FindWord/FindWordProvider";
import { LibraryCard } from "./LibraryCard"
import "./Library.css"


const currentUser = parseInt(localStorage.getItem("startswithq_user"));

// cf letter to searchLetter.name w/ find
// cf that search letter id to that in userWords w/ find
export const LibraryList = () => {
  const {userWords, getUserWords} = useContext(FindWordContext)
  const {letter} = useParams()
  console.log(letter)
  console.log("params")

  // const libraryWords = () => {
  //   searchLetters.filter((letter) =>  letter.id === userWords)
  // }
  
    useEffect(() => {
         console.log("useEffect: getWords")
         getUserWords()
        }, [])
// Capture current searchLetter used in navigation to route to this page (useParams? useState?),
//  expose it to getUserWords fetch call,

    return (
        <>
    <h1>
        {letter.toUpperCase()} Library
    </h1>
    {/* {userWords.map((userWord => {
					if (letter && userWord.userId === currentUser) {
					return <LibraryCard key={userWord.id} userWord={userWord} />
        }}))} */}
		</>
	)
}

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


/*  LOGIC FOR ARRIVING AT USERWORDS by user and searchletter ids  

/*  const {searchLetters, getSearchLetters} = useContext(FindWordContext)
  const [q, setQ] = useState("")
  const [x, setX] = useState("")
  const [z, setZ] = useState("")

  useEffect(() => {    
    getSearchLetters()
    .then(setQ(searchLetters.find((letter) =>  letter.name === "q")))
    .then(setX(searchLetters.find((letter) =>  letter.name === "x")))
    .then(setZ(searchLetters.find((letter) =>  letter.name === "z")))
  }, []) */ 

        //  .then(libraryWords => {
        //    ())
/* .then(location => {
                    setLocation(location)
                    setIsLoading(false)
                })
        } else {
            setIsLoading(false)
        } */

         


          // .then(set(userWords.find((letter) =>  letter.name === "q")))
          // .then(setX(searchLetters.find((letter) =>  letter.name === "x")))
          // .then(setZ(searchLetters.find((letter) =>  letter.name === "z")))