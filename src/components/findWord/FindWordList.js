import React, { useState } from "react"
import { useContext } from "react";
import { FindWordContext } from './FindWordProvider';
import "./FindWord.css"
// import { UserContext } from "./user/UserProvider"

// const currentUser = parseInt(localStorage.getItem("startswithq_user"));

export const FindWordList = ()  => {
    const {words, addWord} = useContext(FindWordContext);
    // const history = useHistory()

    const [userWordChoice, setUserWordChoice] = useState({})

  //  *--------
 //the controlled input is a user clicking an option in the dropdown
      // here the event.target.value gets set to state as chosenLetter variable
      // const handleControlledInputChange = (event) => {
      //   setUserWordChoice(event.target.value);
      // };
   
  //  *--------- user input to save one or more words in list to local db ---*
    const handleSaveUserWord = (event) => {
        if (userWordChoice) {
        setUserWordChoice(event.target.value);
  //PUT word to db and change rendering of chosen word (CSS -animate button going away?, 
          // delete from component state array?)
          addWord(userWordChoice);
  }};

  /*----- Note: map function below calls second argument, --------*/
  /*-----"index", which adds a numeric identifier to array elements---*
  /*----- In this case, 3rd party API had no unique id property ---*/
    return (
        <>
        <h2>Here are your words</h2> 
        <section className="word-list">
        {words.map((words, index) => {
        return (
              <article className="word" 
              key={index}
              value={words.word}>
              <div className="word__detail">
              { words.word }
              </div>
              </article>
          )
         } )
        } 
      </section>
    </>
              );
}

/*
<button
                className="word-btn" 
                onClick={(event) => {
                event.preventDefault();
                handleSaveUserWord(event.target.value,
                  )}}>save</button>
                  */