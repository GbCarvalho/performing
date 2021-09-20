import { memo, useState } from "react";
import dynamic from "next/dynamic";
import { AddProductToWishlistProps } from "./AddProductToWishlist";
import lodash from "lodash";

// import { AddProductToWishlist } from "./AddProductToWishlist";

const AddProductToWishlist = dynamic<AddProductToWishlistProps>(
  () => {
    return import("./AddProductToWishlist").then(
      (mod) => mod.AddProductToWishlist
    );
  },
  // eslint-disable-next-line react/display-name
  { loading: () => <span>Carregando...</span> }
);

interface ProductItemProps {
  product: { id: number; price: number; title: string };
  addToTheWishlist: (id: number) => void;
}

function ProductItemComponent({ product, addToTheWishlist }: ProductItemProps) {
  const [isAddingToTheWishlist, setIsAddingToTheWishlist] = useState(false);

  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
      <button onClick={() => setIsAddingToTheWishlist(true)}>
        Adicionar aos favoritos
      </button>
      {isAddingToTheWishlist && (
        <AddProductToWishlist
          onAddProductToWishlist={() => addToTheWishlist(product.id)}
          onRequestClose={() => setIsAddingToTheWishlist(false)}
        />
      )}
    </div>
  );
}

export const ProductItem = memo(
  ProductItemComponent,
  (prevProps, nextProps) => {
    return lodash.isEqual(prevProps.product, nextProps.product);
  }
);
