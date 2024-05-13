import React from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languaugeconstants";
function GptSearchBar() {
  const langR = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langR].gptSearch}
        ></input>
        <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg">
          {lang[langR].search}
        </button>
      </form>
    </div>
  );
}

export default GptSearchBar;
