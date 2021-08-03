import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { FindWordContext } from "./FindWordProvider";
import { Button, ButtonGroup, Form, FormGroup, Dropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap';
import "./FindWord.css";



export const FindWordSearch = () => {
    const {searchLetters, getSearchLetters, getWords, chosenLetter, setChosenLetter} = useContext(FindWordContext);
    
    useEffect(() => {
        getSearchLetters();
        // eslint-disable-next-line
      }, []);

      // const searchLetterId = searchLetters.id
      // const [isLoading, setIsLoading] = useState(true); //??

      const history = useHistory();

      //the controlled input is a user clicking an option in the dropdown
      // here the event.target.value gets set to state as chosenLetter variable
    // line 25 is capturing option properties
      const handleControlledInputChange = (event) => {
        const userSelection = event.target.value;
        setChosenLetter(userSelection);
      };

      /*   return (
    <div>
      <h5>Radio Buttons</h5>
      <ButtonGroup>
        <Button color="primary" onClick={() => setRSelected(1)} active={rSelected === 1}>starts with {chosenLetter}</Button>
        <Button color="primary" onClick={() => setRSelected(2)} active={rSelected === 2}>{chosenLetter} occurs in word</Button>
      </ButtonGroup>
      <p>Selected: {rSelected}</p>
  );
}  */

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
        console.log(chosenLetter)
      };
    }


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
                    <option value="0"></option>
                    {searchLetters.map((s) => (
                    <option key={s.id} value={s.name}>
                      {s.name}
                    </option>
                  ))}
                </select>

            </div>
        </fieldset>  
            <Button
                className="btn"
                color="secondary"
                onClick={(event) => {
                //Prevents the browser from submitting the form
                event.preventDefault();
                handleSearchWordsByFirstLetter()}}>
        Search</Button>{''}
    </form>
    </>
    );
 }


 /* ======= FROM REACTSTRAP =================
 import React, { useState } from 'react';
import { Button, ButtonGroup } from 'reactstrap';

const Example = (props) => {
  const [cSelected, setCSelected] = useState([]);
  const [rSelected, setRSelected] = useState(null);

  const onCheckboxBtnClick = (selected) => {
    const index = cSelected.indexOf(selected);
    if (index < 0) {
      cSelected.push(selected);
    } else {
      cSelected.splice(index, 1);
    }
    setCSelected([...cSelected]);
  }
  return (
    <div>
      <h5>Radio Buttons</h5>
      <ButtonGroup>
        <Button color="primary" onClick={() => setRSelected(1)} active={rSelected === 1}>One</Button>
        <Button color="primary" onClick={() => setRSelected(2)} active={rSelected === 2}>Two</Button>
        <Button color="primary" onClick={() => setRSelected(3)} active={rSelected === 3}>Three</Button>
      </ButtonGroup>
      <p>Selected: {rSelected}</p>

      <h5>Checkbox Buttons</h5>
      <ButtonGroup>
        <Button color="primary" onClick={() => onCheckboxBtnClick(1)} active={cSelected.includes(1)}>One</Button>
        <Button color="primary" onClick={() => onCheckboxBtnClick(2)} active={cSelected.includes(2)}>Two</Button>
        <Button color="primary" onClick={() => onCheckboxBtnClick(3)} active={cSelected.includes(3)}>Three</Button>
      </ButtonGroup>
      <p>Selected: {JSON.stringify(cSelected)}</p>
    </div>
  );
}

export default Example;
  */



 