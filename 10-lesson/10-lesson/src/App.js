import "./App.css";
import HomePage from "./pages/homePage/HomePage";
import "@fontsource/roboto";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import AboutPage from "./pages/about/AboutPage";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
