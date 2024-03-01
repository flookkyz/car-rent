import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Rent from "./components/Rent";
import Payment from "./components/Payment";
import Car_Stock from "./components/Car_Stock";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rent/:id" element={<Rent />} />
          <Route path="/payment/:id" element={<Payment />} />
          <Route path="/carstock" element={<Car_Stock />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
