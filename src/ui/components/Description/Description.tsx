import React from "react";
import './Description.css';
import { FlorContent } from "../../../domain/models/flor";
import { getFertilizanteName } from "@/domain/models/fertilizantes";

interface Props {
    flor: FlorContent;
}

export const Description:React.FC<Props> = ({ flor }) => {
    return (
        <div>
        <div className="mainInfo">
          <div className="titlesWrapper">
            <h1>{flor.name}</h1>
            <p>{flor.binomialName}</p>
          </div>
          <p className="currency">{flor.price}</p>
        </div>
        <div className="detailWrapper">
          <p>Riegos por semana</p>
          <p>{flor.wateringsPerWeek}</p>
        </div>
        <div className="detailWrapper">
          <p>Fertilizante</p>
          <p>{getFertilizanteName(flor.fertilizerType)}</p>
        </div>
        <div className="detailWrapper">
          <p>Altura</p>
          <p className="lenghtUnit">{flor.heightInCm}</p>
        </div>
      </div>

    );
}