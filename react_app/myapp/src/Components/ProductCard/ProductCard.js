import "./ProductCard.css";
import ProductPhoto from "./ProductPhoto";

export default function ProductCard({ item }) {
  return (
    <div className="card">
      <h4>{item.title}</h4>
      <ProductPhoto props={item} />

      <p>Краткая информация про продукт</p>
      <h5>Цена {item.price} тг</h5>
      {item.inStock ? (
        <button style={{ backgroundColor: "green" }}>Купить</button>
      ) : (
        <button disabled>Нет в наличии</button>
      )}
    </div>
  );
}
