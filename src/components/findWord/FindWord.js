import React from "react";
//  import { useContext, useEffect, useState } from "react";
import { FindWordSearch } from "./FindWordSearch";
// import { FindWordContext} from "./FindWordProvider"
// import "./FindWord.css";

// const { getAnimalById, updateAnimal } = useContext(AnimalContext);

export const FindWord = () => {
return (
  <>
    <article>
        <div className="search"><FindWordSearch /></div>
    </article>
  </>
)
}



/* +++++++ PSEUDO-CODE ++++++++  
This view is the "main view", and holds the static content.
*/


 