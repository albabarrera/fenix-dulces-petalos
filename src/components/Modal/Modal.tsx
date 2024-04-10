import React, { PropsWithChildren } from "react";

import "./Modal.css";
import { Data } from "../../App";
import { Link } from "react-router-dom";

interface Props {
  content: Data;
}

export const Modal: React.FC<PropsWithChildren<Props>> = ({ content }) => {
  return (
    <div className="wrapper">
      <div className="headerWrapper">
        <Link className="homeLink" to="/">
          Volver a la home
        </Link>
      </div>
      <div className="containerWrapper">
        <div className="container">
          <img className="productImage" src={content.imgUrl} />
          <div>
            <div className="mainInfo">
              <div className="titlesWrapper">
                <h2>{content.name}</h2>
                <p>{content.binomialName}</p>
              </div>
              <p className="currency">{content.price}</p>
            </div>
            <div className="detailWrapper">
              <p>Riegos por semana</p>
              <p>{content.wateringsPerWeek}</p>
            </div>
            <div className="detailWrapper">
              <p>Fertilizante</p>
              <p>{content.fertilizerType}</p>
            </div>
            <div className="detailWrapper">
              <p>Altura</p>
              <p className="lenghtUnit">{content.heightInCm}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
