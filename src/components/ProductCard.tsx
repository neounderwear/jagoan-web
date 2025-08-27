import { Link } from "react-router-dom";
import React from "react";
import { Timestamp } from "firebase/firestore";

interface VariantValue {
  sku: string;
  stock: number;
  value: string;
}

interface Variant {
  type: string;
  values: VariantValue[];
}

export interface Product {
  id: string;
  name: string;
  images: string[];
  retailPrice: number;
  discountPrice?: number;
  createdAt: Timestamp;
  description: string;
  variants: Variant[];
}

interface ProductCardProps {
  product: Product;
}

const formatCurrency = (price: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);
};

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const price = product.discountPrice || product.retailPrice;
  const originalPrice = product.discountPrice ? product.retailPrice : null;

  return (
    <Link to={`/produk/${product.id}`} className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 font-poppins">
      <div className="aspect-square w-full bg-gray-200 group-hover:opacity-75">
        <img src={product.images[0]} alt={product.name} className="h-full w-full object-cover object-center" />
      </div>
      <div className="flex flex-1 flex-col space-y-1 p-3">
        {" "}
        <h3 className="text-sm font-medium text-gray-900 line-clamp-2 min-h-[2.5rem] sm:min-h-[2.8rem]">{product.name}</h3>
        <div className="flex flex-1 flex-col justify-end">
          <div className="flex flex-col">
            <p className={`text-base font-bold ${originalPrice ? "text-red-600" : "text-gray-900"}`}>{formatCurrency(price)}</p>
            {originalPrice && <p className="text-xs text-gray-400 line-through sm:text-sm">{formatCurrency(originalPrice)}</p>}
          </div>
        </div>
      </div>
    </Link>
  );
};

export const ProductCardSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
      <div className="aspect-square w-full animate-pulse bg-gray-300"></div>
      <div className="flex-1 space-y-1 p-3">
        {" "}
        <div className="space-y-2 min-h-[2.5rem]">
          {" "}
          <div className="h-4 w-full animate-pulse rounded bg-gray-300"></div>
          <div className="h-4 w-5/6 animate-pulse rounded bg-gray-300"></div>
        </div>
        <div className="pt-2">
          <div className="h-6 w-1/2 animate-pulse rounded bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
};
