import React, { useState } from "react";
import { Search } from "../../components/Search";
import { ProductContent } from "../../../domain/product";
import { Item } from "../../components/Item";
import './Home.css';

interface Props {
    data: ProductContent[];
}

export const Home:React.FC<Props>= ({ data }) => {
    const [search, setSearch] = useState<string>('');
  
    const handleSearchChange = (value: string) => {
      setSearch(value);
    };
  
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
          {data && filteredProducts && (
            filteredProducts.map((product: ProductContent) => <Item key={product.id} product={product} />)
          )}
        </ul>
      </main>
    );
}