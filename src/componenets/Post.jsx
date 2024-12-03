import React from "react";

function Post({ id, title }) {
  return (
    <div style={{ padding: "1 rem  ", margin: "1rem ", border: " 2px solid " }}>
      <h2>{title}</h2>
      <p> id : {id}</p>
    </div>
  );
}

export default Post;
