import data from "../../data";
import ProductList from "../ProductList/ProductList";

export default function ProductPage() {
  const mensClothing = data
    .filter((item) => item.category === "men's clothing")
    .sort((a, b) => Number(b.inStock) - Number(a.inStock));
  const womensClothing = data
    .filter((item) => item.category === "women's clothing")
    .sort((a, b) => Number(b.inStock) - Number(a.inStock));
  const electronics = data
    .filter((item) => item.category === "electronics")
    .sort((a, b) => Number(b.inStock) - Number(a.inStock));
  const jewelery = data
    .filter((item) => item.category === "jewelery")
    .sort((a, b) => Number(b.inStock) - Number(a.inStock));
  const chips = data
    .filter((item) => item.price < 100)
    .sort((a, b) => Number(b.inStock) - Number(a.inStock));
  const popularProducts = data
    .filter((item) => item.rating.rate > 4 && item.rating.count > 300)
    .sort((a, b) => Number(b.inStock) - Number(a.inStock));
  return (
    <div>
      <ProductList items={mensClothing} categoryName="Мужские товары" />
      <ProductList items={womensClothing} categoryName="Женские товары" />
      <ProductList items={electronics} categoryName="Электроника" />
      <ProductList items={chips} categoryName="Дешевые товары" />
      <ProductList items={popularProducts} categoryName="Популярные товары" />
      <ProductList items={jewelery} categoryName="Украшения" />
    </div>
  );
}
