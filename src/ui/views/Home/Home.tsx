import React, { useEffect, useState } from "react";
import { Search } from "../../components/Search";
import { ProductContent } from "../../../domain/models/product";
import { getProducts } from "../../../domain/services/getProducts";
import { Item } from "../../components/Item";
import './Home.css';
import { Loader } from "@/ui/components/Loader";


export const Home:React.FC= () => {
  const [data, setData] = useState<ProductContent[] | null>(null);
  const [search, setSearch] = useState<string>('');

    const handleSearchChange = (value: string) => {
      setSearch(value);
    };

    useEffect(() => {
      const fetchData = async () => {
        try {

          const response = await getProducts();

        if (response.ok) {
          const jsonData = await response.json();

          setData(jsonData);
        }
      } catch (error) {
        console.error("Error en la llamada a la API:", error);
      }
    };

    fetchData();
  }, []);
  
    const filteredProducts = data?.filter((product: ProductContent) => {
      if(search === '') {
        return true;
      }
  
      const normalizeString = (string: string) => {
        return string.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    }
      
      return normalizeString(product.name).includes(normalizeString(search)) || normalizeString(product.binomialName).includes(normalizeString(search))
    })

    return (
        <main>
        <h1 className="visually-hidden">Home</h1>
        <Search onChange={handleSearchChange} />
        <ul className="cardsList">
          {data && filteredProducts ? (
            filteredProducts.map((product: ProductContent) => <Item key={product.id} product={product} />)
          ) : <Loader />
          }
        </ul>
      </main>
    );
}