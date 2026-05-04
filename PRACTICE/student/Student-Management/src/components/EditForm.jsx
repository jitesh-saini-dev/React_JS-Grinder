// import { useState, useEffect } from "react";

// const EditForm = ({ editStudent, setShowModal, Studentdata, setStudentdata }) => {

//   const [form, setForm] = useState(editStudent);

//   useEffect(() => {
//     setForm(editStudent);
//   }, [editStudent]);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const updated = Studentdata.map((s) =>
//       s.id === form.id ? form : s
//     );

//     setStudentdata(updated);

//     // localStorage update
//     localStorage.setItem("Addmissionform", JSON.stringify(updated));

//     setShowModal(false);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="flex flex-col gap-3">

//       <h2 className="text-xl font-bold text-center">Edit Student</h2>

//       <input
//         type="text"
//         value={form.firstName}
//         onChange={(e) => setForm({ ...form, firstName: e.target.value })}
//         className="border p-2 rounded"
//         placeholder="First Name"
//       />

//       <input
//         type="text"
//         value={form.lastName}
//         onChange={(e) => setForm({ ...form, lastName: e.target.value })}
//         className="border p-2 rounded"
//         placeholder="Last Name"
//       />

//       <input
//         type="number"
//         value={form.age}
//         onChange={(e) => setForm({ ...form, age: e.target.value })}
//         className="border p-2 rounded"
//         placeholder="Age"
//       />

//       <input
//         type="email"
//         value={form.email}
//         onChange={(e) => setForm({ ...form, email: e.target.value })}
//         className="border p-2 rounded"
//         placeholder="Email"
//       />
//          <input
//         type="number"
//         value={form.phone}
//         onChange={(e) => setForm({ ...form, phone: e.target.value })}
//         className="border p-2 rounded"
//         placeholder="Age"
//       />
//          <input
//         type="number"
//         value={form.height}
//         onChange={(e) => setForm({ ...form, height: e.target.value })}
//         className="border p-2 rounded"
//         placeholder="Age"
//       />
//          <input
//         type="number"
//         value={form.weight}
//         onChange={(e) => setForm({ ...form, weight: e.target.value })}
//         className="border p-2 rounded"
//         placeholder="Age"
//       />

//       <button className="bg-blue-500 text-white py-2 rounded">
//         Update
//       </button>
//     </form>
//   );
// };

// export default EditForm;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./EditForm.css";

const EditForm = () => {
  const { id } = useParams();

  const [form, setForm] = useState({
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

  // ✅ OLD DATA SHOW
  useEffect(() => {
    const allStudents = JSON.parse(localStorage.getItem("AllStudents")) || [];

    const singleStudent = allStudents.find((s) => String(s.id) === String(id));

    if (singleStudent) {
      setForm(singleStudent);
    }
  }, [id]);

  // ✅ UPDATE DATA
  const handleSubmit = (e) => {
    e.preventDefault();

    const allStudents = JSON.parse(localStorage.getItem("AllStudents")) || [];

    const updated = allStudents.map((s) =>
      String(s.id) === String(id) ? form : s,
    );

    // update localstorage
    localStorage.setItem("AllStudents", JSON.stringify(updated));

    localStorage.setItem("Addmissionform", JSON.stringify(updated));

    // refresh home
    window.location.href = "/";
  };

  return (
    <div className="edit-page">
      <form onSubmit={handleSubmit} className="edit-form">
        <h2 className="edit-title">Edit Student</h2>

        <div className="edit-grid">
          {/* FIRST NAME */}
          <input
            type="text"
            value={form.firstName}
            onChange={(e) =>
              setForm({
                ...form,
                firstName: e.target.value,
              })
            }
            className="edit-input"
            placeholder="First Name"
          />

          {/* LAST NAME */}
          <input
            type="text"
            value={form.lastName}
            onChange={(e) =>
              setForm({
                ...form,
                lastName: e.target.value,
              })
            }
            className="edit-input"
            placeholder="Last Name"
          />

          {/* EMAIL */}
          <input
            type="email"
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
            className="edit-input"
            placeholder="Email"
          />

          {/* AGE */}
          <input
            type="number"
            value={form.age}
            onChange={(e) =>
              setForm({
                ...form,
                age: e.target.value,
              })
            }
            className="edit-input"
            placeholder="Age"
          />

          {/* PHONE */}
          <input
            type="number"
            value={form.phone}
            onChange={(e) =>
              setForm({
                ...form,
                phone: e.target.value,
              })
            }
            className="edit-input"
            placeholder="Phone"
          />

          {/* HEIGHT */}
          <input
            type="number"
            value={form.height}
            onChange={(e) =>
              setForm({
                ...form,
                height: e.target.value,
              })
            }
            className="edit-input"
            placeholder="Height"
          />

          {/* WEIGHT */}
          <input
            type="number"
            value={form.weight}
            onChange={(e) =>
              setForm({
                ...form,
                weight: e.target.value,
              })
            }
            className="edit-input"
            placeholder="Weight"
          />

          {/* GENDER */}
          <select
            value={form.gender}
            onChange={(e) =>
              setForm({
                ...form,
                gender: e.target.value,
              })
            }
            className="edit-input"
          >
            <option value="">Select Gender</option>

            <option value="male">Male</option>

            <option value="female">Female</option>

            <option value="other">Other</option>
          </select>
        </div>

        <button type="submit" className="update-btn">
          Update Student
        </button>
      </form>
    </div>
  );
};

export default EditForm;
