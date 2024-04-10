import React from "react";
import { Link } from "react-router-dom";
import { Data } from "../../views/App/App";
import { Image } from "../../components/Image"
import './Item.css';

interface Props {
  product: Data;
}

export const Item: React.FC<Props> = ({ product }) => {
  return (
    <li className="card">
      <Link
        to={`/product/${product.name.replace(/\s/g, "-")}`}
        state={{ product }}
      >
        <Image alt={product.name} src={product.imgUrl} />
        <h2>{product.name}</h2>
      </Link>
    </li>
  );
};
