import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { FindWordContext } from "./FindWordProvider";
import { Button } from 'reactstrap';
import "./FindWord.css";
import logo from "../auth/Qlogo.png";

/* ======= PSEUDOCODE = MORE FEATURES ======= 
Users can search for words that have Q, X, or Z in them (exploiting what code can do that our brains can’t),
Users can search for words by number of letters and position in word where the tricky letter occurs. For example, 
they can search for an 8-letter word with an X in the 5th position to discover the word ‘relaxant”. Or just 
search for 5-letter words with Q in them.


I want to improve the quality of search results by removing hyphenated words, phrases and proper nouns.

Super stretch goal: check words fetched from my 3rd party API (Datamuse) against Merriam-Webster’s API 
(which only allows single word fetch calls), and remove all words from app state that are not found in M-W, 
since it’s the most used authority in word games. */



export const FindWordSearch = () => {
    const {searchLetters, getSearchLetters, getWords, chosenLetter, setChosenLetter} = useContext(FindWordContext);

    
    useEffect(() => {
        getSearchLetters();
        // eslint-disable-next-line
      }, []);

      const history = useHistory();

      //the controlled input is a user clicking an option in the dropdown
      // here the event.target.value gets set to state as chosenLetter variable
    // line 25 is capturing option properties
      const handleControlledInputChange = (event) => {
        const userSelection = event.target.value;
        setChosenLetter(userSelection);
      };


      // this function runs when user hits submit button. if no dropdown option was chosen, show window alert
      const handleSearchWordsByFirstLetter = (event) => {
        if (
          chosenLetter === "") {
          window.alert("Please select a letter");
        } else {
          // disable the button - no extra clicks
        // setIsLoading(true);
        if (chosenLetter) {
            //GET list of words and redirect rendered view to FindWordList
          getWords(chosenLetter)
          .then(() => history.push(`/words/list`));
        }
        console.log(chosenLetter)
      };
    }

    return (
    
      <>
        <header>     
          <div className="header">
            <img src={logo} alt="Starts With Q logo"/>
          </div>
        </header>
        <form className="findWordForm">
          <h6 className="search-descrip">Find tricky words that use Q, X or Z</h6>
          <fieldset>
              <div className="form-group">
                  <select
                      name="searchLetter"
                      id="searchLetterId"
                      className="form-control"
                      value={searchLetters.id}
                      key="searchLetterId"
                      required
                      onChange={handleControlledInputChange}>
                      <option className="dropdown-label" value="0"> first choose a letter</option>
                      {searchLetters.map((s) => (
                      <option className="dropdown-label" key={s.id} value={s.name}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                  <p></p>  

              </div>
          </fieldset>  
          
            <Button
                className="btn"
                color="secondary"
                onClick={(event) => {
                //Prevents the browser from submitting the form
                event.preventDefault();
                handleSearchWordsByFirstLetter()}}>
                  search</Button>{''}
             
    </form>
    </>
    );}

   