// import { useState, useEffect } from "react";
// import StudentForm from "./components/StudentForm";
// import StudentList from "./components/StudentList";

// function App() {
//   const [students, setStudents] = useState([]);
//   const [editData, setEditData] = useState(null);

//   // Load from localStorage
//   useEffect(() => {
//     const data = JSON.parse(localStorage.getItem("students")) || [];
//     setStudents(data);
//   }, []);

//   // Save to localStorage
//   useEffect(() => {
//     localStorage.setItem("students", JSON.stringify(students));
//   }, [students]);

//   const addStudent = (student) => {
//     if (editData) {
//       const updated = students.map((s) =>
//         s.id === editData.id ? { ...student, id: editData.id } : s
//       );
//       setStudents(updated);
//       setEditData(null);
//     } else {
//       setStudents([...students, { ...student, id: Date.now() }]);
//     }
//   };

//   const deleteStudent = (id) => {
//     setStudents(students.filter((s) => s.id !== id));
//   };

//   const editStudent = (student) => {
//     setEditData(student);
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Student Dashboard</h2>

//       <StudentForm addStudent={addStudent} editData={editData} />

//       {students.length === 0 ? (
//         <p>No students found</p>
//       ) : (
//         <StudentList
//           students={students}
//           deleteStudent={deleteStudent}
//           editStudent={editStudent}
//         />
//       )}
//     </div>
//   );
// }

// export default App;

import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import EditForm from "./components/EditForm";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
      });
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<StudentList users={users} />} />
          <Route path="/Admitionsfrom" element={<StudentForm />} />
          <Route path="/edit/:id" element={<EditForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
