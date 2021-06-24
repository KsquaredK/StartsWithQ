import React from "react"
import { useContext, useEffect } from "react";
import { FindWordContext } from './FindWordProvider';
import "./FindWord.css"
// import { UserContext } from "./user/UserProvider"
// import { Link } from "react-router-dom";

// const currentUser = parseInt(localStorage.getItem("startswithq_user"));

export const FindWordList = ()  => {
    const { words, getWords } = useContext(FindWordContext);
    // const history = useHistory()

    useEffect( () => { 
      getWords() 
      // eslint-disable-next-line
      }, [], )
        console.log(words);
    
    return (
        <>
        <h2>Here are your words:</h2> 
        <section className="word-list">
        {words.map(word => {
        return (
              <article className="word" key={words.word}
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
  
