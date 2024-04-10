import React, { useEffect, useState } from "react";

import "./App.css";

import { ProductContent } from "../domain/product";
import { Route, Routes } from "react-router-dom";
import { HomeView } from "../ui/views/HomeView/HomeView";
import { ProductView } from "../ui/views/ProductView";
import { Header } from "../ui/components/Header";

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

  const Home = () => data && <HomeView data={data} />;
  const Product = () => <ProductView />;

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:name" element={<Product />} />
      </Routes>
      {/*  */}
    </>
  );
};
