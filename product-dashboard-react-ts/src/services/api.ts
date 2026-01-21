import type { Product } from "../types/product";

export async function getProducts(): Promise<Product[]> {
  const response = await fetch("https://fakestoreapi.com/products");

  if (!response.ok) {
    throw new Error("Erro ao buscar produtos");
  }

  return response.json();
}
