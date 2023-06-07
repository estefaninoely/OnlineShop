import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type Items = {
  id: number;
  title: string;
  image: string;
  secondImage: string;
  price: number;
  status: string;
  offer: number;
};

export function getProducts() {
  const response = axios.get<Items>("./db.json");
  console.log(response);
  return response;
}

export function useGetProducts() {
  const query = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  return query;
}
