import React from "react";
import './Description.css';
import { ProductContent } from "../../../domain/product";

interface Props {
    product: ProductContent;
}

export const Description:React.FC<Props> = ({ product }) => {
    return (
        <div>
        <div className="mainInfo">
          <div className="titlesWrapper">
            <h1>{product.name}</h1>
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