import Burger from "../images/burger.jpg";

const home = (() => {
  const _getRoot = () => {
    return document.getElementById("main");
  }

  const _createHomeContent = () => {
    const title = document.createElement("h1");
    title.classList.add("title");
    title.innerText = "Classic Burgers";

    const description = document.createElement("p");
    description.classList.add("description");
    description.innerText =
    "This is the place to visit when you want some good ass burgers!";

    const burgerPicture = new Image();
    burgerPicture.classList.add("header-image");
    burgerPicture.src = Burger;

    const parentDiv = document.createElement("div");
    parentDiv.classList.add("main-content");

    const elementsArray = [title, burgerPicture, description];
    elementsArray.forEach((element) => parentDiv.appendChild(element));

    return parentDiv;
  };

  const load = () => {
    const root = _getRoot();
    root.innerHTML = "";
    root.appendChild(_createHomeContent());
  };

  return {
    load
  };
})();

export default home;