import React from "react";
import { Link } from "react-router-dom";
import { Image } from "../Image"
import './Item.css';
import { ProductContent } from "../../../domain/models/product";

interface Props {
  product: ProductContent;
}

export const Item: React.FC<Props> = ({ product }) => {
  return (
    <li className="card">
      <Link
        to={`/product/${product.id}`}
        state={{ product }}
      >
        <Image alt={product.name} src={product.imgUrl} />
        <h2>{product.name}</h2>
      </Link>
    </li>
  );
};
