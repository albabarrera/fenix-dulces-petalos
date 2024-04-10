import { useLocation } from "react-router";
import { Modal } from "../components/Modal";

export default function Product() {
  const location = useLocation();
  const { product } = location.state;

  return <Modal content={product} />;
}
