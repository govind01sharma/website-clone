import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Fixtures from "./components/Fixtures";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="w-full flex flex-col min-h-screen"> 
        <Header />
        
        <main className="flex-grow w-full pt-[200px]">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/fixtures" element={<Fixtures />} />
          </Routes>
        </main>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
