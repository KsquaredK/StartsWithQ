import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { FindWordContext } from "./FindWordProvider";
import "./FindWord.css";



export const FindWordSearch = () => {
    const {searchLetters, getSearchLetters, getWords} = useContext(FindWordContext);
    
    useEffect(() => {
        getSearchLetters();
        // eslint-disable-next-line
      }, []);
/*
    With React, our return (render) reacts to state or props.
    Define the initial state of the form inputs with useState()
    */
      const [chosenLetter, setChosenLetter] = useState("");
      // const [isLoading, setIsLoading] = useState(true); //??

      // useHistory will redirect view by supplying a new path when invoked
      const history = useHistory();

      //the controlled input is a user clicking an option in the dropdown
      // here the event.target.value gets set to state as chosenLetter variable
      const handleControlledInputChange = (event) => {
        setChosenLetter(event.target.value);
      };

      // this function runs when user hits submit button. if no dropdown option was chosen, show window alert
      const handleSaveGetWords = (event) => {
      //   if (
      //     chosenLetter === "" ) {
      //     window.alert("Please select a letter");
      // //else
      //   } else {
          // disable the button - no extra clicks
          // setIsLoading(true);
          if (chosenLetter) {
      //       //GET list of words and redirect rendered view to FindWordList
          getWords(chosenLetter)
          // .then(() => history.push(`/words/list`));
          } 
        };
      console.log()
      // };


    return (
      // JSX: select (dropdown): the value of the dropdown and each option is
      // searchLetters.name. onChange, a searchLetter.name is selected. onClick, 
      // handleClickGetWords is invoked, passing the searchLettersName argument (as event.target.value)
      // to getWords, which sends a fetch GET with that argument interpolated in the URL.
      <>
        <form className="findWordForm">
        <h2 className="findWordForm__title">Find tricky words that use Q, X or Z</h2>
        <fieldset>
            <div className="form-group">
                <label htmlFor="searchLetter">First choose a letter</label>
                <select
                    name="searchLetterId"
                    id="searchLetterId"
                    className="form-control"
                    value={searchLetters.name}
                    onChange={handleControlledInputChange}>
                    <option value="0"></option>
                    {searchLetters.map((s) => (
                    <option key={s.id} value={s.name}>
                      {s.name}
                    </option>
                  ))}
                </select>
            </div>
        </fieldset>  
            <button
                className="btn" 
                // disabled={isLoading}
                onClick={(event) => {
                //Prevents the browser from submitting the form
                event.preventDefault();
                handleSaveGetWords(event.target.value)}}>
        Search</button>
    </form>
    </>
    );
};
