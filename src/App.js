import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import SideBar from "./components/common/SideBar";
import ApprovedPRs from "./components/ApprovedPRs";
import AcceptedPRs from "./components/AcceptedPRs";
import RecievedPRs from "./components/RecievedPRs";
import PendingPRs from "./components/PendingPRs";
import Profile from "./components/Profile";
import Login from "./components/Login";
import AcceptReject from "./components/Accept_Reject";
import "./index.css";

function App() {
  return (
    <div>
      <Header />
      <SideBar />
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="/approved" element={<ApprovedPRs />} />
        <Route path="/accepted" element={<AcceptedPRs />} />
        <Route path="/recieved" element={<RecievedPRs />} />
        <Route path="/pending" element={<PendingPRs />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/acceptReject" element={<AcceptReject />} />
      </Routes>
    </div>
  );
}

export default App;
