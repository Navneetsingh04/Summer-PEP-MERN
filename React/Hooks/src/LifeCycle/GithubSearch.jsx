import React, { useState } from "react";

const GithubSearch = () => {
  const [text, setText] = useState("navneetsingh04");
  const [data, setData] = useState(null);

  const handleSearch = async () => {
    if (!text) return;
    const res = await fetch(`https://api.github.com/users/${text}`,{
      method : "GET"
    });
    const jsonData = await res.json();
    console.log({ jsonData });

    const formatData = {
      name: jsonData.name,
      bio: jsonData.bio,
      profile: jsonData.avatar_url,
      username: jsonData.login,
    };
    setData(formatData);
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <input
        type="text"
        value={text}

        placeholder="Github UserName"
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <button onClick={handleSearch}>Search</button>
      <br />
      <br />
      {data && (
        <section>
          <img
            src={data.profile}
            width={200}
            height={200}
            alt="Github_profile"
          />
          <h3>{data.name}</h3>
          <p>
            <i>{data.username}</i>
          </p>
          <p>{data.bio}</p>
        </section>
      )}
    </div>
  );
};

export default GithubSearch;
