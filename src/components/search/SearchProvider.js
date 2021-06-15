import React, { useState, createContext } from "react";

// The context is imported and used by individual components that need data.
// Nothing is stored in createContext when it is defined.
export const SearchContext = createContext();

// This component establishes what data can be used.
// animals is an empty array, setAnimals is a function that modifies it.
// useState will hold and set the array of animals.
export const SearchProvider = (props) => {
    const [words, setWords] = useState([]);
  const [searchTerms, setSearchTerms] = useState("");

//   const getWords = () => {
//     // words: fetch that dataset. ex: return 6-letter words that start with q
//     return fetch(
//       "https://api.datamuse.com/words?sp=q?????"
//     )
//       .then((res) => res.json())
//       .then(setWords);
//   };

//   ??? is there an application for this in my search capabilities?   
//    const getWordById = (wordId) => {
//     return fetch(`https://api.datamuse.com/words?/${wordId}`).then((res) =>
//       res.json()
//     );
//   };

  const updateWord = (word) => {
    return fetch(`http://localhost:8088/animals/${word.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(animal),
    }).then(getWords);
  };

  const addWord = (wordObj) => {
    return fetch("http://localhost:8088/words", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(wordObj),
    }).then((response) => response.json());
  };

  const deleteWord = (wordId) => {
    return fetch(`http://localhost:8088/animals/${wordId}`, {
      method: "DELETE",
    }).then(getWords);
  };