import React, { useState, createContext } from "react";

export const LibraryContext = createContext()



export const LibraryProvider = (props) => {
    const [userWords, getUserWords] = useState([]);

    const deleteWord = (id) =>{
        return fetch(`http://localhost:8088/words/${id}`,
            {method:"DELETE"})
            .then(getUserWords)
    }

return (
    <LibraryContext.Provider
    value={{

        deleteWord

  }}>
    {props.children}
    </LibraryContext.Provider>
);
}

// import React { useState, uesContext} from "react"

/*  /* ========= PSEUDOCODE FOR COMPONENT ========= 
• Library Card: map and render individual words searched by foreign keys user id and search letter id


Library Provider: 
    chosenLetter, getChosenLetter,
    setUserWords, getUserWords, deleteUserWord
/ ============================================= */