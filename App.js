
import React from "react";
import Navbar from "./CRUDProject/Navbar";
import Codeforinterview from "./CRUDProject/Codeforinterview";
import Alluser from "./CRUDProject/Alluser";
import Adduser from "./CRUDProject/Adduser";
import { Routes, Route} from "react-router-dom";
import EditUser from "./CRUDProject/EditUser";
import './App.css';


const App = () => {
 
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Codeforinterview/>}/>
      <Route path="/all" element={<Alluser/>}/>
      <Route path="/add" element={<Adduser/>}/>
      <Route path="/edit/:id" element={<EditUser/>}/>
    </Routes> 
   </> 
  );
};

export default App;
