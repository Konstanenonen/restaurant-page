const menu = (() => {
  const _getRoot = () => {
    return document.getElementById("main");
  }

  const _createMenuContent = () => {
    const title = document.createElement("h1");
    title.classList.add("title");
    title.innerText = "Menu";

    const burgerTitle = document.createElement("h2");
    title.classList.add("sub-title");
    burgerTitle.innerText = "Burgers";

    const parentDiv = document.createElement("div");
    parentDiv.classList.add("main-content");

    const elementsArray = [title, burgerTitle];
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
