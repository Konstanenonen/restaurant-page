import home from "./home";

const page = ((initialMainContent) => {
  const _root: HTMLElement = document.getElementById("content");

  const _createElements = (): HTMLElement[] => {
    const homeLink = document.createElement("button");
    homeLink.classList.add("navigation-button");
    homeLink.id = "home-button";
    homeLink.innerText = "Home";

    const menuLink = document.createElement("button");
    menuLink.classList.add("navigation-button");
    menuLink.id = "menu-button";
    menuLink.innerText = "Menu";

    const contactLink = document.createElement("button");
    contactLink.classList.add("navigation-button");
    contactLink.id = "contact-button";
    contactLink.innerText = "Contact";

    const main = document.createElement("main");
    main.classList.add("main");
    main.id = "main";

    const footerText = document.createElement("p");
    footerText.classList.add("footer-text");
    footerText.innerText = "Made by Konsta Nenonen";

    const footer = document.createElement("footer");
    footer.classList.add("footer");
    footer.appendChild(footerText);

    const navigation = document.createElement("nav");
    navigation.classList.add("navigation");
    navigation.appendChild(homeLink);
    navigation.appendChild(menuLink);
    navigation.appendChild(contactLink);

    return [navigation, main, footer];
  };

  const load = (): void => {
    const elementsArray = _createElements();
    elementsArray.forEach((element) => _root.appendChild(element));
    initialMainContent.load();
  };

  return {
    load,
  };
})(home);

export default page;
