import { useMemo } from "react";
import { ProductItem } from "./ProductItem";

type SearchResultsProps = {
  totalPrice: number;
  results: Array<{
    id: number;
    price: number;
    title: string;
  }>;
  addToTheWishlist: (id: number) => void;
};

export function SearchResults({
  totalPrice,
  results,
  addToTheWishlist,
}: SearchResultsProps) {
  return (
    <div>
      <h1>{totalPrice}</h1>
      {results.map((product) => {
        return (
          <ProductItem
            key={product.id}
            product={product}
            addToTheWishlist={addToTheWishlist}
          />
        );
      })}
    </div>
  );
}
