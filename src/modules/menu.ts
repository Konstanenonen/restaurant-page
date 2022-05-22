import Burger from '../images/burger.jpg';
import Burger2 from '../images/burger2.jpg';
import Burger3 from '../images/burger3.jpg';

const menu = (() => {
  const _getRoot = () => {
    return document.getElementById("main");
  }

  const _menuArray = [
    {name: "Big Burger", text: "price: 10 €", pic: Burger},
    {name: "Classic Burger", text: "price: 11 €", pic: Burger2},
    {name: "Cool Burger", text: "price: 10,5 €", pic: Burger3}
  ];

  const _createMenuContent = () => {
    const title = document.createElement("h1");
    title.classList.add("title");
    title.innerText = "Menu";

    const burgerTitle = document.createElement("h2");
    title.classList.add("sub-title");
    burgerTitle.innerText = "Burgers";

    const menuCards = _menuArray.map((item) => {
      const menuCard = document.createElement("div");
      menuCard.classList.add("card");

      const burgerPicture = new Image();
      burgerPicture.classList.add("card-image");
      burgerPicture.src = item.pic;

      const title = document.createElement("h3");
      title.classList.add("card-title");
      title.innerText = item.name;

      const text = document.createElement("p");
      text.classList.add("card-text");
      text.innerText = item.text;

      menuCard.appendChild(title);
      menuCard.appendChild(burgerPicture);
      menuCard.appendChild(text);

      return menuCard;
    });

    const parentDiv = document.createElement("div");
    parentDiv.classList.add("main-content");

    const elementsArray = [title, burgerTitle, ...menuCards];
    elementsArray.forEach((element) => parentDiv.appendChild(element));

    return parentDiv;
  };

  const load = () => {
    const root = _getRoot();
    root.innerHTML = "";
    root.appendChild(_createMenuContent());
  };

  return {
    load
  };
})();

export default menu;
