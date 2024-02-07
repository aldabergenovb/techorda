import data from "../../data";
import ProductCard from "../ProductCard/ProductCard";
import Container from "../Container/Container";

export default function ProductList() {
  const mensClothing = data.filter(
    (item) => item.category === "men's clothing"
  );
  const womensClothing = data.filter(
    (item) => item.category === "women's clothing"
  );
  const electronics = data.filter((item) => item.category === "electronics");
  const jewelery = data.filter((item) => item.category === "jewelery");
  const chips = data.filter((item) => item.price < 100);
  const popularProducts = data.filter(
    (item) => item.rating.rate > 4 && item.rating.count > 300
  );
  return (
    <Container>
      <h1>Популярные продукты</h1>
      {popularProducts.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
      <h1>Мужские товары</h1>
      {mensClothing.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
      <h1>Женские товары</h1>
      {womensClothing.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
      <h1>Электроника</h1>
      {electronics.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
      <h1>Дешевые товары</h1>
      {chips.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
      <h1>Ювелирные изделия</h1>
      {jewelery.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </Container>
  );
}
