import type { Product } from "../types/product";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const { image, title, price } = product as any;

  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all hover:shadow-md">
      {/* Container da Imagem */}
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Detalhes */}
      <div className="flex flex-1 flex-col p-4">
        <h3 className="mb-1 text-sm font-medium text-gray-700 line-clamp-2">
          {title}
        </h3>
        
        <div className="mt-auto">
          <p className="text-lg font-bold text-gray-900">
            R$ {Number(price).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </p>
          
          <button className="mt-3 w-full rounded-lg bg-blue-600 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700">
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </div>
  );
}