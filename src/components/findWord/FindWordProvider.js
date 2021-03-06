import React, { useState, createContext } from "react";

/* ========= PSEUDOCODE FOR COMPONENT =========
• FW Search: fetch search letters, map them to a dropdown menu, save user's selection (a variable
  capturing a string of the letter name) to state, redirect to search results view

    -Stretch: optional second dropdown that lets you choose search letter's position in word

• FW List: render search results view by mappping though words in FindWordContext. When user
  clicks save by a listed word, use find method to find searchLetter object whose name matches
  chosenLetter in state.  Clear mutable state (unsaved search results) upon navigating to new component, with a save button
  that saves an object with the word, word id, user id, search letter id and timestamp
  to the db

  - Stretch: Clear results button that redirects to search view, and clears mutable state

• FW Provider:
    searchLetters, getSearchLetters, setSearchLetters,
    chosenLetter, setChosenLetter,
    words, getWords, setWords,
    userWord, setUserWords, addUserWords, getUserWords, deleteUserWord
/ ============================================= */

export const FindWordContext = createContext();

// This component establishes what data can be used.
// words is an empty array, setWords is a function that modifies it.
// useState will hold and set the array of words.
export const FindWordProvider = (props) => {
    const [words, setWords] = useState([]);
    const [userWords, setUserWords] = useState([]);
    const [searchLetters, setSearchLetters] = useState([]);
    const [chosenLetter, setChosenLetter] = useState("");
    const [libraryWords, setLibraryWords] = useState([]);
    const [wordsByLastLetter, setWordsByLastLetter] = useState([]);
    const currentUser = parseInt(localStorage.getItem("startswithq_user"));

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

  //return array of objects (words filtered by search terms) from 3rd party API
  const getWordsByLastLetter = (letter) => {
    return fetch(`https://api.datamuse.com/words?sp=*${letter}&max=400`)
    .then(res => res.json()
    .then(setWordsByLastLetter))
  }

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
    }

//  get data saved by user id in permanent state, store as current state
    const getUserWords = (currentUserId) => {
      return fetch(`http://localhost:8088/words?_expand=user&_expand=searchLetter`)
        .then(res => res.json())
        .then((words) => {
          const filteredWords = words.filter((word) => word.userId === currentUserId)
        return setUserWords(filteredWords)
        }
      )
    }
//  delete user-selected word by userWordId in permanent state, call getUserWords passing in current user's id to refresh state
    const deleteUserWord = (userWordId) => {
      return fetch(`http://localhost:8088/words/${userWordId}`, {
          method:"DELETE"
        })
        .then(() => getUserWords(currentUser))
    }

    return (
        <FindWordContext.Provider
        value={{
            words,
            getWords,
            setWords,
            wordsByLastLetter,
            getWordsByLastLetter,
            setWordsByLastLetter,
            searchLetters,
            getSearchLetters,
            setSearchLetters,
            addUserWord,
            getUserWords,
            userWords,
            setUserWords,
            chosenLetter,
            setChosenLetter,
            deleteUserWord

        }}>
        {props.children}
        </FindWordContext.Provider>
  );
  }
