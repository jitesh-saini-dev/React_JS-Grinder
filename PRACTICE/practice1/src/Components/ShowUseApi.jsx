import React from "react";
import UseApi from "./UseApi";

const ShowUseApi = () => {
  const { data } = UseApi("https://jsonplaceholder.typicode.com/posts");

  return (
    <div>
      {data.length === 0 ? (
        <p>Loading...</p>
      ) : (
        data.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
          </div>
        ))
      )}
    </div>
  );
};

export default ShowUseApi;
