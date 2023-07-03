import { Routes, Route } from "react-router-dom";

import { useRhinoValue } from "react-rhino";

import { Home, Error } from "./Pages";

import { Footer } from "./Components";

import Navbar from "./Components/LoggedOut/Navbar/Navbar";
import Signin from "./Components/LoggedOut/Register/Signin";
import Signup from "./Components/LoggedOut/Register/Signup";
import ForgotPassword from "./Components/LoggedOut/Register/ForgotPassword";

import MaleArticle from "./Components/Articles/MaleArticle";
import FemaleArticle from "./Components/Articles/FemaleArticle";
import TransgenderArticle from "./Components/Articles/TransgenderArticle";
import Bot from "./Pages/Bot/Bot";

const App = () => {
  const id = useRhinoValue("id");

  return (
    <div>
      {id === "" ? (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Error />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/male" element={<MaleArticle />} />
            <Route path="/female" element={<FemaleArticle />} />
            <Route path="/transgender" element={<TransgenderArticle />} />
          </Routes>
          <Footer />
        </>
      ) : (
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
      )}
    </div>
  );
};

export default App;
