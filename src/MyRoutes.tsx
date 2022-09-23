import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddProd from "./components/AddProd";
import EditProd from "./components/EditProd";
import StickyFooter from "./components/Footer";
import Navbar from "./components/Navbar";
import ProductsList from "./components/ProductsList";
import About from "./pages/AboutPage";
import MainPage from "./pages/MainPage";

const MyRooutes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/admin-panel-add" element={<AddProd />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/edit/:id" element={<EditProd />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <StickyFooter />
    </BrowserRouter>
  );
};

export default MyRooutes;
