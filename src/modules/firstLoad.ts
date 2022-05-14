import Burger from './burger.jpg';

const page = (() => {
  const _root = document.getElementById("content");

  const _createElements = () => {
    const navigation = document.createElement("nav");
    const main = document.createElement("main");
    const footer = document.createElement("footer");
    const title = document.createElement("h1");
    const description = document.createElement("p");
    const burgerPicture = new Image();
    burgerPicture.src = Burger;

    title.innerText = "Classic Burgers";
    description.innerText = "This is the place to visit when you want some good ass burgers!"
    main.appendChild(title);
    main.appendChild(description);

    return [
      navigation,
      main,
      footer,
    ];
  }

  const load = () => {
    const elementsArray = _createElements();
    elementsArray.forEach((element) => _root.appendChild(element));
  };

  return {
    load,
  }
})();

export default page;
