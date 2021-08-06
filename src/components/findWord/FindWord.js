import React from "react";
//  import { useContext, useEffect, useState } from "react";
import { FindWordSearch } from "./FindWordSearch";
// import { FindWordContext} from "./FindWordProvider"
import "./FindWord.css";


export const FindWord = () => {
return (
  <>
    <article>
        <div className="search"><FindWordSearch /></div>
    </article>
  </>
)
}
