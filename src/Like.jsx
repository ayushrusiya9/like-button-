
const LikeButtun = ({likeCount,setlikeCount})=>{
    
    let increaseLikeCount = () => {
    setlikeCount(likeCount + 1);
    if (likeCount < 0) {
      setlikeCount(0);
    }
    };

    return(
        <>
            <button className="w-26 h-13 p-4 border hover:bg-amber-50 cursor-pointer hover:text-black rounded-2xl" onClick={increaseLikeCount}>Like</button>
        </>
    )
}

export default LikeButtun;