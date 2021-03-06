import React, { useState } from "react"
import { useContext } from "react";
import { FindWordContext } from "./FindWordProvider";
// import { Card, CardBody, CardTitle, Button, Row, Col } from 'reactstrap';
import "./FindWord.css"



export const FindWordList = ()  => {
  const {words, addUserWord, getUserWords,  chosenLetter, searchLetters} = useContext(FindWordContext);
  
  const [userWordChoice, setUserWordChoice] = useState({})
  const currentUserId = parseInt(localStorage.getItem("startswithq_user"));
  console.log(currentUserId)

//   const removePhrases = () => {
//   const pattern = " "
//   const  unfilteredWords = [...words]
//   filtered = unfilteredWords.filter(function (str) 
//   { return str.includes(pattern); }) 

// }
  //  *--------- user input to save one or more words in list to local db ---*
  // If the word to be saved has a chosenLetter matching the name of
  // one of the searchletters, create a new object with these properties,
  // set it to state, and call addUserWord, passing the new obj in as an
  // argument.
    const handleSaveUserWord = (word) => {
        if (userWordChoice) {
        const matchingLetterObj = searchLetters.find(
        (searchLetterObj) => {
         return searchLetterObj.name === chosenLetter
          }
        )
        const newUserWordChoice = {
            word: word.word,
            searchLetterId: matchingLetterObj.id, 
            userId: currentUserId,
            timestamp: Date.now(),
        }
        setUserWordChoice(currentUserId);
  // PUT word to db and change rendering of chosen word (CSS -animate button going away?, 
  // delete from component state array?)
        addUserWord(newUserWordChoice)
        .then(() => getUserWords(currentUserId))
  }};

  
  /*----- Note: map function below calls second argument, --------*/
  /*-----"index", which adds a numeric identifier to array elements---*
  /*----- In this case, 3rd party API had no unique id property ---*/

  return (
    <>
      <h2>Here are your words</h2> 
      <section className="word-list">
        {words.map((word, index) => {
        return (
          <article className="word" 
            key={index}
            value={word.word}>
          <div className="word__detail">
            { word.word }
          </div>
          <button
            className="word-btn" 
            onClick={(event, index) => {
            event.preventDefault();
            handleSaveUserWord(word);}}>
            save
          </button>
          </article>
            )
        }
        )
        }    
      </section>
    </>
  )}

  