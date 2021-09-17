import { memo } from "react";

interface ProductItemProps {
  product: { id: number; price: number; title: string };
  addToTheWishlist: (id: number) => void;
}

function ProductItemComponent({ product, addToTheWishlist }: ProductItemProps) {
  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
      <button onClick={() => addToTheWishlist(product.id)}>
        Add to the wishlist
      </button>
    </div>
  );
}

export const ProductItem = memo(
  ProductItemComponent,
  (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product);
  }
);
