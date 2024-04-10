import React, { useEffect, useState } from "react";

import "./App.css";

import { Item } from "../../components/Item";
import { ProductContent } from "../../../domain/product";
import { Loader } from "../../components/Loader";

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
      <main>
        <h1 className="homeTitle">Home</h1>
        <ul className="cardsList">
          {data ? (
            data.map((product: ProductContent) => <Item key={product.id} product={product} />)
          ) : (
            <Loader />
          )}
        </ul>
      </main>
    </>
  );
};
