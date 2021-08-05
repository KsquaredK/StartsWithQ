import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { FindWordContext } from "./FindWordProvider";
import { Button } from 'reactstrap';
import "./FindWord.css";
import logo from "../auth/Qlogo.png";



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
        <header>     
          <div className="header">
            <img src={logo} alt="Starts With Q logo" />
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
                      <option className="dropdown-label" value="0"> first choose a letter </option>
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

    /*
    <p></p>
            <label htmlFor="word-search">Then find your words!</label>
          <p></p>    
    
    <label htmlFor="search-or">or</label>
            <Button
                className="btn"
                color="secondary"
                onClick={(event) => {
                //Prevents the browser from submitting the form
                event.preventDefault();
                handleSearchWordsWithLetter()}}>
                  has {chosenLetter} in it
            </Button>{''} */


