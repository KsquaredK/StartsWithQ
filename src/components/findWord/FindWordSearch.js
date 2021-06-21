import React, { useContext, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { FindWordContext } from "./FindWordProvider";

import "./FindWord.css";



export const FindWordSearch = () => {
    const { searchLetters, getSearchLetters, setSearchLetters, foundWords, getFoundWords } = useContext(FindWordContext);
    /*
    With React, we do not target the DOM with `document.querySelector()`. 
    Instead, our return (render) reacts to state or props.
    Define the initial state of the form inputs with useState()
    */
    
    useEffect(() => {
        getSearchLetters();
      }, []);
      const { searchLetterId } = useParams();
      const [isLoading, setIsLoading] = useState(true);
      const history = useHistory();

      const handleControlledInputChange = (event) => {
        /* When changing a state object or array,
        always create a copy, make changes, and then set state.*/
        const newSearchLetter = { ...searchLetters };
        /* searchLetters is an object with properties.
        Set the property to the new value
        using object bracket notation. */
        newSearchLetter[event.target.id] = event.target.value;
        // update state
        setSearchLetters(newSearchLetter);
      };

      const handleSaveFoundWords = () => {
        if (
          parseInt(searchLetterId) === 0 ) {
          window.alert("Please select a letter");
        } else {
          //disable the button - no extra clicks
          setIsLoading(true);
          if (searchLetterId) {
            //GET list of words and redirect rendered view to FindWordList
            const user = parseInt(localStorage.getItem("startswithq_user"))
            getFoundWords({
              id: wordId,
              name: word.word,
              timestamp: Math.round((new Date()).getTime() / 1000), 
              searchLetterId: parseInt(word.searchLetterId),
              userId: user
            }).then(() => history.push(`/words/list`));
          } 
        }
      };


    return (
        <form className="findWordForm">
        <h2 className="findWordForm__title">Find Your Words</h2>
        <fieldset>
            <div className="form-group">
                <label htmlFor="searchLetter">choose your letter</label>
                <select
                    name="searchLetterId"
                    id="searchLetterId"
                    className="form-control"
                    value={searchLetters.name}
                    onChange={handleControlledInputChange}>
                     <option value="0">Select a location</option>
                    {searchLetters.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name}
                    </option>
            ))}
          </select>
            </div>
        </fieldset>  
            <button
                className="btn btn-primary"
                disabled={isLoading}
                onClick={(event) => {
                event.preventDefault(); // Prevent browser from submitting the form and refreshing the page
            handleSaveFoundWords();
        }}>
        {searchLetter.id ? <>Submit</> : <>Choose a letter</>}
      </button>
    </form>
    );
};