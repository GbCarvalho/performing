export interface AddProductToWishlistProps {
  onAddProductToWishlist: () => void;
  onRequestClose: () => void;
}

export function AddProductToWishlist({
  onAddProductToWishlist,
  onRequestClose,
}: AddProductToWishlistProps) {
  return (
    <span>
      Deseja mesmo adicionar esse produto aos favoritos?
      <button onClick={onAddProductToWishlist}>Sim</button>
      <button onClick={onRequestClose}>Não</button>
    </span>
  );
}
