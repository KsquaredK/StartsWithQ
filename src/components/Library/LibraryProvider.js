import React, { useState, createContext } from "react";

export const LibraryContext = createContext()

export const LibraryProvider = (props) => {
    const [getUserWords] = useState([]);

    const deleteUserWord = (id) =>{
        return fetch(`http://localhost:8088/words/${id}`,
            {method:"DELETE"})
            .then(getUserWords)
    }

return (
    <LibraryContext.Provider
    value={{

        deleteUserWord

  }}>
    {props.children}
    </LibraryContext.Provider>
);
}

// import React { useState, uesContext} from "react"

/*  /* ========= PSEUDOCODE FOR COMPONENT ========= 
• Library Card: map and render individual words searched by foreign keys user id and search letter id


Library Provider: 
    deleteUserWord
/ ============================================= */