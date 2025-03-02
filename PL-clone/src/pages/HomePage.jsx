import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Fixtures from '../components/Fixtures'; // Assuming Fixtures.jsx is in the same directory

function HomePage() {
  return (
    <div className="bg-[#37003C] h-screen relative">
      {/* Fixtures Component (Overlay) */}
      <div className="absolute top-0 left-0 z-200 w-auto px-2"> {/*  Adjust width as needed */}
        <Fixtures />
      </div>

      {/* HomePage Content */}
      <div className="text-white">
        
      </div>
    </div>
  );
}

export default HomePage;
