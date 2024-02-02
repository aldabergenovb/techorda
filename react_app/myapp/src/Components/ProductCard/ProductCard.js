import "./ProductCard.css";
import ProductPhoto from "./ProductPhoto";

export default function ProductCard({ item }) {
  return (
    <div key={item.id}>
      <ProductPhoto props={item} />
      <h4>{item.title}</h4>
      <p>Краткая информация про продукт</p>
      <h5>Цена {item.price} тг</h5>
    </div>
  );
}
