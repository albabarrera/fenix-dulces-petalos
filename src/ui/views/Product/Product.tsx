import React, { useEffect, useState } from "react";

import "./Product.css";
import { Link, useLocation } from "react-router-dom";
import { Image } from "../../components/Image";
import { Description } from "../../components/Description/Description";
import { ProductContent } from "@/domain/models/product";
import { getProduct } from "@/domain/services/getProduct";


export const Product: React.FC = () => {
  const location = useLocation();
  const { product } = location.state;
  const [data, setData] = useState<ProductContent | null>(null);

  useEffect(() => {
    const fetchData = async () => {
        try {

          const response = await getProduct(product.id);
          
        if (response.ok) {
          const jsonData = await response.json();

          setData(jsonData);
        }
      } catch (error) {
        console.error("Error en la llamada a la API:", error);
      }
    };

    fetchData();
  }, [product.id]);

  return (
    <div className="wrapper">
      <div className="homeLinkWrapper">
        <Link className="homeLink" to="/">
          Volver a la home
        </Link>
      </div>
        {data && (
          <div className="container">
            <Image alt={data.name} src={data.imgUrl} />
            <Description product={data} />
          </div>
        )}
    </div>
  );
};
