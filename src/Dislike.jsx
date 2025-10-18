import { useState } from "react";

const DisLikeButtun = ({ likeCount, setlikeCount }) => {
  let dislike = () => {
    if (likeCount > 0) {
      setlikeCount(likeCount - 1);
    }
  };

  return (
    <button
      className="w-26 h-13 text-center align-middle p-4 border hover:bg-amber-50 cursor-pointer hover:text-black rounded-2xl"
      onClick={dislike}
    >
     DisLike
    </button>
  );
};

export default DisLikeButtun;
