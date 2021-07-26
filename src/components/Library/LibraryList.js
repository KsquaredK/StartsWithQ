import React, { useContext, useEffect } from "react";
import { FindWordContext } from "../FindWord/FindWordProvider";
import { useHistory } from "react-router";
import "./Library.css"

const currentUser = parseInt(sessionStorage.getItem("startswithq_user"));

export const LibraryList = () => {
    const {words, getWords} = useContext(FindWordContext)
    const history = useHistory();

    
    useEffect(() => {
         console.log("useEffect: getWords");
         getWords();
     }, [])
}