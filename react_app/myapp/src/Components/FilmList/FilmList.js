import Films from "../Films/Films";
import "../FilmList/FilmList.scss";
function FilmList() {
  return (
    <div className="container">
      <Films url="https://www.vintagemovieposters.co.uk/wp-content/uploads/2023/03/IMG_1887-scaled.jpeg" />
      <Films url="https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/6408f6e7b5811271dc883aa8_batman-min.png" />
      <Films url="https://www.vintagemovieposters.co.uk/wp-content/uploads/2020/11/IMG_5878-scaled.jpeg" />
      <Films url="https://www.tallengestore.com/cdn/shop/products/JohnWick-KeanuReeves-HollywoodEnglishActionMoviePoster-2_c927bf3a-7e64-4c67-b05f-960c2f2cd3d0.jpg?v=1649071611" />
    </div>
  );
}

export default FilmList;
