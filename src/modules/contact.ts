const contact = (() => {
  const _getRoot = () => {
    return document.getElementById("main");
  }

  const _createContactContent = () => {
    const title = document.createElement("h1");
    title.classList.add("title");
    title.innerText = "Contact Us";

    const ownerTitle = document.createElement("h2");
    title.classList.add("sub-title");
    ownerTitle.innerText = "The owner";

    const parentDiv = document.createElement("div");
    parentDiv.classList.add("main-content");

    const elementsArray = [title, ownerTitle];
    elementsArray.forEach((element) => parentDiv.appendChild(element));

    return parentDiv;
  };

  const load = () => {
    const root = _getRoot();
    root.innerHTML = "";
    root.appendChild(_createContactContent());
  };

  return {
    load
  };
})();

export default contact;