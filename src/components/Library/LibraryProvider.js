// import React, { useState, createContext } from "react";
// // import { FindWordContext } from "./FindWordContext"

// // const {getUserWords, setUserWords} = useContext(FindWordContext)

// export const LibraryContext = createContext()

// export const LibraryProvider = (props) => {

//     const deleteUserWord = (userWordId) => {
//         return fetch(`http://localhost:8088/words/${userWordId}`,
//             {method:"DELETE"})
//             .then(setUserWords)
//             .then(getUserWords)
//     }

// return (
//     <LibraryContext.Provider
//     value={{

//         deleteUserWord

//   }}>
//     {props.children}
//     </LibraryContext.Provider>
// );
// }

// import React { useState, uesContext} from "react"

/*  /* ========= PSEUDOCODE FOR COMPONENT ========= 
• Library Card: map and render individual words searched by foreign keys user id and search letter id


Library Provider: 
    deleteUserWord
/ ============================================= */