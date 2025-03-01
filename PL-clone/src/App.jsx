import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <div className="w-full flex flex-col min-h-screen"> {/* Ensure full width */}
        <Header />
        <main className="flex-grow w-full"> {/* Ensure main also has full width */}
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
