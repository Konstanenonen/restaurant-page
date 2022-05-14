import contact from './modules/contact';
import page from './modules/firstLoad';
import menu from './modules/menu';
import './style.css';

(() => {
  page.load();

  document.getElementById("menu-button").addEventListener("click", menu.load);

  document.getElementById("contact-button").addEventListener("click", contact.load);
})();