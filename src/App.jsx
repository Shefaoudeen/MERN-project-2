import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Editexercise from "./Pages/Editexercise";
import Createexe from "./Pages/Createexe";
import Usercreate from "./Pages/Usercreate";
import Navbar from "./Pages/Navbar";
import Allexe from "./Pages/Allexe";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/allexercises" element={<Allexe />} />
        <Route path="/edit/:id" element={<Editexercise />} />
        <Route path="/create" element={<Createexe />} />
        <Route path="/user" element={<Usercreate />} />
      </Routes>
    </BrowserRouter>
  );
}
