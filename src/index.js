import "./styles.css"
import homeTab from "./home.js"
import menuTab from "./menu.js"
const content = document.querySelector("#content");
content.removeAttribute("id")
menuTab();