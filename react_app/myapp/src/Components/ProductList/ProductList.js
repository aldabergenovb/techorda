import ProductCard from "../ProductCard/ProductCard";
import Flex from "../Container/Container";

export default function ProductList({ items, categoryName }) {
  return (
    <>
      <h1>{categoryName}</h1>
      <Flex>
        {items.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </Flex>
    </>
  );
}
