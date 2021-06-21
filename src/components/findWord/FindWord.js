import React, { useState, useEffect, useContext } from "react";
import { FindWordContext } from "./FindWordProvider"; 
import { UserContext } from "../user/UserProvider"
import { useHistory} from "react-router-dom";
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
return (
  <>
    <h2>your wordgame superpower</h2>
        <div className="subHeader">Find tricky words that use Q, X or Z</div>
      <div className="findWordSearch">
          Start here:
      </div>
  </>
)
}



/* +++++++ PSEUDO-CODE ++++++++  
This view is the "main view", and holds the static content.
*/


  /* TRY AFTER MVP: React-Dropdown 

  // import { Dropdown } from "react-dropdown";
  
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

/* +++++Description of onSelect for capturing user input ++++ 
onSelect Event
Just like the onChange event watches for changes in an input field, the onSelect 
event occurs after some value is selected in an element. A dropdown list can be drawn 
closer to a regular input field since, under the shell, they both aim to get some value 
from the user. To listen to those selected values when the user dynamically changes them, 
the onSelect event comes in handy.

onSelect Event Handler
After the onSelect event has been set to watch for a selection of value, the next step 
is to store that dynamic data somewhere. To do so, an event handler or a simple JavaScript 
function is invoked every time the event is triggered, and the data is extracted 
using the event object. In this case, it becomes even simpler using props.
*/