import React from "react";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Figurines from "./pages/Figurines";
import Posters from "./pages/Posters";
import Mangas from "./pages/Mangas";
import Contact from "./pages/Contact";
import Boutique from "./pages/Boutique";
import Page_produit from "./pages/Page_produit";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/Figurines" element={<Figurines />} />
        <Route path="/Posters" element={<Posters />} />
        <Route path="/Mangas" element={<Mangas />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Shop" element={<Boutique />} />
        <Route path="/Produit" element={<Page_produit />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;