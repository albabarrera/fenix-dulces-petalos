import React, { useEffect, useState } from "react";

import "./App.css";

import { Link } from "react-router-dom";

export interface Data {
  id: string;
  name: string;
  binomialName: string;
  price: number;
  imgUrl: string;
  wateringsPerWeek: number;
  fertilizerType: string;
  heightInCm: number;
}

export const App: React.FC = () => {
  const [data, setData] = useState<Data[] | null>(null);

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
      <ul className="cardsList">
            {data ? (
              data.map((product: Data) => (
                <>
                  <li
                    key={product.id}
                    className="card"
                  >
                    <Link to={`/product/${product.name.replace(/\s/g, '-')}`} state={{product}}>
                    <div className="imageWrapper">
                      <img className="image" src={product.imgUrl} />
                    </div>
                    <h2>{product.name}</h2>
                    </Link>
                  </li>
                </>
              ))
            ) : (
              <p>Cargando datos...</p>
            )}
          </ul>

      </main>
    </>
  );
};