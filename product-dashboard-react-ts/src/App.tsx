import { useEffect, useState } from "react";
import { getProducts } from "./services/api";
import { ProductList } from "./components/ProductList"; // Certifique-se do caminho correto
import type { Product } from "./types/product";

export default function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        setError("Erro ao carregar produtos");
      } finally {
        setLoading(false);
      }
    }
    loadProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <h1 className="text-2xl font-bold tracking-tight">Product Dashboard</h1>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8">
        {loading && (
          <div className="flex justify-center py-20">
            <p className="animate-pulse font-medium text-gray-500">Carregando catálogo...</p>
          </div>
        )}
        
        {error && (
          <div className="rounded-lg bg-red-50 p-4 text-center text-red-600">
            {error}
          </div>
        )}

        {!loading && !error && <ProductList products={products} />}
      </main>
    </div>
  );
}