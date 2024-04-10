import React from "react";
import './Image.css'

interface Props {
    alt: string;
    src: string;
}

export const Image : React.FC<Props> = ({ alt, src }) => {
    return (
        <div className="imageWrapper">
          <img className="image" src={src} alt={alt} />
        </div>
    );
}