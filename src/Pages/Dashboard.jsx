// src/pages/Dashboard.jsx
import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MainContent from "../components/MainContent";

const Dashboard = () => (
  <div className="flex h-screen">
    <Sidebar />
    <div className="flex-grow flex flex-col">
      <Header />
      <MainContent />
    </div>
  </div>
);

export default Dashboard;
