export interface Product {
  id: number;
  title: string;
  image: string;
  second_image?: string;
  price: string;
  Offer?: string;
  status?: string;
  description: string;
  link: string;
}

export interface Post {
  id: number;
  title: string;
  image: string;
  description: string;
}
