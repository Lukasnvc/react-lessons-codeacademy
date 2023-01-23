import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navBar/Navbar";
import HomePage from "./pages/HomePage";
import { Footer } from "./components/footer/Footer";
import MedsPage from "./pages/MedsPage";
import AddPetPage from "./pages/AddPetPage";
import AddMedsPage from "./pages/AddMedsPage";
import PetMedsPage from "./pages/PetMedsPage";
import AddLogsPage from "./pages/AddLogsPage";
import AddPrescriptionPage from "./pages/AddPrescriptionPage";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/meds" element={<MedsPage />}></Route>
        <Route path="/addPet" element={<AddPetPage />}></Route>
        <Route path="/addMeds" element={<AddMedsPage />}></Route>
        <Route path="/pet/:id" element={<PetMedsPage />}></Route>
        <Route path="/addlogs/:id" element={<AddLogsPage />}></Route>
        <Route path="/addpresc/:id" element={<AddPrescriptionPage />}></Route>
      </Routes>
      <Footer>Copyright Lukas 2023. All rights reserved.</Footer>
    </>
  );
}

export default App;
