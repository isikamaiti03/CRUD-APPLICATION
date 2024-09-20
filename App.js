
import React from "react";
import Navbar from "./WeeKPractice/Navbar";
import Codeforinterview from "./WeeKPractice/Codeforinterview";
import Alluser from "./WeeKPractice/Alluser";
import Adduser from "./WeeKPractice/Adduser";
import { Routes, Route} from "react-router-dom";
import EditUser from "./WeeKPractice/EditUser";
// import './App.css';


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
