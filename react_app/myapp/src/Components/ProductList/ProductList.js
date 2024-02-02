import data from "../../data";
import ProductCard from "../ProductCard/ProductCard";
import Container from "../Container/Container";

export default function ProductList() {
  return (
    <Container>
      {data.map((item) => (
        <ProductCard item={item} />
      ))}
    </Container>
  );
}
