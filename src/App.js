import React from "react";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Figurines from "./pages/Figurines";
import Posters from "./pages/Posters";
import Mangas from "./pages/Mangas";
import Contact from "./pages/Contact";
import Page_produit from "./pages/Page_produit";
import Logo from "./components/Logo";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Présentation from "./components/Présentation";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/Figurines" element={<Figurines />} />
        <Route path="/Posters" element={<Posters />} />
        <Route path="/Mangas" element={<Mangas />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Produit" element={<Page_produit />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;