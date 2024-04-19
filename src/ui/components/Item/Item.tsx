import React from "react";
import { Link } from "react-router-dom";
import { Image } from "../Image"
import './Item.css';
import { FlorContent } from "../../../domain/models/flor";

interface Props {
  flor: FlorContent;
}

export const Item: React.FC<Props> = ({ flor }) => {
  return (
    <li className="card">
      <Link
        to={`/product/${flor.id}`}
        state={{ flor }}
      >
        <Image alt={flor.name} src={flor.imgUrl} />
        <div className="itemContentWrapper">
              <h2 className="itemTitle">{flor.name}</h2>
            <div className="itemDetails">
              <p className="itemSubtitle">{flor.binomialName}</p>
            <p className="itemCurrency">{flor.price}</p>
            </div>
        </div>
      </Link>
    </li>
  );
};
