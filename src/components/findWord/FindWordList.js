import React, { useState } from "react"
import { useContext } from "react";
import { FindWordContext } from './FindWordProvider';
import "./FindWord.css"

/*------TODO-first----------*/
// logic to add selected word to handleSaveUserWord, and make searchLetterId dynamic

const currentUser = parseInt(localStorage.getItem("startswithq_user"));

export const FindWordList = ()  => {
    const {words, addUserWord, } = useContext(FindWordContext);
    // const history = useHistory()

  const [userWordChoice, setUserWordChoice] = useState({})

  //  *--------
 //the controlled input is a user clicking an option in the dropdown
      // here the event.target.value gets set to state as chosenLetter variable
      const handleControlledInputChange = (event) => {
        setUserWordChoice(event.target.value);
      };
   
  //  *--------- user input to save one or more words in list to local db ---*
    const handleSaveUserWord = (event, index) => {
        if (userWordChoice) {
        const newUserWordChoice = {
            word: words,
            searchLetterId: 2,
            userID: currentUser,
            timestamp: Date.now(),
        }
        setUserWordChoice(currentUser);
  // PUT word to db and change rendering of chosen word (CSS -animate button going away?, 
          // delete from component state array?)
          addUserWord(newUserWordChoice)
  }};

  
  /*----- Note: map function below calls second argument, --------*/
  /*-----"index", which adds a numeric identifier to array elements---*
  /*----- In this case, 3rd party API had no unique id property ---*/
  return (
    <>
        <h2>Here are your words</h2> 
        <section className="word-list">
          {words.map((word) => {
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
          handleControlledInputChange(event);
          handleSaveUserWord(
          event.target.value);}}>save</button>
              </article>
          )})
        }; ;    
        </section>
        </>
  )}
  
      