import { useState } from "react";   
import LikeButtun from "./Like.jsx";
import DisLikeButtun from "./Dislike.jsx";

let Count = () => {
  let [likeCount, setlikeCount] = useState(0);

 

  return (
    <div className="bg-gray-950 w-full text-white h-screen flex justify-center items-center flex-col gap-10">
      <h1 className="text-4xl">Count: {likeCount}</h1>
      <div className="flex justify-between items-center w-60">
        <LikeButtun likeCount={likeCount} setlikeCount={setlikeCount} /> 
        <DisLikeButtun likeCount={likeCount} setlikeCount={setlikeCount}/>
      </div>
    </div>
  );
};

export default Count;
