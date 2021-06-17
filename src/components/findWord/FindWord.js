import React, { useState, Component, Fragment } from 'react';
import Select from 'react-select';

/* +++++++ PSEUDO-CODE ++++++++  
This view is the "main view", an export function for search, using
two dropdown menus: [q, x, or z] and ["starts with" or
has a"]. Create a function to handle controlled input, where the event (click)
defines fetch request queries by letter, and by whether each word starts with that 
letter or the letter occurs elsewhere in the word. Invoke the tailored requests
via the FindWordProvider, save them to state, and
redirect to FindWordList. 

*/



const letterOptions = [
    { value: 'q', label: 'Q' },
    { value: 'x', label: 'X' },
    { value: 'Z', label: 'Z' }
  ]

  const positionOptions = [
    { value: 'start', label: 'starts with' },
    { value: 'occur', label: 'has a' }
  ]

export default class SingleSelect extends Component<*, State> {
  state = {
    isClearable: true,
    isSearchable: true,
  };
  render() {
    return (
      <Fragment>
        <Select
          className="basic-single-letter"
          classNamePrefix="select"
          defaultValue={positionOptions[0]}
          name="letter"
          options={positionOptions}
        />
        <Select
          className="basic-single-position"
          classNamePrefix="select"
          defaultValue={positionOptions[0]}
          name="letter"
          options={letterOptions}
        />
      </Fragment>
    );
  }
}


// ??? I'm not invoking this function. Is it for export?
// import { useContext, useEffect } from "react";
// import "./FindWord.css";
// import { FindWordContext } from './FindWordProvider';
// function FindWord() {
//     const { foundWords, getFoundWords } = useContext(FindWordContext)

//     useEffect(
//         () => {
//             getFoundWords()
        
//         },
//         []
//     )
//     return (
//         <>
//         <h2>Here are your words:</h2>

//         {
//             foundWords.map(
//                 foundWord => {
//                     return <div>{foundWord}</div>
//                 }
//             )
//         }
//         </>
//     )
// }