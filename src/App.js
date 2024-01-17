import React from "react";
import { TitleSoccer } from "./TitleSoccer";
import { SoccerApi } from "./Soccer";

function App() {
  return (
    <React.Fragment>
      <TitleSoccer/>
      <SoccerApi/>
    </React.Fragment>
  );
}

export { App }
