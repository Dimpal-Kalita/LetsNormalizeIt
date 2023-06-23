import { Routes, Route } from "react-router-dom";

import { Home, Error, Bot } from "./Pages";

import { Navbar, Footer } from "./Components";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/bot" element={<Bot />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
