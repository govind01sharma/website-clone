import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Fixtures from '../components/Fixtures';
import NewsSection from '../components/NewsSection';

function HomePage() {
  return (
    <div className="min-h-screen relative">
      {/* Fixtures Component (Overlay) */}
      <div className="absolute top-0 left-0 z-20 w-auto px-2">
        <Fixtures />
      </div>

      {/* Section with Purple Background */}
      <div className="bg-[#37003C] text-white flex justify-end">
        <div className="w-4/5 min-h-[80vh] pl-10">
          <div className="scale-90">
            <NewsSection />
          </div>
        </div>
      </div>

      {/* Section with White Background */}
      <div className="bg-white min-h-[20vh]"></div>
    </div>
  );
}

export default HomePage;
