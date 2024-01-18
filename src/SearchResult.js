import React from "react";
import { GlobalContext } from "./GlobalContext";

function SearchResult(){
    const{
        inputSearchResult, 
        setInputSearchResult,
    } = React.useContext(GlobalContext)

    return(
        <div className="container-search">
            <input
            placeholder="Buscar partido"
            value={inputSearchResult}
            onChange={(event)=>{
                console.log(event.target.value)
                setInputSearchResult(event.target.value)
            }}
            />
        </div>
    )
}

export { SearchResult }