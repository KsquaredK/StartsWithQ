import React, { useState, createContext } from "react";

// The context is imported and used by individual components that need data.
// Nothing is stored in createContext when it is defined.
export const FindWordContext = createContext();

// This component establishes what data can be used.
// words is an empty array, setWords is a function that modifies it.
// useState will hold and set the array of words.
export const FindWordProvider = (props) => {
    const [foundWords, setFoundWord] = useState([]);
  // const [searchTerms, setSearchTerm] = useState("");

  const getFoundWord = () => {
    // words: fetch that dataset. ex: return 6-letter words that start with q
    return fetch("http://localhost:8088/words")
      .then((res) => res.json())
      .then(setFoundWord);
  };

//   ??? is there an application for this in my search capabilities?   
  //  const getSearchResultById = (searchResultId) => {
  //   return fetch(`https://api.datamuse.com/words?/${wordId}`).then((res) =>
  //     res.json()
  //   );
  // };

  // const updateSearchResult = (searchResult) => {
  //   return fetch(`http://localhost:8088/words/${word.id}`, {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(word),
  //   }).then(getSearchResult);
  // };

  // const addSearchResult = (searchResultObj) => {
  //   return fetch("http://localhost:8088/words", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(wordObj),
  //   }).then((response) => response.json());
  // };

  // const deleteSearchResult = (searchResultId) => {
  //   return fetch(`http://localhost:8088/words/${wordId}`, {
  //     method: "DELETE",
  //   }).then(getSearchResult);
 

    return (
        <FindWordContext.Provider
        value={{
            foundWords,
            getFoundWord,
            // addWord,
            // deleteWord,
            // updateWord,
            // getWordById,
            // searchTerms,
            // setSearchTerms,
        }}>
        {props.children}
        </FindWordContext.Provider>
  );
      };
