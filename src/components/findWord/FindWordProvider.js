import React, { useState, createContext } from "react";


// The context is imported and used by individual components that need data.
// Nothing is stored in createContext when it is defined.
export const FindWordContext = createContext();

// This component establishes what data can be used.
// words is an empty array, setWords is a function that modifies it.
// useState will hold and set the array of words.
export const FindWordProvider = (props) => {
    const [words, setWords] = useState([]);
    const [userWord, setUserWords] = useState([]);
    const [searchLetters, setSearchLetters] = useState ([]);
    const [chosenLetter, getChosenLetter] = useState ([]);
    // const [wordsLastLetter, getWordsLastLetter] = useState([]);

    // return array of values used as search terms from permanent state
    const getSearchLetters = () => {
      return fetch("http://localhost:8088/searchLetters")
      .then(res => res.json())
      .then(setSearchLetters)  
    }
  // return array of objects (words filtered by search terms) from 3rd party api
    const getWords = (letter) => {
      return fetch(`https://api.datamuse.com/words?sp=${letter}*&max=400`)
      .then(res => res.json())
      .then(setWords) 
  }

//   const getWordsLastLetter = (letter) => {
//     return fetch(`https://api.datamuse.com/words?sp=*${letter}&max=400`)
//     .then(res => res.json())
//     .then(setWordsLastLetter) 
// }
  
  // return fetch(`https://api.datamuse.com/words?sp=*${letter.replace(/"/g,"")}`)
  //  return fetch(`https://api.datamuse.com/words?sp=??${letter.replace(/"/g,"")}?????`)

  // post data object selected by user input to permanent state, return updated array of user selections
  const addUserWord = (userWord) => {
    return fetch("http://localhost:8088/words", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userWord),
    })
      .then(() => getUserWords())}

//  get data saved by user id in permanent state, store as current state
    const getUserWords =() => {
      return fetch("http://localhost:8088/words")
        .then(res => res.json())
        .then(setUserWords) 
    }

    return (
        <FindWordContext.Provider
        value={{
            words,
            getWords,
            setWords,
            searchLetters,
            getSearchLetters,
            setSearchLetters,
            addUserWord,
            getUserWords,
            userWord,
            setUserWords,
            chosenLetter,
            getChosenLetter
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
 
  /* const deleteWord = (wordId) => {
  //   return fetch(`http://localhost:8088/words?_embed=userWords/${wordId}`, {
  //     method: "DELETE",
  //   }).then(getWords; */