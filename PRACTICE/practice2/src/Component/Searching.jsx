import React from "react";
import { useState } from "react";

const Searching = () => {
  const data = {
    users: [
      {
        id: 1,
        identifier: "user1@example.com",
        displayName: "John Doe",
        email: "John@example.com",
        verifiedEmail: true,
      },
      {
        id: 2,
        identifier: "user2@example.com",
        displayName: "Jane Smith",
        email: "Jane@example.com",
        verifiedEmail: false,
      },
      {
        id: 3,
        identifier: "user3@example.com",
        displayName: "Bob Johnson",
        email: "Bob@example.com",
        verifiedEmail: true,
      },
    ],
  };
  const [search, setSearch] = useState("");

  const filtereddata = data.users.filter(
    (item) =>
      item.displayName.toLowerCase().includes(search.toLowerCase()) ||
      item.email.toLowerCase().includes(search.toLowerCase()),
  );
  
  console.log(filtereddata);

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Enter text..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div>
        {filtereddata.map((x) => (
          <div key={x.id}>
            <h2>{x.displayName}</h2>
            <h2>{x.email}</h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default Searching;
