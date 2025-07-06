import React, { useEffect, useState } from "react";

const Draft = () => {
  const [text, setText] = useState("");
  const [clear,setClear] = useState(false);
  useEffect(() => {
    const message = localStorage.getItem("draft-message");
    if (message !== "" && text === "") {
      setText(message);
    }
  }, []);

  useEffect(() => {
    const id = setTimeout(() => {
      if (text !== "") {
        console.log("Local Storage change");
        localStorage.setItem("draft-message", text);
      } else {
        setClear(true);
      }
    },300)

    return () =>{
      clearTimeout(id)
    }

  }, [text]);

  const clearDraft = () => {
    const message = localStorage.getItem("draft-message");
    if (message !== "") {
      localStorage.removeItem("draft-message");
    }
  };

  return (
    <div>
      <h1>Save to Draft</h1>
      <input
        type="text"
        value={text}
        placeholder="Draft Text here"
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <br />
      {/* <button onClick={clearDraft}>Clear Draft</button> */}
    </div>
  );
};

export default Draft;
