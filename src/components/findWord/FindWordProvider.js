import React, { useState, createContext } from "react";

export const FindWordContext = createContext();

export const FindWordProvider = (props) => {
    const [words, setWords] = useState([]);
    const [userWords, setUserWords] = useState([]);
    const [searchLetters, setSearchLetters] = useState([]);
    const [chosenLetter, setChosenLetter] = useState("");
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
        // .then(setRefresh(false))
        .then((words) => {
          const filteredWords = words.filter((word) => word.userId === currentUserId)
        return setUserWords(filteredWords)
        }
      )
    }

    /* const filteredLibraryWords = filteredWords((filteredWord) => filteredword.searchLetterId) */
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

    // https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=26038152-9e3f-4e5b-904e-051cb50e1ae6
