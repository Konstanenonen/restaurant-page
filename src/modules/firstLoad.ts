import Burger from "../images/burger.jpg";

const page = (() => {
  const _root = document.getElementById("content");

  const _createElements = () => {
    const navigation = document.createElement("nav");
    navigation.classList.add("navigation");

    const homeLink = document.createElement("button");
    homeLink.classList.add("navigation-button");
    homeLink.id = "home-button";

    const menuLink = document.createElement("button");
    menuLink.classList.add("navigation-button");
    menuLink.id = "menu-button";

    const contactLink = document.createElement("button");
    contactLink.classList.add("navigation-button");
    contactLink.id = "contact-button";

    const main = document.createElement("main");
    main.classList.add("main");
    main.id = "main";

    const footer = document.createElement("footer");
    footer.classList.add("footer");

    const title = document.createElement("h1");
    title.classList.add("title");

    const description = document.createElement("p");
    description.classList.add("description");

    const burgerPicture = new Image();
    burgerPicture.classList.add("header-image");

    homeLink.innerText = "Home";
    menuLink.innerText = "Menu";
    contactLink.innerText = "Contact";
    title.innerText = "Classic Burgers";
    description.innerText =
      "This is the place to visit when you want some good ass burgers!";
    burgerPicture.src = Burger;

    navigation.appendChild(homeLink);
    navigation.appendChild(menuLink);
    navigation.appendChild(contactLink);

    main.appendChild(title);
    main.appendChild(burgerPicture);
    main.appendChild(description);

    return [navigation, main, footer];
  };

  const load = () => {
    const elementsArray = _createElements();
    elementsArray.forEach((element) => _root.appendChild(element));
  };

  return {
    load,
  };
})();

export default page;
