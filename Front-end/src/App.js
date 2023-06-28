import React from "react";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Figurines from "./pages/Figurines";
import Posters from "./pages/Posters";
import Mangas from "./pages/Mangas";
import Contact from "./pages/Contact";
import Boutique from "./pages/Boutique";
import Page_produit from "./pages/Page_produit";
import Profil from "./pages/Profil";
import Login from "./pages/Login";
import BoutiqueZoro from "./pages/Boutique zoro";
import BoutiqueLaw from "./pages/Boutique law";
import BoutiqueBroly from "./pages/Boutique broly";
import BoutiqueLivai from "./pages/Boutique Livai";
import BoutiqueTanjiro from "./pages/Boutique tanjiro";
import BoutiqueSasukeItachi from "./pages/Boutique sasukeItachi";
import BoutiqueAsta from "./pages/Boutique asta";
import BoutiqueEren from "./pages/Boutique eren";
import BoutiqueIchigo from "./pages/Boutique ichigo";
import BoutiqueBerserk from "./pages/Boutique berserk";
import BoutiqueMha from "./pages/Boutique mha";
import BoutiqueOnepiece from "./pages/Boutique onepiece";
import BoutiqueFairyTail from "./pages/Boutique fairyTail";
import BoutiqueChainsawMan from "./pages/Boutique chainsawMan";
import BoutiqueDeathNote from "./pages/Boutique deathNote";
import BoutiqueDB from "./pages/Boutique DB";
import BoutiqueOnepiece2 from "./pages/Boutique Onepiece2";
import BoutiqueNaruto from "./pages/Boutique Naruto";

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
        <Route path="/93c5ae63" element={<BoutiqueZoro />} />
        <Route path="/f639818b" element={<BoutiqueLaw />} />
        <Route path="/29a9301c" element={<BoutiqueBroly/>} />
        <Route path="/d0edb41f" element={<BoutiqueLivai/>} />
        <Route path="/5f04a9e5" element={<BoutiqueTanjiro/>} />
        <Route path="/d8e6adf7" element={<BoutiqueSasukeItachi/>} />
        <Route path="/eb63be62" element={<BoutiqueAsta/>} />
        <Route path="/9cea2370" element={<BoutiqueEren/>} />
        <Route path="/963827a9" element={<BoutiqueIchigo/>} />
        <Route path="/ff88e49c" element={<BoutiqueBerserk/>} />
        <Route path="/08273ca0" element={<BoutiqueMha/>} />
        <Route path="/ec26daf6" element={<BoutiqueOnepiece/>} />
        <Route path="/4184ba9e" element={<BoutiqueFairyTail/>} />
        <Route path="/44323b0d" element={<BoutiqueChainsawMan/>} />
        <Route path="/1ffa2429" element={<BoutiqueDeathNote/>} />
        <Route path="/9e33448b" element={<BoutiqueDB/>} />
        <Route path="/3c805548" element={<BoutiqueOnepiece2/>} />
        <Route path="/e868a36c" element={<BoutiqueNaruto/>} />
        <Route path="/Produit" element={<Page_produit />} />
        <Route path="/Register" element={<Profil />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;