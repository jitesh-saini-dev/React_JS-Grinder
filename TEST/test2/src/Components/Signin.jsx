// import React from "react";
// import { useState } from "react";

// const Signin = () => {
// const data = {
//   india: {
//     states: {
//       Maharashtra: ["Mumbai", "Pune", "Nagpur"],
//       Karnataka: ["Bengaluru", "Mysuru", "Mangalore"],
//       TamilNadu: ["Chennai", "Coimbatore", "Madurai"],
//       Gujarat: ["Ahmedabad", "Surat", "Vadodara"],
//       Rajasthan: ["Jaipur", "Udaipur", "Jodhpur"],
//       WestBengal: ["Kolkata", "Siliguri", "Durgapur"],
//       Punjab: ["Chandigarh", "Amritsar", "Ludhiana"],
//       Haryana: ["Gurugram", "Faridabad", "Panipat"],
//       Telangana: ["Hyderabad", "Warangal", "Nizamabad"],
//       UttarPradesh: ["Lucknow", "Kanpur", "Agra"],
//       Bihar: ["Patna", "Gaya", "Bhagalpur"],
//       Odisha: ["Bhubaneswar", "Cuttack", "Rourkela"],
//     },
//   },
//   usa: {
//     states: {
//       California: ["Los Angeles", "San Francisco", "San Diego"],
//       NewYork: ["New York City", "Buffalo", "Rochester"],
//     },
//   },
//   germany: {
//     states: {
//       Bavaria: ["Munich", "Nuremberg", "Augsburg"],
//       Berlin: ["Berlin", "Potsdam", "Cottbus"],
//     },
//   },
// };

//   const [country, setCountry] = useState("");
//   // const [state, setState] = useState(null);
//   // const [city, setCity] = useState(null);

//   const handlesubmit = (e) => {
//     e.preventDefault();
//   };

//   return (
//     <>
//       <main>
//         <div>
//           <form action="" onSubmit={handlesubmit}>
//             <select
//               name=""
//               id=""
//               onChange={(e) => setCountry({ ...data, country: e.target.value })}
//             >
//               <option value="">Country</option>
//               {Object.keys(data).map((x, id) => (
//                 <option value="" key={id}>
//                   {x}
//                 </option>
//               ))}
//             </select>

//             <select name="" id="">
//               <option value="">Country</option>
//               {Object.keys(data[states]).map((x, id) => (
//                 <option value="" key={id}>
//                   {x}
//                 </option>
//               ))}
//             </select>
//           </form>
//         </div>
//       </main>
//     </>
//   );
// };

// export default Signin;

import React, { useState } from "react";

const Signin = () => {
  const datas = {
    india: {
      states: {
        Maharashtra: ["Mumbai", "Pune", "Nagpur"],
        Karnataka: ["Bengaluru", "Mysuru", "Mangalore"],
        TamilNadu: ["Chennai", "Coimbatore", "Madurai"],
        Gujarat: ["Ahmedabad", "Surat", "Vadodara"],
        Rajasthan: ["Jaipur", "Udaipur", "Jodhpur"],
        WestBengal: ["Kolkata", "Siliguri", "Durgapur"],
        Punjab: ["Chandigarh", "Amritsar", "Ludhiana"],
        Haryana: ["Gurugram", "Faridabad", "Panipat"],
        Telangana: ["Hyderabad", "Warangal", "Nizamabad"],
        UttarPradesh: ["Lucknow", "Kanpur", "Agra"],
        Bihar: ["Patna", "Gaya", "Bhagalpur"],
        Odisha: ["Bhubaneswar", "Cuttack", "Rourkela"],
      },
    },
    usa: {
      states: {
        California: ["Los Angeles", "San Francisco", "San Diego"],
        NewYork: ["New York City", "Buffalo", "Rochester"],
      },
    },
    germany: {
      states: {
        Bavaria: ["Munich", "Nuremberg", "Augsburg"],
        Berlin: ["Berlin", "Potsdam", "Cottbus"],
      },
    },
  };

  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  return (
    <div>
      <select
        value={country}
        onChange={(e) => {
          setCountry(e.target.value);
          setState("");
          setCity("");
        }}
      >
        <option value="">Select Country</option>
        {Object.keys(datas).map((c) => (
          <option key={c} value={c}>
            {" "}
            {c}{" "}
          </option>
        ))}
      </select>

      <select
        value={state}
        onChange={(e) => {
          setState(e.target.value);
          setCity("");
        }}
      >
        <option value="">Select state</option>
        {country &&
          Object.keys(datas[country].states).map((s) => (
            <option key={s} value={s}>
              {" "}
              {s}{" "}
            </option>
          ))}
      </select>

      <select
        value={city}
        onChange={(e) => {
          setCity(e.target.value);
        }}
      >
        <option value="">Select state</option>
        {country &&
          state &&
          datas[country].states[state].map((r) => (
            <option key={r} value={r}>
              {" "}
              {r}{" "}
            </option>
          ))}
      </select>

      <h3>
        {country} - {state} - {city}
      </h3>
    </div>
  );
};

export default Signin;
