import React, { useContext } from "react"
import { FindWordContext } from "./FindWordProvider"
import "./FindWord.css"

export const FindWordSearch = () => {
    const { setSearchTerms } = useContext(FindWordContext)

    return (
        <>
            <div className="findWordSearch">
                Find your words:
      <input type="text"
                    className="input--wide"
                    onKeyUp={(event) => setSearchTerms(event.target.value.toLowerCase())}
                    placeholder="Expand your expertise... " />
            </div>
        </>
    )
}