import React from "react";

function VideoTitle({ title, overview }) {
  return (
    <div className="pt-[20%] px-24 w-screen bg-gradient-to-r from-black aspect-video absolute text-white">
      <h1 className="text-3xl font-bold w-1/2">{title}</h1>
      <p className="py-6 text-lg w-1/2 ">{overview}</p>
      <div>
        <button className=" p-4 px-16 text-xl rounded-lg bg-white text-black hover:bg-opacity-80">
          Play
        </button>
        <button className="bg-white text-black p-4 px-16 text-xl  rounded-lg ml-2 hover:bg-opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
}

export default VideoTitle;
