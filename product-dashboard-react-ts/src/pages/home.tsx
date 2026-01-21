import { useEffect, useState } from "react"
import { getProducts } from "../services/api"
import type { Product } from "../types/product"
import {ProductCard} from "../components/ProductCard"


function Home() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await getProducts()
        setProducts(data)
      } catch {
        setError("Erro ao carregar produtos")
      } finally {
        setLoading(false)
      }
    }

    loadProducts()
  }, [])

  if (loading) return <p>Carregando...</p>
  if (error) return <p>{error}</p>

  return (
    <div>
    {products.map(product => (
  <ProductCard key={product.id} product={product} />
   ))}
    </div>
  )
}

export default Home

