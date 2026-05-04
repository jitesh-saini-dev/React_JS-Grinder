// import { useEffect, useState } from "react";
// import EditForm from "./EditForm";

// const Home = ({ users }) => {
//   const [Studentdata, setStudentdata] = useState([]);
//   const [search, setsearch] = useState("");
//   const [sort, setsort] = useState("");
//   const [selectedGender, setSelectedGender] = useState("");
//   const [editStudent, setEditStudent] = useState(null);
//   const [showModal, setShowModal] = useState(false);

//   // ✅ FIX: Proper load (props + localStorage)
//   useEffect(() => {
//     const Addmit = JSON.parse(localStorage.getItem("Addmissionform")) || [];

//     // 👉 merge WITHOUT duplicate
//     const merged = [...users, ...Addmit];

//     // 👉 remove duplicate by id
//     const unique = merged.filter(
//       (item, index, self) => index === self.findIndex((x) => x.id === item.id),
//     );

//     setStudentdata(unique);
//   }, [users]);

//   const handleDelete = (id) => {
//     const updated = Studentdata.filter((s) => s.id !== id);

//     setStudentdata(updated);

//     // localStorage bhi update karo
//     const Addmit = JSON.parse(localStorage.getItem("Addmissionform")) || [];
//     const newLocal = Addmit.filter((s) => s.id !== id);

//     localStorage.setItem("Addmissionform", JSON.stringify(newLocal));
//   };

//   // 🔍 Search
//   const filterdatas = Studentdata.filter((item) =>
//     item.firstName?.toLowerCase().includes(search.toLowerCase()),
//   );

//   // 🎯 Gender Filter
//   const genders = [...new Set(Studentdata.map((x) => x.gender))];

//   const genderData = selectedGender
//     ? filterdatas.filter((item) => item.gender === selectedGender)
//     : filterdatas;

//   // 🔃 Sort
//   const Sorteddata = [...genderData];

//   if (sort === "ageL") Sorteddata.sort((a, b) => a.age - b.age);
//   if (sort === "ageH") Sorteddata.sort((a, b) => b.age - a.age);
//   if (sort === "HightL") Sorteddata.sort((a, b) => a.height - b.height);
//   if (sort === "HightH") Sorteddata.sort((a, b) => b.height - a.height);
//   if (sort === "WeightL") Sorteddata.sort((a, b) => a.weight - b.weight);
//   if (sort === "WeightH") Sorteddata.sort((a, b) => b.weight - a.weight);

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="bg-white p-5 rounded-xl shadow-md mb-6 text-center">
//         <h1 className="text-2xl font-bold text-gray-700">
//           🎓 Student Dashboard
//         </h1>
//       </div>

//       <div className="bg-white p-4 rounded-xl shadow-md flex flex-wrap gap-4 justify-between items-center">
//         <input
//           type="search"
//           placeholder="🔍 Search student..."
//           value={search}
//           onChange={(e) => setsearch(e.target.value)}
//           className="border px-4 py-2 rounded-lg"
//         />

//         <select
//           onChange={(e) => setsort(e.target.value)}
//           className="border px-4 py-2 rounded-lg"
//         >
//           <option value="">Sort</option>
//           <option value="ageL">Age ↑</option>
//           <option value="ageH">Age ↓</option>
//           <option value="HightL">Height ↑</option>
//           <option value="HightH">Height ↓</option>
//           <option value="WeightL">Weight ↑</option>
//           <option value="WeightH">Weight ↓</option>
//         </select>

//         <div className="flex gap-2">
//           <button
//             onClick={() => setSelectedGender("")}
//             className="bg-gray-300 px-3 py-1 rounded"
//           >
//             All
//           </button>

//           {genders.map((g, index) => (
//             <button
//               key={index}
//               onClick={() => setSelectedGender(g)}
//               className="bg-blue-400 text-white px-3 py-1 rounded"
//             >
//               {g}
//             </button>
//           ))}
//         </div>
//       </div>

//       <div className="bg-white mt-6 rounded-xl shadow-md overflow-hidden">
//         <table className="w-full text-sm text-center">
//           <thead className="bg-gray-800 text-white">
//             <tr>
//               <th className="p-3">ID</th>
//               <th className="p-3">Image</th>
//               <th className="p-3">Name</th>
//               <th className="p-3">Email</th>
//               <th className="p-3">Age</th>
//               <th className="p-3">Gender</th>
//               <th className="p-3">Height</th>
//               <th className="p-3">Weight</th>
//               <th className="p-3">Phone</th>
//               <th className="p-3">Action</th>
//             </tr>
//           </thead>

//           <tbody>
//             {Sorteddata.length === 0 ? (
//               <tr>
//                 <td colSpan="9" className="p-4 text-gray-500">
//                   No Studend data found
//                 </td>
//               </tr>
//             ) : (
//               Sorteddata.map((s) => (
//                 <tr key={s.id} className="border-b">
//                   <td className="p-3">{s.id}</td>
//                   <td className="p-3">
//                     {" "}
//                     <img src={s.image} alt="" />
//                   </td>
//                   <td className="p-3">
//                     {s.firstName} {s.lastName}
//                   </td>
//                   <td className="p-3">{s.email}</td>
//                   <td className="p-3">{s.age}</td>
//                   <td className="p-3">{s.gender}</td>
//                   <td className="p-3">{s.height}</td>
//                   <td className="p-3">{s.weight}</td>
//                   <td className="p-3">{s.phone}</td>

//                   <td>
//                     <button
//                       onClick={() => {
//                         setEditStudent(s);
//                         setShowModal(true);
//                       }}
//                       className="bg-yellow-400 px-2 py-1 mx-1 rounded"
//                     >
//                       Edit
//                     </button>
//                     <button
//                       onClick={() => handleDelete(s.id)}
//                       className="bg-red-500 text-white px-2 py-1 mx-1 rounded"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-6 rounded-xl w-[400px] relative">
//             {/* ❌ Close Button */}
//             <button
//               onClick={() => setShowModal(false)}
//               className="absolute top-2 right-2 text-red-500 text-xl"
//             >
//               ✖
//             </button>
//             {/* 🔥 Form */}
//             <EditForm
//               editStudent={editStudent}
//               setShowModal={setShowModal}
//               setStudentdata={setStudentdata}
//               Studentdata={Studentdata}
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Home;

// import { useEffect, useState } from "react";
// import "./Home.css";
// import { useNavigate } from "react-router-dom";

// const StudentList = ({ users }) => {
//   const [Studentdata, setStudentdata] = useState([]);
//   const [search, setsearch] = useState("");
//   const [sort, setsort] = useState("");
//   const [selectedGender, setSelectedGender] = useState("");

//   const navigate = useNavigate();
//   useEffect(() => {
//     // API USERS
//     const apiUsers = users || [];

//     // LOCAL USERS
//     const localUsers = JSON.parse(localStorage.getItem("Addmissionform")) || [];

//     // MERGE BOTH
//     const merged = [...apiUsers, ...localUsers];

//     // REMOVE DUPLICATES
//     const unique = merged.filter(
//       (item, index, self) =>
//         index === self.findIndex((x) => String(x.id) === String(item.id)),
//     );

//     setStudentdata(unique);
//   }, [users]);

//   const handleDelete = (id) => {
//     const updated = Studentdata.filter((s) => s.id !== id);

//     setStudentdata(updated);

//     // ✅ dono update karo
//     localStorage.setItem("AllStudents", JSON.stringify(updated));

//     localStorage.setItem("Addmissionform", JSON.stringify(updated));
//   };

//   // SEARCH
//   const filterdatas = Studentdata.filter((item) =>
//     item.firstName?.toLowerCase().includes(search.toLowerCase()),
//   );

//   // GENDER FILTER
//   const genders = [...new Set(Studentdata.map((x) => x.gender))];

//   const genderData = selectedGender
//     ? filterdatas.filter((item) => item.gender === selectedGender)
//     : filterdatas;

//   // SORT
//   const Sorteddata = [...genderData];

//   if (sort === "ageL") Sorteddata.sort((a, b) => a.age - b.age);
//   if (sort === "ageH") Sorteddata.sort((a, b) => b.age - a.age);
//   if (sort === "WeightL") Sorteddata.sort((a, b) => a.weight - b.weight);
//   if (sort === "WeightH") Sorteddata.sort((a, b) => b.weight - a.weight);

//   return (
//     <div className="dashboard">
//       {/* HEADER */}
//       <div className="dashboard-header">
//         <h1>Student Management Dashboard</h1>
//       </div>

//       {/* FILTER */}
//       <div className="filter-section">
//         <input
//           type="search"
//           placeholder="🔍 Search student..."
//           value={search}
//           onChange={(e) => setsearch(e.target.value)}
//           className="search-input"
//         />

//         <select
//           onChange={(e) => setsort(e.target.value)}
//           className="sort-select"
//         >
//           <option value="">Sort</option>
//           <option value="ageL">Age: Low to High</option>
//           <option value="ageH">Age: High to Low</option>
//           <option value="WeightL">Weight: Low to High</option>
//           <option value="WeightH">Weight: High to Low</option>
//         </select>

//         <div className="gender-buttons">
//           <button onClick={() => setSelectedGender("")} className="all-btn">
//             All
//           </button>

//           {genders.map((g, index) => (
//             <button
//               key={index}
//               onClick={() => setSelectedGender(g)}
//               className="gender-btn"
//             >
//               {g}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* TABLE */}
//       <div className="table-container">
//         <table className="student-table">
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Image</th>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Age</th>
//               <th>Gender</th>
//               <th>Height</th>
//               <th>Weight</th>
//               <th>Phone</th>
//               <th>Action</th>
//             </tr>
//           </thead>

//           <tbody>
//             {Sorteddata.length === 0 ? (
//               <tr>
//                 <td colSpan="10" className="no-data">
//                   No Student Data Found
//                 </td>
//               </tr>
//             ) : (
//               Sorteddata.map((s) => (
//                 <tr key={s.id}>
//                   <td>{s.id}</td>

//                   <td>
//                     <img src={s.image} alt="" className="student-image" />
//                   </td>

//                   <td>
//                     {s.firstName} {s.lastName}
//                   </td>

//                   <td>{s.email}</td>
//                   <td>{s.age}</td>
//                   <td>{s.gender}</td>
//                   <td>{s.height}</td>
//                   <td>{s.weight}</td>
//                   <td>{s.phone}</td>

//                   <td className="action-buttons">
//                     <button
//                       onClick={() => navigate(`/edit/${s.id}`)}
//                       className="edit-btn"
//                     >
//                       Edit
//                     </button>

//                     <button
//                       onClick={() => handleDelete(s.id)}
//                       className="delete-btn"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default StudentList;


import { useEffect, useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import TablePagination from "@mui/material/TablePagination";

const StudentList = ({ users }) => {
  const [Studentdata, setStudentdata] = useState([]);
  const [search, setsearch] = useState("");
  const [sort, setsort] = useState("");
  const [selectedGender, setSelectedGender] = useState("");

  // ✅ Pagination states
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const navigate = useNavigate();

  useEffect(() => {
    const apiUsers = users || [];
    const localUsers = JSON.parse(localStorage.getItem("Addmissionform")) || [];
    const merged = [...apiUsers, ...localUsers];
    const unique = merged.filter(
      (item, index, self) =>
        index === self.findIndex((x) => String(x.id) === String(item.id))
    );
    setStudentdata(unique);
  }, [users]);

  const handleDelete = (id) => {
    const updated = Studentdata.filter((s) => s.id !== id);
    setStudentdata(updated);
    localStorage.setItem("AllStudents", JSON.stringify(updated));
    localStorage.setItem("Addmissionform", JSON.stringify(updated));
  };

  // ✅ Pagination handlers
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // reset to first page
  };

  // SEARCH
  const filterdatas = Studentdata.filter((item) =>
    item.firstName?.toLowerCase().includes(search.toLowerCase())
  );

  // GENDER FILTER
  const genders = [...new Set(Studentdata.map((x) => x.gender))];
  const genderData = selectedGender
    ? filterdatas.filter((item) => item.gender === selectedGender)
    : filterdatas;

  // SORT
  const Sorteddata = [...genderData];
  if (sort === "ageL") Sorteddata.sort((a, b) => a.age - b.age);
  if (sort === "ageH") Sorteddata.sort((a, b) => b.age - a.age);
  if (sort === "WeightL") Sorteddata.sort((a, b) => a.weight - b.weight);
  if (sort === "WeightH") Sorteddata.sort((a, b) => b.weight - a.weight);

  // ✅ Slice data for current page
  const paginatedData = Sorteddata.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <div className="dashboard">
      {/* HEADER */}
      <div className="dashboard-header">
        <h1>Student Management Dashboard</h1>
      </div>

      {/* FILTER */}
      <div className="filter-section">
        <input
          type="search"
          placeholder="🔍 Search student..."
          value={search}
          onChange={(e) => {
            setsearch(e.target.value);
            setPage(0); // ✅ search pe page reset
          }}
          className="search-input"
        />

        <select
          onChange={(e) => setsort(e.target.value)}
          className="sort-select"
        >
          <option value="">Sort</option>
          <option value="ageL">Age: Low to High</option>
          <option value="ageH">Age: High to Low</option>
          <option value="WeightL">Weight: Low to High</option>
          <option value="WeightH">Weight: High to Low</option>
        </select>

        <div className="gender-buttons">
          <button onClick={() => setSelectedGender("")} className="all-btn">
            All
          </button>
          {genders.map((g, index) => (
            <button
              key={index}
              onClick={() => {
                setSelectedGender(g);
                setPage(0); // ✅ gender filter pe page reset
              }}
              className="gender-btn"
            >
              {g}
            </button>
          ))}
        </div>
      </div>

      {/* TABLE */}
      <div className="table-container">
        <table className="student-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Height</th>
              <th>Weight</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {paginatedData.length === 0 ? (
              <tr>
                <td colSpan="10" className="no-data">
                  No Student Data Found
                </td>
              </tr>
            ) : (
              paginatedData.map((s) => (  // ✅ paginatedData use karo
                <tr key={s.id}>
                  <td>{s.id}</td>
                  <td>
                    <img src={s.image} alt="" className="student-image" />
                  </td>
                  <td>{s.firstName} {s.lastName}</td>
                  <td>{s.email}</td>
                  <td>{s.age}</td>
                  <td>{s.gender}</td>
                  <td>{s.height}</td>
                  <td>{s.weight}</td>
                  <td>{s.phone}</td>
                  <td className="action-buttons">
                    <button
                      onClick={() => navigate(`/edit/${s.id}`)}
                      className="edit-btn"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(s.id)}
                      className="delete-btn"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        {/* ✅ MUI Pagination - table ke neeche */}
        <TablePagination
          component="div"
          count={Sorteddata.length}        // total filtered+sorted records
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[5, 10, 25, 50]}  // options
        />
      </div>
    </div>
  );
};

export default StudentList;