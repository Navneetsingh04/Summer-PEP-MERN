import React, { useState } from "react";

const LikeCounter = () => {
  const [like, SetLike] = useState(0);

  function onClickLike() {
    SetLike(like + 1);
  }

  function onClickDislike() {
    if (like > 0) {
      SetLike(like - 1);
    }
  }

  return (
    <div>
      <h1>Likes: {like}</h1>
      <button onClick={onClickLike}> Likes</button>
      <button onClick={onClickDislike}>Dislike</button>
    </div>
  );
};

export default LikeCounter;
