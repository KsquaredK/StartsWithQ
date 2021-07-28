import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom"
import { FindWordContext } from "../FindWord/FindWordProvider";
import { LibraryCard } from "./LibraryCard"
import "./Library.css"


const currentUser = parseInt(localStorage.getItem("startswithq_user"));

// cf letter to searchLetter.name w/ find
// cf that search letter id to that in userWords w/ find
export const LibraryList = () => {
  const {userWords, getUserWords, searchLetters, getSearchLetters} = useContext(FindWordContext)
  const {letter} = useParams()
  console.log(letter)
    
    useEffect(() => {
         console.log("useEffect: getWords")
         getUserWords()
         .then(getSearchLetters())
     }, [])
// Capture current searchLetter used in navigation to route to this page (useParams? useState?),
//  expose it to getUserWords fetch call,

    return (
        <>
    <h1>
        {letter.toUpperCase()} Library
    </h1>

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



/* 			<section className="library_group">
				<div className="library_list">
						<LibraryCard key={userWord.id} userWord={userWord} />
				</div>
			</section> */

          // const currentLetter = (searchLetters) => {
    //   searchLetters.map(searchLetter => {
    //     (searchLetter.id <= 1){
    //     return (
    //     currentLetter = searchLetter.id
    //     )}
    //   })
    // }

    // const currentWords = (userWords) => {
    //   userWords.map(userWord => {
    //     if (userWord.userId === currentUser && userWord.searchLetterId === currentLetter) {
    //     return (
    //       currentWords
    //     )}
    //   })
    // }