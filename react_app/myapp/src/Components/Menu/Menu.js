function Menu() {
  const logo =
    "https://static.vecteezy.com/system/resources/thumbnails/024/553/534/small/lion-head-logo-mascot-wildlife-animal-illustration-generative-ai-png.png";
  const items = ["Home", "About us", "Team", "News", "Contact"];
  return (
    <div>
      <img src={logo} alt="LogoSite" />
      <ol>
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ol>
    </div>
  );
}

export default Menu;
