import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { FindWordContext } from "./FindWordProvider";
import { Button } from 'reactstrap';
import "./FindWord.css";



export const FindWordSearch = () => {
    const {searchLetters, getSearchLetters, getWords, chosenLetter, setChosenLetter} = useContext(FindWordContext);

    
    useEffect(() => {
        getSearchLetters();
        // eslint-disable-next-line
      }, []);
      console.log(searchLetters);

      // const searchLetterId = searchLetters.id
      // const [isLoading, setIsLoading] = useState(true); //??

      const history = useHistory();

      //the controlled input is a user clicking an option in the dropdown
      // here the event.target.value gets set to state as chosenLetter variable
    // line 25 is capturing option properties
      const handleControlledInputChange = (event) => {
        const userSelection = event.target.value;
        setChosenLetter(userSelection);
        console.log(chosenLetter)
      };

      // this function runs when user hits submit button. if no dropdown option was chosen, show window alert
      const handleSearchWordsByFirstLetter = (event) => {
        if (
          chosenLetter === "") {
          window.alert("Please select a letter");
      // //else
        } else {
          // disable the button - no extra clicks
        // setIsLoading(true);
        if (chosenLetter) {
            //GET list of words and redirect rendered view to FindWordList
          getWords(chosenLetter)
          .then(() => history.push(`/words/list`)); //${chosenLetter}
          // } 
        }
        console.log("first letter search")
      };
    }

    const handleSearchWordsWithLetter = (event) => {
    if (
      chosenLetter === "") {
      window.alert("Please select a letter");
  // //else
    } else {
      // disable the button - no extra clicks
    // setIsLoading(true);
    if (chosenLetter) {
        //GET list of words and redirect rendered view to FindWordList
      getWords(chosenLetter)
      .then(() => history.push(`/words/list`)); //${chosenLetter}
      // } 
    }
    console.log("first letter search")
  };
}

      // const handleRadioButtons = () => {
      // if (rSelected === 1) {
      //   handleSearchWordsByFirstLetter()
      //   console.log("first letter")
      //   } else {
      //     if 
      //     (rSelected === 2)
      //     console.log("occurs in word") 
      //   }
        
      // } 
    
    
      // const handleSearchWordsByHasLetter = (event) => {
      //   if (chosenLetter && )
      // }

    return (
    
      <>
        <form className="findWordForm">
        <h2 className="findWordForm__title">Find tricky words that use Q, X or Z</h2>
        <fieldset>
            <div className="form-group">
                <label htmlFor="searchLetter">First choose a letter</label>
                <select
                    name="searchLetter"
                    id="searchLetterId"
                    className="form-control"
                    value={searchLetters.id}
                    key="searchLetterId"
                    required
                    onChange={handleControlledInputChange}>
                    <option className="dropdown-label" value="0">First choose a letter</option>
                    {searchLetters.map((s) => (
                    <option key={s.id} value={s.name}>
                      {s.name}
                    </option>
                  ))}
                </select>

            </div>
        </fieldset>  
        <p></p>
        <label htmlFor="word-search">Then find your words!</label>
        <p></p>
            <Button
                className="btn"
                color="secondary"
                onClick={(event) => {
                //Prevents the browser from submitting the form
                event.preventDefault();
                handleSearchWordsByFirstLetter()}}>
        starts with {chosenLetter}</Button>{''}
                <label htmlFor="search-or"> or </label>
        <Button
                className="btn"
                color="secondary"
                onClick={(event) => {
                //Prevents the browser from submitting the form
                event.preventDefault();
                handleSearchWordsWithLetter()}}>
        has {chosenLetter} in it</Button>{''}
    </form>
    </>
    );}


