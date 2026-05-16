import React, { useState } from "react";

const Newuser = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
  });

  const [error, setError] = useState({});

  function handlesubmit(e) {
    e.preventDefault();

    const obj = {};

    if (form.name === "") {
      obj.name = "name is required";
    }
    if (form.email === "") {
      obj.email = "email is required";
    }
    if (form.address === "") {
      obj.address = "address is required";
    }

    setError(obj);

    if (form.name.length > 50)
      alert("Name Length is reached more than 50 characters");
    if (form.email.length > 50)
      alert("Email Length is reached more than 50 characters");
    if (form.address.length > 50)
      alert("Address Length is reached more than 50 characters");

    // if (Object.keys(obj).length === 0) {
    // //   const user = JSON.parse(localStorage.getItem("user"));

    // //   const newuser = {
    // //     Name: form.name,
    // //     NameLength: form.name.length,
    // //     totalNameLength: form.name.length + user.form.name.length,
    // //     Email: form.email,
    // //     EmailLength: form.email.length,
    // //     totalEmailLength: form.email.length + user.form.email.length,
    // //     Address: form.address,
    // //     AddressLength: form.address.length,
    // //     totalAddressLength: form.address.length + user.form.address.length,
    // //   };

    // //   const updated = [...user, newuser];
    // //   localStorage.setItem("user", JSON.stringify(updated));

    //   localStorage.setItem(
    //     "user",
    //     JSON.stringify({
    //       Name: form.name,
    //       NameLength: form.name.length,
    //       totalNameLength: form.name.length,
    //       Email: form.email,
    //       EmailLength: form.email.length,
    //       totalEmailLength: form.email.length,
    //       Address: form.address,
    //       AddressLength: form.address.length,
    //       totalAddressLength: form.address.length,
    //     }),
    //   );
    // }

    if (Object.keys(obj).length === 0) {
      // old users lao
      const users = JSON.parse(localStorage.getItem("user")) || [];

      // previous total nikaalo
      const prevTotalName =
        users.length > 0 ? users[users.length - 1].totalNameLength : 0;

      const prevTotalEmail =
        users.length > 0 ? users[users.length - 1].totalEmailLength : 0;

      const prevTotalAddress =
        users.length > 0 ? users[users.length - 1].totalAddressLength : 0;

      // new user object
      const newuser = {
        Name: form.name,
        NameLength: form.name.length,
        totalNameLength: prevTotalName + form.name.length,

        Email: form.email,
        EmailLength: form.email.length,
        totalEmailLength: prevTotalEmail + form.email.length,

        Address: form.address,
        AddressLength: form.address.length,
        totalAddressLength: prevTotalAddress + form.address.length,
      };

      // array me add karo
      const updatedUsers = [...users, newuser];

      // save
      localStorage.setItem("user", JSON.stringify(updatedUsers));

      console.log(updatedUsers);
    }
  }

  return (
    <>
      <div>
        <form action="" onSubmit={handlesubmit}>
          <input
            type="text"
            placeholder="Enter name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          {error.name && <p style={{ color: "red" }}>{error.name}</p>}
          <input
            type="text"
            placeholder="Enter email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          {error.email && <p style={{ color: "red" }}>{error.email}</p>}

          <input
            type="text"
            placeholder="Enter address"
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
          />

          {error.address && <p style={{ color: "red" }}>{error.address}</p>}

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Newuser;
