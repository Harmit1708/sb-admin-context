import "./App.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Allstudents from "./components/Allstudents";
import Addstudents from "./components/Addstudents";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React,{ useState } from "react";
import EditStudent from "./components/EditStudent";

export const StudentContext = React.createContext();

function App() {
  let data = {
    earning: "40,000",
    annual: "2,40,000",
    task: 20,
    pending: 26,
  };

  let [students, setStudents] = useState([
    {
      name: "Harmit",
      email: "Harmit@gmail.com",
      mobile: "12345678",
      class: "B30WD",
    },
    {
      name: "Hemant",
      email: "Hemant@gmail.com",
      mobile: "12345678",
      class: "B30WD",
    },
    {
      name: "Raj",
      email: "Raj@gmail.com",
      mobile: "12345678",
      class: "B30WD",
    },
  ]);
  return (
    <BrowserRouter>
      <StudentContext.Provider value={{ students, setStudents }}>
        <div style={{ display: "grid", gridTemplateColumns: "13% 85%" }}>
          <div>
            <Sidebar />
          </div>
          <div>
            <Routes>
              <Route path="/dashboard" element={<Dashboard data={data} />} />
              <Route
                path="/all-students"
                element={<Allstudents data={{ students, setStudents }} />}
              />
              <Route
                path="/add-students"
                element={<Addstudents data={{ students, setStudents }} />}
              />
              <Route
                path="/edit-student/:id"
                element={<EditStudent data={{ students, setStudents }} />}
              />
              <Route path="/" element={<Dashboard data={data} />} />
            </Routes>
          </div>
        </div>
      </StudentContext.Provider>
    </BrowserRouter>
  );
}

export default App;
