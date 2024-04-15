import React, { useEffect, useState } from "react";

import { ProductContent } from "./domain/models/product";
import { Route, Routes } from "react-router-dom";
import { Home } from "./ui/views/Home";
import { Product } from "./ui/views/Product";
import { Header } from "./ui/components/Header";
import { Loader } from "./ui/components/Loader";
import { productResponse } from "./domain/services/productResponse";

export const App: React.FC = () => {
  const [data, setData] = useState<ProductContent[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await productResponse();

        if (response.ok) {
          const jsonData = await response.json();

          setData(jsonData);
        } else {
          console.error("Error al obtener los datos:", response.statusText);
        }
      } catch (error) {
        console.error("Error en la llamada a la API:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={data ? <Home data={data} /> : <Loader />} />
        <Route path="/product/:name" element={<Product />} />
      </Routes>
    </>
  );
};
