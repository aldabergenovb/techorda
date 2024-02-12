import "./ProductPhoto.css";

function ProductPhoto({ props }) {
  return (
    <div>
      <img
        className="img"
        src={props.image}
        alt="product"
        width={props.width}
        height={props.height}
      />
    </div>
  );
}

export default ProductPhoto;
