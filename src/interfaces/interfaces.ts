import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as ProductButtonsProps } from "../components/ProductButtons";
import { Props as ProductImageProps } from "../components/ProductImage";
import { Props as ProductTitleProps } from "../components/ProductTitle";

export interface Product {
  id: string;
  title: string;
  image?: string;
}

export interface ProductContextProps {
  counter: number;
  maxCount?: number;
  increaseBy: (value: number) => void;
  product: Product;
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element;
  Title: ({ title, className }: ProductTitleProps) => JSX.Element;
  Image: ({ className }: ProductImageProps) => JSX.Element;
  Buttons: ({ className }: ProductButtonsProps) => JSX.Element;
}

export interface onChangeArgs {
  product: Product;
  counter: number;
}
export interface ProductInCart extends Product {
  counter: number;
}
export interface InitialValues {
  count?: number;
  maxCount?: number;
}

export interface ProductCardHandlers {
  count: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  product: Product;
  increaseBy: (value: number) => void;
  reset: () => void;
}
