import React from "react";

import { Route, Routes } from "react-router-dom";
import { Home } from "./ui/views/Home";
import { Product } from "./ui/views/Product";
import { Header } from "./ui/components/Header";

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </>
  );
};
