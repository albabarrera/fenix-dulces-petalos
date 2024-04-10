import React from "react";
import { Data } from "../../views/App/App";
import './Description.css';

interface Props {
    product: Data;
}

export const Description:React.FC<Props> = ({ product }) => {
    return (
        <div>
        <div className="mainInfo">
          <div className="titlesWrapper">
            <h2>{product.name}</h2>
            <p>{product.binomialName}</p>
          </div>
          <p className="currency">{product.price}</p>
        </div>
        <div className="detailWrapper">
          <p>Riegos por semana</p>
          <p>{product.wateringsPerWeek}</p>
        </div>
        <div className="detailWrapper">
          <p>Fertilizante</p>
          <p>{product.fertilizerType}</p>
        </div>
        <div className="detailWrapper">
          <p>Altura</p>
          <p className="lenghtUnit">{product.heightInCm}</p>
        </div>
      </div>

    );
}