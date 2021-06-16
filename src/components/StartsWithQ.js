import React from "react"
// import { Route, Redirect } from "react-router-dom";
// import { NavBar } from "./nav/NavBar";
// import { Login } from "./auth/login";
// import { Register } from "./auth/register";
import { useContext, useEffect } from "react";
import { SearchResultContext } from './search/SearchProvider';
import "./StartsWithQ.css"


export const StartsWithQ = ()  => {
    const { searchResults, getSearchResult } = useContext(SearchResultContext);

    useEffect(
        // eslint-disable-next-line
        () => { getSearchResult() },
        []
    )
    return (
        <>
    <h2>Starts With Q</h2>
    <strong>your wordgame superpower</strong>
        <div>Find tricky words that use Q, X or Z</div>
        <h2>Here are your words:</h2> 
    </>
  );
    }