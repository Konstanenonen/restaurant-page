const page = (() => {
  const _root = document.getElementById("content");

  const _createElements = () => {
    const navigation = document.createElement("nav");
    const main = document.createElement("main");
    const footer = document.createElement("footer");
    const title = document.createElement("h1");

    title.innerHTML = "Restaraunt Page";
    main.appendChild(title);

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
