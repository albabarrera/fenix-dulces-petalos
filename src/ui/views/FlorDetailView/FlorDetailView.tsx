import React, { useEffect, useState } from "react";

import "./FlorDetailView.css";
import { Link, useLocation } from "react-router-dom";
import { Image } from "../../components/Image";
import { Description } from "../../components/Description/Description";
import { FlorContent } from "@/domain/models/flor";
import { getFlor } from "@/domain/services/getFlor";


export const FlorDetailView: React.FC = () => {
  const location = useLocation();
  const { flor } = location.state;
  const [data, setData] = useState<FlorContent | null>(null);

  useEffect(() => {
    const fetchData = async () => {
        try {

          const response = await getFlor(flor.id);
          
        if (response.ok) {
          const jsonData = await response.json();

          setData(jsonData);
        }
      } catch (error) {
        console.error("Error en la llamada a la API:", error);
      }
    };

    fetchData();
  }, [flor.id]);

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
            <Description flor={data} />
          </div>
        )}
    </div>
  );
};


