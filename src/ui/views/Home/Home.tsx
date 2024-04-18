import React, { useEffect, useState } from "react";
import { Search } from "../../components/Search";
import { FlorContent } from "../../../domain/models/flor";
import { getFlores } from "../../../domain/services/getFlores";
import { Item } from "../../components/Item";
import './Home.css';
import { Loader } from "@/ui/components/Loader";


export const Home:React.FC= () => {
  const [data, setData] = useState<FlorContent[] | null>(null);
  const [search, setSearch] = useState<string>('');

    const handleSearchChange = (value: string) => {
      setSearch(value);
    };

    useEffect(() => {
      const fetchData = async () => {
        try {

          const response = await getFlores();

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
  
    const filteredProducts = data?.filter((flor: FlorContent): boolean => {
      if(search === '') {
        return true;
      }
  
      const normalizeString = (string: string): string => {
        return string.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    }
      
      return normalizeString(flor.name).includes(normalizeString(search)) || normalizeString(flor.binomialName).includes(normalizeString(search))
    })

    return (
        <main>
        <h1 className="visually-hidden">Home</h1>
        <Search onChange={handleSearchChange} />
        <ul className="cardsList">
          {data && filteredProducts ? (
            filteredProducts.map((flor: FlorContent) => <Item key={flor.id} flor={flor} />)
          ) : <Loader />
          }
        </ul>
      </main>
    );
}