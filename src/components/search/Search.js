import { useContext, useEffect } from "react";
import "./Search.css";
import { SearchResultContext } from './SearchProvider';

function Search() {
    const { searchResults, getSearchResult } = useContext(SearchResultContext)

    useEffect(
        () => {
            getSearchResult()
        
        },
        []
    )
    return (
        <>
        <h2>Here are your words:</h2>

        {
            searchResults.map(
                searchResult => {
                    return <div>{searchResult}</div>
                }
            )
        }
        </>
    )
}