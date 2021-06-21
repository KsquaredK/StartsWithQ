import React, { useState, createContext } from "react";


// The context is imported and used by individual components that need data.
// Nothing is stored in createContext when it is defined.
export const FindWordContext = createContext();

// This component establishes what data can be used.
// words is an empty array, setWords is a function that modifies it.
// useState will hold and set the array of words.
export const FindWordProvider = (props) => {
    const [foundWords, setFoundWords] = useState([]);
    const [searchLetters, setSearchLetters] = useState ([]);

  const getFoundWords = () => {
    // words: fetch that dataset. ex: return 6-letter words that start with q
   fetch("https://api.datamuse.com/words?sp=q*")
      .then(res => res.json())
      .then(setFoundWords) 
      console.log(setFoundWords)
  }

  const getSearchLetters = () => {
    fetch("http://localhost:8088/searchLetters")
    .then(res => res.json())
      .then(setSearchLetters)  
  }

    return (
        <FindWordContext.Provider
        value={{
            foundWords,
            getFoundWords,
            searchLetters,
            getSearchLetters,
            // addWords,
            // deleteWord,
            // updateWord,
            // getWordById,
        //     searchTerms,
        //     setSearchTerms,
        // 
      }}>
        {props.children}
        </FindWordContext.Provider>
  );
    }


//MORE FETCH REQUESTS as I add functionality

//  ??? is there an application for this in my search capabilities?   
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
