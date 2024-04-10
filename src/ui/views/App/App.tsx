import React, { useEffect, useState } from "react";

import "./App.css";

import { Item } from "../../components/Item";
import { ProductContent } from "../../../domain/product";
import { Loader } from "../../components/Loader";
import { Search } from "../../components/Search";

export const App: React.FC = () => {
  const [data, setData] = useState<ProductContent[] | null>(null);
  const [search, setSearch] = useState<string>('');

  const handleSearchChange = (value: string) => {
    setSearch(value);
  };

  const filteredProducts = data?.filter(product => {
    if(search === '') {
      return true;
    }

    const normalizeString = (string: string) => {
      return string.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }
    
    return normalizeString(product.name).includes(normalizeString(search))
  })

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
        <Search onChange={handleSearchChange} />
        <ul className="cardsList">
          {data && filteredProducts ? (
            filteredProducts.map((product: ProductContent) => <Item key={product.id} product={product} />)
          ) : (
            <Loader />
          )}
        </ul>
      </main>
    </>
  );
};
