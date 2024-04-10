import React from "react";

import "./Product.css";
import { Link, useLocation } from "react-router-dom";
import { Image } from "../../components/Image";
import { Description } from "../../components/Description/Description";

export const Product: React.FC = () => {
  const location = useLocation();
  const { product } = location.state;

  return (
    <div className="wrapper">
      <div className="homeLinkWrapper">
        <Link className="homeLink" to="/">
          Volver a la home
        </Link>
      </div>
      <div className="container">
        <Image alt={product.name} src={product.imgUrl} />
        <Description product={product} />
      </div>
    </div>
  );
};
