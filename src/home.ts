const home = (() => {
  const init = () => {
    const root = document.getElementById("content");
    const title = document.createElement("h1");
    title.innerHTML = "OUJEE";
    root.appendChild(title);
  };

  return {
    init,
  }
})();

export default home;
