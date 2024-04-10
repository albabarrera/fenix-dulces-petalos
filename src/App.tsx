import React, { useEffect, useState } from "react";

import { ProductContent } from "./domain/product";
import { Route, Routes } from "react-router-dom";
import { Home } from "./ui/views/Home";
import { Product } from "./ui/views/Product";
import { Header } from "./ui/components/Header";

export const App: React.FC = () => {
  const [data, setData] = useState<ProductContent[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://dulces-petalos.herokuapp.com/api/product"
        );

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
        <Route path="/" element={data &&  <Home data={data} />} />
        <Route path="/product/:name" element={<Product />} />
      </Routes>
    </>
  );
};
