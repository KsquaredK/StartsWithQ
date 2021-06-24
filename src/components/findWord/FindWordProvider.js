import React, { useState, createContext } from "react";


// The context is imported and used by individual components that need data.
// Nothing is stored in createContext when it is defined.
export const FindWordContext = createContext();

// This component establishes what data can be used.
// words is an empty array, setWords is a function that modifies it.
// useState will hold and set the array of words.
export const FindWordProvider = (props) => {
    const [words, setWords] = useState([]);
    const [searchLetters, setSearchLetters] = useState ([]);

    const getSearchLetters = () => {
      return fetch("http://localhost:8088/searchLetters")
      .then(res => res.json())
      .then(setSearchLetters)  
    }
  
    const getWords = (letter) => {
      return fetch(`https://api.datamuse.com/words?sp=${letter}*&max=400`)
      .then(res => res.json())
      .then(setWords) 
  }

  
  // return fetch(`https://api.datamuse.com/words?sp=*${letter.replace(/"/g,"")}`)
  //  return fetch(`https://api.datamuse.com/words?sp=??${letter.replace(/"/g,"")}?????`)

    return (
        <FindWordContext.Provider
        value={{
            words,
            getWords,
            setWords,
            searchLetters,
            getSearchLetters,
            setSearchLetters,
            // addWords,
            // deleteWord,
            // updateWord,
            // getWordById,
      }}>
        {props.children}
        </FindWordContext.Provider>
  );
    }


//MORE FETCH REQUESTS as I add functionality

// user saves from FindWordList, to be put in local API words dataset
  // const updateUserWords = userWords => {
  //   return fetch(`http://localhost:8088/words/${word.id}`, { ?? what URL?
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(userWords),
  //   }).then(getUserWords);
  // };

  // const addWords = (searchResultObj) => {
  //   return fetch("http://localhost:8088/words?_embed=userWords", { ???
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(wordObj),
  //   }).then(getWords);
  // };

  // const deleteWord = (wordId) => {
  //   return fetch(`http://localhost:8088/words?_embed=userWords/${wordId}`, {
  //     method: "DELETE",
  //   }).then(getWords;


//  ??? is there an application for this in my search capabilities?   
  //  const getSearchResultById = (searchResultId) => {
  //   return fetch(`https://api.datamuse.com/words?/${wordId}`).then((res) =>
  //     res.json()
  //   );
  // };