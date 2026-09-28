import HeaderComponent from "./assets/components/Header";
import { useEffect, useState } from "react";

// 1. Añade BrowserRouter a la importación
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Catalog from "./assets/pages/Catalog";
import Home from "./assets/pages/Home";

function App() {
  return (
    // 2. Envuelve todo con BrowserRouter
    <BrowserRouter>
      <div>
        <HeaderComponent />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
