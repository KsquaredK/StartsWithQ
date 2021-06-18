import React, { useState, useEffect, useContext } from "react";
import { FindWordContext } from "./FindWordProvider"; 
import { UserContext } from "./user/UserProvider"
import { useHistory, useParams } from "react-router-dom";
// import { Dropdown } from "react-dropdown";
import "./FindWord.css";



export const FindWord = () => {
  const { foundWords, getFoundWords } = useContext(FindWordContext);
  const { user, getUsers } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();

  /*to control user input, define it from the outset */
  const [newWordsObj, setNewWords] = useState( {
  word: "",
  searchLetterId: "",
  userId: parseInt(localStorage.getItem("startswithq_user")),
  timestamp: ""
});
}



/* +++++++ PSEUDO-CODE ++++++++  
This view is the "main view", an export function for search, with user
input via two dropdown menus: [q, x, or z] and ["starts with" or
has a"]. Module draws on datasets from words and users contexts to create 
newWordsObjects with the userId and searchLetterId (foreign keys).






Create a function to handle controlled input, where the event (click)
defines fetch request queries by letter, and by whether each word starts with that 
letter or the letter occurs elsewhere in the word. Invoke the tailored requests
via the FindWordProvider, save them to state, and
redirect to FindWordList. 

*/


  /* TRY AFTER MVP: React-Dropdown 
  
  const defaultOption = options[0],
  <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />;


const letterOptions = [
    { value: 'q', label: 'Q', className: 'letterOption' },
    { value: 'x', label: 'X', className: 'letterOption' },
    { value: 'z', label: 'Z', className: 'letterOption' },

    {
     type: 'group', name: 'letterPosition', items: [
       { value: 'hasLetter', label: 'Has this letter', className: 'letterPositionItem' },
       { value: 'startsWith', label: 'Starts with this letter', className: 'letterPositionItem'  }
     ]
    },
    {
     type: 'group', name: 'letterOptions', items: [
       { value: 'q', label: 'Q', className: 'letterOption' },
       { value: 'x', label: 'X', className: 'letterOption' },
       { value: 'z', label: 'Z', className: 'letterOption' }
     ]
    }
  ]
); */

/* pull data from db, instead of using below arrays?
const letterOptions = [
    { value: 'q', label: 'Q' },
    { value: 'x', label: 'X' },
    { value: 'Z', label: 'Z' }
  ]

  const positionOptions = [
    { value: 'start', label: 'starts with' },
    { value: 'occur', label: 'has a' }
  ]

*/



// export selection class SingleSelect extends Component<*, State> {
//   state = {
//     isClearable: true,
//     isSearchable: true,
//   };
//   render() {
//     return (
//       <Fragment>
//         <Select
//           className="basic-single-letter"
//           classNamePrefix="select"
//           selectionValue={positionOptions[0]}
//           name="letter"
//           options={positionOptions}
//         />
//         <Select
//           className="basic-single-position"
//           classNamePrefix="select"
//           selectionValue={positionOptions[0]}
//           name="letter"
//           options={letterOptions}
//         />
//       </Fragment>
//     );
//   }
// }




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
//   )} */

