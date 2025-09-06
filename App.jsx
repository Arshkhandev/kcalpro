import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Tracker from "./pages/Tracker";
import { FoodProvider } from "./context/FoodContext"; // import context

const App = () => {
  const [query, setQuery] = useState("");

  return (
    <FoodProvider>
      <BrowserRouter>
        <Navbar query={query} setQuery={setQuery} />
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home query={query} />} />
          <Route path="/tracker" element={<Tracker />} />
        </Routes>
      </BrowserRouter>
    </FoodProvider>
  );
};

export default App;
