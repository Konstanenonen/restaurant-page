import Chef from '../images/chef.jpg';

const contact = (() => {
  const _getRoot = (): HTMLElement => {
    return document.getElementById("main");
  };

  const _createContactContent = (): HTMLDivElement => {
    const title = document.createElement("h1");
    title.classList.add("title");
    title.innerText = "Contact Us";

    const ownerTitle = document.createElement("h2");
    title.classList.add("sub-title");
    ownerTitle.innerText = "The owner";

    const card = document.createElement("div");
    card.classList.add("card");

    const cardPicture = new Image();
    cardPicture.classList.add("card-image");
    cardPicture.src = Chef;

    const cardTitle = document.createElement("h3");
    cardTitle.classList.add("card-title");
    cardTitle.innerText = "Burger Lover";

    const text = document.createElement("p");
    text.classList.add("card-text");
    text.innerText = "phone: 01234321";

    card.appendChild(cardTitle);
    card.appendChild(cardPicture);
    card.appendChild(text);

    const parentDiv = document.createElement("div");
    parentDiv.classList.add("main-content");

    const elementsArray = [title, ownerTitle, card];
    elementsArray.forEach((element) => parentDiv.appendChild(element));

    return parentDiv;
  };

  const load = (): void => {
    const root = _getRoot();
    root.innerHTML = "";
    root.appendChild(_createContactContent());
  };

  return {
    load,
  };
})();

export default contact;
