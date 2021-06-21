import React, { useContext, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { FindWordContext } from "./FindWordProvider";
import { UserContext } from "../user/UserProvider"
import "./FindWord.css";



export const FindWordSearch = () => {
    const { searchLetters, getSearchLetters, setSearchLetters, foundWords, getFoundWords } = useContext(FindWordContext);
    const {users, getUsers} = useContext(UserContext)
    const [searchLetter, setSearchLetter] = useState({})
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
      const currentUser = parseInt(localStorage.getItem("startswithq_user"));


      const handleControlledInputChange = (event) => {
        /* When changing a state object or array,
        always create a copy, make changes, and then set state.*/
        const newSearchLetters = { ...searchLetters };
        /* searchLetters is an object with properties.
        Set the property to the new value
        using object bracket notation. */
        newSearchLetters[event.target.id] = event.target.value;
        // update state
        setSearchLetter(newSearchLetters);
      };

      const handleSaveFoundWords = (event) => {
        event.preventDefault(); //Prevents the browser from submitting the form
        if (
          parseInt(searchLetterId) === 0 ) {
          window.alert("Please select a letter");
        } else {
          //disable the button - no extra clicks
          getUsers();
          setIsLoading(true);
          if (searchLetterId && (currentUser === users.id)) {
            //GET list of words and redirect rendered view to FindWordList
            getFoundWords({
              id: foundWords.id,
              name: foundWords.word,
              timestamp: Date.now(), 
              searchLetterId: parseInt(foundWords.searchLetterId),
              userId: currentUser
            }).then(() => history.push(`/words/list`));
          } 
        }
      };


    return (
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
                    <option key={s.id} value={s.id}>
                      {s.name}
                    </option>
                  ))}
                </select>
            </div>
        </fieldset>  
            <button
                className="btn" 
                disabled={isLoading}
                onClick={handleSaveFoundWords}>
        Search</button>
    </form>
    </>
    );
};

/*if (key || ref) {
  var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

  if (key) {
    defineKeyPropWarningGetter(props, displayName);
  }

  if (ref) {
    defineRefPropWarningGetter(props, displayName);
  }
}*/