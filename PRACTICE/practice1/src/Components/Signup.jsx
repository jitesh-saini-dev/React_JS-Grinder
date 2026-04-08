// import React, { useState } from "react";

// const Signup = () => {
//   // const [name, setName] = useState("");
//   // const [email, setEmail] = useState("");
//   // const [password, setPassword] = useState("");
//   // const [age, setAge] = useState("");
//   // const [address, setAddress] = useState("");

//   const [form, setform] = useState({
//     name: "",
//     email: "",
//     password: "",
//     age: 0,
//     address: "",
//   });

//   const [error, setError] = useState({});

//   function handleSubmit(e) {
//     // console.log(name)
//     // console.log(email)
//     // console.log(password);

//     e.preventDefault(); // refresh ko rokega

//     // const data = { fullName: name, email, password, age, address };
//     // localStorage.setItem("signup", JSON.stringify(data));
//     // console.log(data);

//     // const saveddata = JSON.parse(localStorage.getItem("signup"));
//     // console.log(saveddata);

//     // if (form.name === "") {
//     //   alert("name is required");
//     //   return;
//     // }
//     // if (form.email === "") {
//     //   alert("email is required");
//     //   return;
//     // }

//     // if (form.name !== "" && form.email !== "") {
//     //   console.log(">>>>>>form", form);
//     // } else {
//     //   alert("All required");
//     // }

//     // for (let key in form) {
//     //   if (form[key] === "") {
//     //     alert(`${key} is required !`);
//     //     return;
//     //   }
//     // }

//     //----------------object default leke------------------------------
//     // let obj = {};

//     // if (form.name === "") {
//     //   obj.name = "name is required";
//     // }
//     // if (form.email === "") {
//     //   obj.email = "email is required";
//     // }
//     // if (form.password === "") {
//     //   obj.password = "password is required";
//     // }

//     // setError(obj);

//     // if (Object.keys(obj).length === 0) {
//     //   console.log(">>>>>>form", form);
//     //   localStorage.setItem("user", JSON.stringify(form));
//     // }

//     //----------------Array default leke------------------------------

//     let errorsArray = [];

//     if (form.name === "") {
//       errorsArray.push("name is required");
//     }
//     if (form.email === "") {
//       errorsArray.push("email is required");
//     }
//     if (form.password === "") {
//       errorsArray.push("password is required");
//     }

//     setError(errorsArray);

//     if (errorsArray.length === 0) {
//       console.log(">>>>>>form", form);
//       localStorage.setItem("user", JSON.stringify(form));
//     }

//     // console.log(">>>>>>form", form);
//     // localStorage.setItem("user", JSON.stringify(form));

//     // alert("data saved");
//     // setName("");
//     // setEmail("");
//     // setPassword("");
//     // setAge("");
//     // setAddress("");

//     setform({
//       name: "",
//       email: "",
//       password: "",
//       age: 0,
//       address: "",
//     });
//   }

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Enter Name..."
//           value={form.name}
//           onChange={(e) => setform({ ...form, name: e.target.value })}
//         />
//         <p style={{ color: "red" }}>{error.name}</p>
//         <input
//           type="text"
//           placeholder="Enter Email..."
//           value={form.email}
//           onChange={(e) => setform({ ...form, email: e.target.value })}
//         />
//         <p style={{ color: "red" }}>{error.email}</p>

//         <input
//           type="password"
//           placeholder="Enter Password..."
//           value={form.password}
//           onChange={(e) => setform({ ...form, password: e.target.value })}
//         />
//         <p style={{ color: "red" }}>{error.password}</p>

//         {/* <input
//           type="number"
//           placeholder="Enter Age..."
//           value={form.age}
//           onChange={(e) => setform({ ...form, age: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="Enter Address..."
//           value={form.address}
//           onChange={(e) => setform({ ...form, address: e.target.value })}
//         /> */}
//         <button type="submit">Submit</button>
//       </form>
//     </>
//   );
// };

// export default Signup;

//------------------------------------------------------------------------------

// import React, { useState } from "react";

// const Signup = () => {
//   const [form, setform] = useState({
//     name: "",
//     email: "",
//     password: "",
//     age: 0,
//     address: "",
//   });

//   // 1. Initial state ko object {} ki jagah array [] kar diya
//   const [error, setError] = useState([]);

//   function handleSubmit(e) {
//     e.preventDefault(); // refresh ko rokega

//     let errorsArray = [];

//     if (form.name === "") {
//       errorsArray.push("name is required");
//     }
//     if (form.email === "") {
//       errorsArray.push("email is required");
//     }
//     if (form.password === "") {
//       errorsArray.push("password is required");
//     }

//     // State update kar di array se
//     setError(errorsArray);

//     if (errorsArray.length === 0) {
//       console.log(">>>>>>form", form);
//       localStorage.setItem("user", JSON.stringify(form));

//       // Data save hone ke baad form clear kar diya
//       setform({
//         name: "",
//         email: "",
//         password: "",
//         age: 0,
//         address: "",
//       });
//     }
//   }

//   // 2. Array mein se specific errors dhoondhne ke liye variables bana liye
//   const nameError = error.find((err) => err.includes("name"));
//   const emailError = error.find((err) => err.includes("email"));
//   const passwordError = error.find((err) => err.includes("password"));

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <input
//             type="text"
//             placeholder="Enter Name..."
//             value={form.name}
//             onChange={(e) => setform({ ...form, name: e.target.value })}
//             style={{
//               border: nameError ? "2px solid red" : "1px solid black",
//               outline: "none",
//               marginBottom: "5px",
//             }}
//           />
//           {nameError && (
//             <p style={{ color: "red", margin: "0 0 10px 0" }}>{nameError}</p>
//           )}
//         </div>

//         <div>
//           <input
//             type="text"
//             placeholder="Enter Email..."
//             value={form.email}
//             onChange={(e) => setform({ ...form, email: e.target.value })}
//             style={{
//               border: emailError ? "2px solid red" : "1px solid black",
//               outline: "none",
//               marginBottom: "5px",
//             }}
//           />
//           {emailError && (
//             <p style={{ color: "red", margin: "0 0 10px 0" }}>{emailError}</p>
//           )}
//         </div>

//         <div>
//           <input
//             type="password"
//             placeholder="Enter Password..."
//             value={form.password}
//             onChange={(e) => setform({ ...form, password: e.target.value })}
//             style={{
//               border: passwordError ? "2px solid red" : "1px solid black",
//               outline: "none",
//               marginBottom: "5px",
//             }}
//           />
//           {passwordError && (
//             <p style={{ color: "red", margin: "0 0 10px 0" }}>
//               {passwordError}
//             </p>
//           )}
//         </div>

//         <button type="submit" style={{ marginTop: "10px" }}>
//           Submit
//         </button>
//       </form>
//     </>
//   );
// };

// export default Signup;

//------------------------------------------------------------------------------

import React, { useState } from "react";
import "./Signup.css";
const Signup = () => {
  const [form, setform] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    address: "",
    city: "",
    state: "",
    country: "",
    phone: "",
    pincode: "",
    gender: "",
    occupation: "",
    company: "",
    website: "",
    bio: "",
  });

  const [error, setError] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    let errorsArray = [];

    if (form.name === "") errorsArray.push("name is required");
    if (form.email === "") errorsArray.push("email is required");
    if (form.password === "") errorsArray.push("password is required");
    if (form.age === "") errorsArray.push("age is required");
    if (form.address === "") errorsArray.push("address is required");
    if (form.city === "") errorsArray.push("city is required");
    if (form.state === "") errorsArray.push("state is required");
    if (form.country === "") errorsArray.push("country is required");
    if (form.phone === "") errorsArray.push("phone is required");
    if (form.pincode === "") errorsArray.push("pincode is required");
    if (form.gender === "") errorsArray.push("gender is required");
    if (form.occupation === "") errorsArray.push("occupation is required");
    if (form.company === "") errorsArray.push("company is required");
    if (form.website === "") errorsArray.push("website is required");
    if (form.bio === "") errorsArray.push("bio is required");

    setError(errorsArray);

    if (errorsArray.length === 0) {
      console.log(">>>>>>form", form);
      localStorage.setItem("user", JSON.stringify(form));

      setform({
        name: "",
        email: "",
        password: "",
        age: "",
        address: "",
        city: "",
        state: "",
        country: "",
        phone: "",
        pincode: "",
        gender: "",
        occupation: "",
        company: "",
        website: "",
        bio: "",
      });
    }
  }

  const nameError = error.find((err) => err.includes("name"));
  const emailError = error.find((err) => err.includes("email"));
  const passwordError = error.find((err) => err.includes("password"));
  const ageError = error.find((err) => err.includes("age"));
  const addressError = error.find((err) => err.includes("address"));
  const cityError = error.find((err) => err.includes("city"));
  const stateError = error.find((err) => err.includes("state"));
  const countryError = error.find((err) => err.includes("country"));
  const phoneError = error.find((err) => err.includes("phone"));
  const pincodeError = error.find((err) => err.includes("pincode"));
  const genderError = error.find((err) => err.includes("gender"));
  const occupationError = error.find((err) => err.includes("occupation"));
  const companyError = error.find((err) => err.includes("company"));
  const websiteError = error.find((err) => err.includes("website"));
  const bioError = error.find((err) => err.includes("bio"));

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={form.name}
        placeholder="Name"
        onChange={(e) => setform({ ...form, name: e.target.value })}
        style={{ border: nameError ? "2px solid red" : "" }}
      />
      {nameError && <p style={{ color: "red" }}>{nameError}</p>}

      <input
        value={form.email}
        placeholder="Email"
        onChange={(e) => setform({ ...form, email: e.target.value })}
        style={{ border: emailError ? "2px solid red" : "" }}
      />
      {emailError && <p style={{ color: "red" }}>{emailError}</p>}

      <input
        type="password"
        value={form.password}
        placeholder="Password"
        onChange={(e) => setform({ ...form, password: e.target.value })}
        style={{ border: passwordError ? "2px solid red" : "" }}
      />
      {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}

      <input
        value={form.age}
        placeholder="Age"
        onChange={(e) => setform({ ...form, age: e.target.value })}
        style={{ border: ageError ? "2px solid red" : "" }}
      />
      {ageError && <p style={{ color: "red" }}>{ageError}</p>}

      <input
        value={form.address}
        placeholder="Address"
        onChange={(e) => setform({ ...form, address: e.target.value })}
        style={{ border: addressError ? "2px solid red" : "" }}
      />
      {addressError && <p style={{ color: "red" }}>{addressError}</p>}

      <input
        value={form.city}
        placeholder="City"
        onChange={(e) => setform({ ...form, city: e.target.value })}
        style={{ border: cityError ? "2px solid red" : "" }}
      />
      {cityError && <p style={{ color: "red" }}>{cityError}</p>}

      <input
        value={form.state}
        placeholder="State"
        onChange={(e) => setform({ ...form, state: e.target.value })}
        style={{ border: stateError ? "2px solid red" : "" }}
      />
      {stateError && <p style={{ color: "red" }}>{stateError}</p>}

      <input
        value={form.country}
        placeholder="Country"
        onChange={(e) => setform({ ...form, country: e.target.value })}
        style={{ border: countryError ? "2px solid red" : "" }}
      />
      {countryError && <p style={{ color: "red" }}>{countryError}</p>}

      <input
        value={form.phone}
        placeholder="Phone"
        onChange={(e) => setform({ ...form, phone: e.target.value })}
        style={{ border: phoneError ? "2px solid red" : "" }}
      />
      {phoneError && <p style={{ color: "red" }}>{phoneError}</p>}

      <input
        value={form.pincode}
        placeholder="Pincode"
        onChange={(e) => setform({ ...form, pincode: e.target.value })}
        style={{ border: pincodeError ? "2px solid red" : "" }}
      />
      {pincodeError && <p style={{ color: "red" }}>{pincodeError}</p>}

      <input
        value={form.gender}
        placeholder="Gender"
        onChange={(e) => setform({ ...form, gender: e.target.value })}
        style={{ border: genderError ? "2px solid red" : "" }}
      />
      {genderError && <p style={{ color: "red" }}>{genderError}</p>}

      <input
        value={form.occupation}
        placeholder="Occupation"
        onChange={(e) => setform({ ...form, occupation: e.target.value })}
        style={{ border: occupationError ? "2px solid red" : "" }}
      />
      {occupationError && <p style={{ color: "red" }}>{occupationError}</p>}

      <input
        value={form.company}
        placeholder="Company"
        onChange={(e) => setform({ ...form, company: e.target.value })}
        style={{ border: companyError ? "2px solid red" : "" }}
      />
      {companyError && <p style={{ color: "red" }}>{companyError}</p>}

      <input
        value={form.website}
        placeholder="Website"
        onChange={(e) => setform({ ...form, website: e.target.value })}
        style={{ border: websiteError ? "2px solid red" : "" }}
      />
      {websiteError && <p style={{ color: "red" }}>{websiteError}</p>}

      <input
        value={form.bio}
        placeholder="Bio"
        onChange={(e) => setform({ ...form, bio: e.target.value })}
        style={{ border: bioError ? "2px solid red" : "" }}
      />
      {bioError && <p style={{ color: "red" }}>{bioError}</p>}

      <button type="submit">Submit</button>
    </form>
  );
};

export default Signup;
