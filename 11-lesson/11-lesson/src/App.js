import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navBar/Navbar";
import HomePage from "./pages/homePage/HomePage";
import { Footer } from "./components/footer/Footer";
import MedsPage from "./pages/meds/MedsPage";
import AddPetPage from "./pages/addPetPage/AddPetPage";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/meds" element={<MedsPage />}></Route>
        <Route path="/addPet" element={<AddPetPage />}></Route>
      </Routes>
      <Footer>Copyright Lukas 2023. All rights reserved.</Footer>
    </>
  );
}

export default App;
