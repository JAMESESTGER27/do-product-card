import React from "react";
// import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";


export interface Props {
  className?: string;
  style?: React.CSSProperties;
  img?:string;
}

export const ProductImage = ({  img,className , style}: Props) => {
  // const {
  //   product: { image },
  // } = useContext(ProductContext);
  return (
    <img
      className={`${styles.productImg} ${className}`}
      src={img ? img : noImage}
      alt="product image"
      style={style}
    />
  );
};
