export interface ProductItemProps {
  id: string;
  title: string;
  image: string;
  price: number;
  ratings: number;
  avgRating: number;
  oldPrice?: number;
}

export interface CartProductItemProps {
  id: string;
  quantity: number;
  option?: string;
  item: ProductItemProps;
}
