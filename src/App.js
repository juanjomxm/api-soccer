import React from "react";
import { TitleSoccer } from "./TitleSoccer";
import { SoccerApi } from "./Soccer";
import { SearchResult } from "./SearchResult";
import { GlobalContext } from "./GlobalContext";

function App() {
  const{
    loading, 
    searchResult
  } = React.useContext(GlobalContext)

  return (
    <React.Fragment>
      <TitleSoccer/>
      <SearchResult/>
      {(!loading && searchResult.length === 0) && <p>No hay resultados</p>}
      {loading && <div className="loader-container"><div className="spinner"></div></div>}
      <SoccerApi/>
    </React.Fragment>
  );
}

export { App }
