import Burger from "../images/burger.jpg";

const home = (() => {
  const _getRoot = (): HTMLElement => {
    return document.getElementById("main");
  }

  const _createHomeContent = (): HTMLDivElement => {
    const title = document.createElement("h1");
    title.classList.add("title");
    title.innerText = "Classic Burgers";

    const description = document.createElement("p");
    description.classList.add("description");
    description.innerText =
    "This is the place to visit when you want some good ass burgers.";

    const burgerPicture = new Image();
    burgerPicture.classList.add("header-image");
    burgerPicture.src = Burger;

    const openHours = document.createElement("ul");
    openHours.classList.add("open-hours");
    const monday = document.createElement("li");
    monday.innerText = "Monday - 10.00 - 22.00";
    const tuesday = document.createElement("li");
    tuesday.innerText = "Tuesday - 10.00 - 22.00";
    const wensday = document.createElement("li");
    wensday.innerText = "Wensday - 10.00 - 22.00";
    const thursday = document.createElement("li");
    thursday.innerText = "Thursday - 10.00 - 22.00";
    const friday = document.createElement("li");
    friday.innerText = "Friday - 10.00 - 22.00";
    const saturday = document.createElement("li");
    saturday.innerText = "Saturday - 11.00 - 23.00";
    const sunday = document.createElement("li");
    sunday.innerText = "Sunday - 11.00 - 20.00";

    openHours.appendChild(monday);
    openHours.appendChild(tuesday);
    openHours.appendChild(wensday);
    openHours.appendChild(thursday);
    openHours.appendChild(friday);
    openHours.appendChild(saturday);
    openHours.appendChild(sunday);


    const parentDiv = document.createElement("div");
    parentDiv.classList.add("main-content");

    const elementsArray = [title, burgerPicture, description, openHours];
    elementsArray.forEach((element) => parentDiv.appendChild(element));

    return parentDiv;
  };

  const load = (): void => {
    const root = _getRoot();
    root.innerHTML = "";
    root.appendChild(_createHomeContent());
  };

  return {
    load
  };
})();

export default home;