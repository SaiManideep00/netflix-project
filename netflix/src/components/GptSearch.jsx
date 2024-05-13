import React from "react";
import GptSearchBar from "./GptSearchBar";
import { LOGIN_LOGO } from "../utils/constants";

function GptSearch() {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={LOGIN_LOGO} />
      </div>
      <GptSearchBar />
    </div>
  );
}

export default GptSearch;
