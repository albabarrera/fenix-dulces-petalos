import React, { PropsWithChildren } from "react";

import "./ProductView.css";
import { Link } from "react-router-dom";
import { Image } from "../../components/Image"
import { Description } from "../../components/Description/Description";
import { ProductContent } from "../../../domain/product";

interface Props {
  content: ProductContent;
}

export const ProductView: React.FC<PropsWithChildren<Props>> = ({ content }) => {
  return (
    <div className="wrapper">
      <div className="homeLinkWrapper">
        <Link className="homeLink" to="/">
          Volver a la home
        </Link>
      </div>
        <div className="container">
        <Image alt={content.name} src={content.imgUrl} />
        <Description product={content} />
        </div>
      </div>
  );
};
