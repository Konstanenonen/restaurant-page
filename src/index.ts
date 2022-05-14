import contact from './modules/contact';
import page from './modules/firstLoad';
import home from './modules/home';
import menu from './modules/menu';
import './style.css';

(() => {
  page.load();

  document.getElementById("home-button").addEventListener("click", home.load);

  document.getElementById("menu-button").addEventListener("click", menu.load);

  document.getElementById("contact-button").addEventListener("click", contact.load);
})();