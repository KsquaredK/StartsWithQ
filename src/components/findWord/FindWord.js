import { useContext, useEffect } from "react";
import "./FindWord.css";
import { FindWordContext } from './FindWordProvider';


// ??? I'm not invoking this function. Is it for export?
function FindWord() {
    const { foundWords, getFoundWords } = useContext(FindWordContext)

    useEffect(
        () => {
            getFoundWords()
        
        },
        []
    )
    return (
        <>
        <h2>Here are your words:</h2>

        {
            foundWords.map(
                foundWord => {
                    return <div>{foundWord}</div>
                }
            )
        }
        </>
    )
}