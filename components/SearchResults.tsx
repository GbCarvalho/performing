import { List, ListRowRenderer } from "react-virtualized";
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
  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        <ProductItem
          product={results[index]}
          addToTheWishlist={addToTheWishlist}
        />
      </div>
    );
  };

  return (
    <div>
      <h1>{totalPrice}</h1>

      <List
        width={900}
        height={300}
        rowHeight={30}
        overscanRowCount={10}
        rowCount={results.length}
        rowRenderer={rowRenderer}
      />
      {/* {results.map((product) => {
        return (
          
        );
      })} */}
    </div>
  );
}
