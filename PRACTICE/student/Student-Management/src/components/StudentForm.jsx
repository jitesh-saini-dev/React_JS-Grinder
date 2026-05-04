// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Admitiondfrom = () => {
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     id:"",
//     firstName: "",
//     lastName: "",
//     email: "",
//     age: "",
//     phone: "",
//     gender: "",
//     height: "",
//     weight: ""
//   });

//   const [error, setError] = useState({});

//  function handlechange(e) {
//   e.preventDefault();

//   const errorobj = {};

//   if (form.firstName === "") errorobj.firstName = "firstName is required";
//   if (form.lastName === "") errorobj.lastName = "lastName is required";
//   if (form.email === "") errorobj.email = "email is required";
//   if (form.age === "") errorobj.age = "age is required";
//   if (form.phone === "") errorobj.phone = "phone is required";
//   if (form.gender === "") errorobj.gender = "gender is required";
//   if (form.height === "") errorobj.height = "height is required";
//   if (form.weight === "") errorobj.weight = "weight is required";

//   setError(errorobj);

//   if (Object.keys(errorobj).length === 0) {

//     const oldData = JSON.parse(localStorage.getItem("Addmissionform")) || [];

//     const newStudent = {...form};

//     const newData = [...oldData, newStudent];

//     localStorage.setItem("Addmissionform", JSON.stringify(newData));

//     alert("Signup successful");
//     navigate("/");

//     setForm({
//       firstName: "",
//       lastName: "",
//       email: "",
//       age: "",
//       phone: "",
//       gender: "",
//       height: "",
//       weight: ""
//     });
//   }
// }
//   return (
//    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-blue-100 to-pink-100">
//   <div className="w-full max-w-lg bg-white shadow-2xl rounded-3xl p-8 border border-gray-100">

//     <form onSubmit={handlechange} className="flex flex-col gap-5">

//       {/* Title */}
//       <h2 className="text-3xl font-bold text-center text-blue-600">
//         Admission Form
//       </h2>

//       {/* Inputs */}
//       <div className="grid md:grid-cols-2 gap-4">

//         {/* First Name */}
//         <div>
//           <input
//             type='number'
//             placeholder="Id noumber"
//             value={form.id}
//             onChange={(e) => setForm({ ...form, id: e.target.value })}
//             className={`w-full p-3 bg-gray-50 border rounded-xl outline-none focus:ring-2 focus:ring-blue-300 transition ${
//               error.id ? "border-red-400" : "border-gray-200"
//             }`}
//           />
//           {error.id && (
//             <p className="text-red-500 text-sm mt-1">{error.id}</p>
//           )}
//         </div>

//         {/* First Name */}
//         <div>
//           <input
//             type="text"
//             placeholder="First Name"
//             value={form.firstName}
//             onChange={(e) => setForm({ ...form, firstName: e.target.value })}
//             className={`w-full p-3 bg-gray-50 border rounded-xl outline-none focus:ring-2 focus:ring-blue-300 transition ${
//               error.firstName ? "border-red-400" : "border-gray-200"
//             }`}
//           />
//           {error.firstName && (
//             <p className="text-red-500 text-sm mt-1">{error.firstName}</p>
//           )}
//         </div>

//         {/* Last Name */}
//         <div>
//           <input
//             type="text"
//             placeholder="Last Name"
//             value={form.lastName}
//             onChange={(e) => setForm({ ...form, lastName: e.target.value })}
//             className={`w-full p-3 bg-gray-50 border rounded-xl outline-none focus:ring-2 focus:ring-blue-300 transition ${
//               error.lastName ? "border-red-400" : "border-gray-200"
//             }`}
//           />
//           {error.lastName && (
//             <p className="text-red-500 text-sm mt-1">{error.lastName}</p>
//           )}
//         </div>

//         {/* Age */}
//         <div>
//           <input
//             type="number"
//             placeholder="Age"
//             value={form.age}
//             onChange={(e) => setForm({ ...form, age: e.target.value })}
//             className={`w-full p-3 bg-gray-50 border rounded-xl outline-none focus:ring-2 focus:ring-blue-300 transition ${
//               error.age ? "border-red-400" : "border-gray-200"
//             }`}
//           />
//           {error.age && (
//             <p className="text-red-500 text-sm mt-1">{error.age}</p>
//           )}
//         </div>

//         {/* Email */}
//         <div>
//           <input
//             type="email"
//             placeholder="Email"
//             value={form.email}
//             onChange={(e) => setForm({ ...form, email: e.target.value })}
//             className={`w-full p-3 bg-gray-50 border rounded-xl outline-none focus:ring-2 focus:ring-blue-300 transition ${
//               error.email ? "border-red-400" : "border-gray-200"
//             }`}
//           />
//           {error.email && (
//             <p className="text-red-500 text-sm mt-1">{error.email}</p>
//           )}
//         </div>

//         {/* Phone */}
//         <div>
//           <input
//             type="text"
//             placeholder="Phone"
//             value={form.phone}
//             onChange={(e) => setForm({ ...form, phone: e.target.value })}
//             className={`w-full p-3 bg-gray-50 border rounded-xl outline-none focus:ring-2 focus:ring-blue-300 transition ${
//               error.phone ? "border-red-400" : "border-gray-200"
//             }`}
//           />
//           {error.phone && (
//             <p className="text-red-500 text-sm mt-1">{error.phone}</p>
//           )}
//         </div>

//         {/* Height */}
//         <div>
//           <input
//             type="text"
//             placeholder="Height"
//             value={form.height}
//             onChange={(e) => setForm({ ...form, height: e.target.value })}
//             className={`w-full p-3 bg-gray-50 border rounded-xl outline-none focus:ring-2 focus:ring-blue-300 transition ${
//               error.height ? "border-red-400" : "border-gray-200"
//             }`}
//           />
//           {error.height && (
//             <p className="text-red-500 text-sm mt-1">{error.height}</p>
//           )}
//         </div>

//         {/* Weight */}
//         <div>
//           <input
//             type="text"
//             placeholder="Weight"
//             value={form.weight}
//             onChange={(e) => setForm({ ...form, weight: e.target.value })}
//             className={`w-full p-3 bg-gray-50 border rounded-xl outline-none focus:ring-2 focus:ring-blue-300 transition ${
//               error.weight ? "border-red-400" : "border-gray-200"
//             }`}
//           />
//           {error.weight && (
//             <p className="text-red-500 text-sm mt-1">{error.weight}</p>
//           )}
//         </div>

//         {/* Gender */}
//         <div>
//           <select
//             value={form.gender}
//             onChange={(e) => setForm({ ...form, gender: e.target.value })}
//             className={`w-full p-3 bg-gray-50 border rounded-xl outline-none focus:ring-2 focus:ring-blue-300 transition ${
//               error.gender ? "border-red-400" : "border-gray-200"
//             }`}
//           >
//             <option value="">Select Gender</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//             <option value="other">Other</option>
//           </select>

//           {error.gender && (
//             <p className="text-red-500 text-sm mt-1">{error.gender}</p>
//           )}
//         </div>
//       </div>

//       {/* Submit Button */}
//       <button
//         type="submit"
//         className="bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl font-semibold transition transform hover:scale-[1.02]"
//       >
//         Submit Form
//       </button>

//     </form>
//   </div>
// </div>
//   );
// };

// export default Admitiondfrom;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdmissionForm.css";

const StudentForm = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    id: "",
    image: "",
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    phone: "",
    gender: "",
    height: "",
    weight: "",
  });

  const [error, setError] = useState({});

  function handlechange(e) {
    e.preventDefault();

    const errorobj = {};

    if (form.id === "") errorobj.id = "Id is required";
    if (form.firstName === "") errorobj.firstName = "firstName is required";

    if (form.lastName === "") errorobj.lastName = "lastName is required";

    if (form.email === "") errorobj.email = "email is required";

    if (form.age === "") errorobj.age = "age is required";

    if (form.phone === "") errorobj.phone = "phone is required";

    if (form.gender === "") errorobj.gender = "gender is required";

    if (form.height === "") errorobj.height = "height is required";

    if (form.weight === "") errorobj.weight = "weight is required";

    setError(errorobj);

    if (Object.keys(errorobj).length === 0) {
      const oldData = JSON.parse(localStorage.getItem("Addmissionform")) || [];

      const newStudent = { ...form };

      const newData = [...oldData, newStudent];

      localStorage.setItem("Addmissionform", JSON.stringify(newData));

      alert("Form Submitted");

      navigate("/");

      setForm({
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        age: "",
        phone: "",
        gender: "",
        height: "",
        weight: "",
      });
    }
  }

  return (
    <div className="admission-container">
      <div className="form-card">
        <form onSubmit={handlechange} className="admission-form">
          <h2 className="form-title">Admission Form</h2>

          {/* IMAGE PREVIEW */}
          {form.image && (
            <div className="preview-wrapper">
              <img src={form.image} alt="preview" className="preview-image" />
            </div>
          )}

          <div className="form-grid">
            {/* ID */}
            <div className="input-box">
              <input
                type="number"
                placeholder="Id Number"
                value={form.id}
                onChange={(e) => setForm({ ...form, id: e.target.value })}
                className="form-input"
              />

              {error.id && <p className="error-text">{error.id}</p>}
            </div>

            {/* IMAGE */}
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files[0];

                if (!file) return;

                // ✅ size check
                if (file.size > 200000) {
                  alert("Image size should be less than 200KB");
                  return;
                }

                const reader = new FileReader();

                reader.onloadend = () => {
                  setForm({
                    ...form,
                    image: reader.result,
                  });
                };

                reader.readAsDataURL(file);
              }}
              className="form-input"
            />

            {/* First Name */}
            <div className="input-box">
              <input
                type="text"
                placeholder="First Name"
                value={form.firstName}
                onChange={(e) =>
                  setForm({
                    ...form,
                    firstName: e.target.value,
                  })
                }
                className="form-input"
              />

              {error.firstName && (
                <p className="error-text">{error.firstName}</p>
              )}
            </div>

            {/* Last Name */}
            <div className="input-box">
              <input
                type="text"
                placeholder="Last Name"
                value={form.lastName}
                onChange={(e) =>
                  setForm({
                    ...form,
                    lastName: e.target.value,
                  })
                }
                className="form-input"
              />

              {error.lastName && <p className="error-text">{error.lastName}</p>}
            </div>

            {/* Age */}
            <div className="input-box">
              <input
                type="number"
                placeholder="Age"
                value={form.age}
                onChange={(e) =>
                  setForm({
                    ...form,
                    age: e.target.value,
                  })
                }
                className="form-input"
              />

              {error.age && <p className="error-text">{error.age}</p>}
            </div>

            {/* Email */}
            <div className="input-box">
              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) =>
                  setForm({
                    ...form,
                    email: e.target.value,
                  })
                }
                className="form-input"
              />

              {error.email && <p className="error-text">{error.email}</p>}
            </div>

            {/* Phone */}
            <div className="input-box">
              <input
                type="text"
                placeholder="Phone"
                value={form.phone}
                onChange={(e) =>
                  setForm({
                    ...form,
                    phone: e.target.value,
                  })
                }
                className="form-input"
              />

              {error.phone && <p className="error-text">{error.phone}</p>}
            </div>

            {/* Height */}
            <div className="input-box">
              <input
                type="text"
                placeholder="Height"
                value={form.height}
                onChange={(e) =>
                  setForm({
                    ...form,
                    height: e.target.value,
                  })
                }
                className="form-input"
              />

              {error.height && <p className="error-text">{error.height}</p>}
            </div>

            {/* Weight */}
            <div className="input-box">
              <input
                type="text"
                placeholder="Weight"
                value={form.weight}
                onChange={(e) =>
                  setForm({
                    ...form,
                    weight: e.target.value,
                  })
                }
                className="form-input"
              />

              {error.weight && <p className="error-text">{error.weight}</p>}
            </div>

            {/* Gender */}
            <div className="input-box">
              <select
                value={form.gender}
                onChange={(e) =>
                  setForm({
                    ...form,
                    gender: e.target.value,
                  })
                }
                className="form-input"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>

              {error.gender && <p className="error-text">{error.gender}</p>}
            </div>
          </div>

          <button type="submit" className="submit-btn">
            Submit Form
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudentForm;
