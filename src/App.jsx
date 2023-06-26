import { Routes, Route } from "react-router-dom";

import { Home, Error, Bot } from "./Pages";

import { Navbar, Footer } from "./Components";

import MaleArticle from "./Components/Articles/MaleArticle";
import FemaleArticle from "./Components/Articles/FemaleArticle";
import TransgenderArticle from "./Components/Articles/TransgenderArticle";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/bot" element={<Bot />} />
        <Route path="/male" element={<MaleArticle />} />
        <Route path="/female" element={<FemaleArticle />} />
        <Route path="/transgender" element={<TransgenderArticle />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
