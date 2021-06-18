import React from "react"
// import { Route, Redirect } from "react-router-dom";
// import { NavBar } from "./nav/NavBar";
// import { Login } from "./auth/login";
// import { Register } from "./auth/register";

import { useContext, useEffect } from "react";
import { FindWordContext } from './FindWordProvider';
import "./FindWord.css"

// 
// pull data from db, instead of using below arrays?
// const letterOptions = [
//   { value: 'q', label: 'Q' },
//   { value: 'x', label: 'X' },
//   { value: 'Z', label: 'Z' }
// ]

// const positionOptions = [
//   { value: 'start', label: 'starts with' },
//   { value: 'occur', label: 'has a' }
// ]


export const FindWordList = ()  => {
    const { foundWords, getFoundWord } = useContext(FindWordContext);

    useEffect(
        // eslint-disable-next-line
        () => { getFoundWord() },
        [],
        console.log(foundWords)
    )
    return (
        <>
    <h2>Starts With Q</h2>
    <strong>your wordgame superpower</strong>
        <div>Find tricky words that use Q, X or Z</div>
        <h2>Here are your words:</h2> 
        <div>
          <img className="logo"/>
        </div>
    
    </>
  );
    }

//     <div className="foundWords">
//     {
//         foundWords.map(word => {
//             return <FindWordDetail wordObject={word} key={word.id} />
//         })
//     }
// </div>

/* Working with data: 
wordList.push(<li>${res[i].word}</li>);
(.word is a property, res is a json response array 
filled with objects, to which word is one of the properties. 
So here we’re accessing the object item in the array through 
its index (res[i]), and accessing its word property with .word.) */

/*
// Filter all words that start with "q" into a new list
let filteredQWords = foundWords.filter(foundWord => {
  return foundWord[0] === "q";
});

console.log(filteredQWords); */