import Burger from '../images/burger.jpg';

const page = (() => {
  const _root = document.getElementById("content");

  const _createElements = () => {
    const navigation = document.createElement("nav");
    navigation.classList.add("navigation");

    const main = document.createElement("main");
    main.classList.add("main");

    const footer = document.createElement("footer");
    footer.classList.add("footer");

    const title = document.createElement("h1");
    title.classList.add("title");

    const description = document.createElement("p");
    description.classList.add("description");

    const burgerPicture = new Image();
    burgerPicture.classList.add("header-image");

    title.innerText = "Classic Burgers";
    description.innerText = "This is the place to visit when you want some good ass burgers!"
    burgerPicture.src = Burger;


    main.appendChild(title);
    main.appendChild(burgerPicture);
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
