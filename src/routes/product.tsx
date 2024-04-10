import { useLocation } from "react-router";
import { ProductView } from "../views/ProductView";

export default function Product() {
  const location = useLocation();
  const { product } = location.state;

  return <ProductView content={product} />;
}
