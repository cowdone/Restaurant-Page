import "./styles.css"
import homeTab from "./home.js"
import menuTab from "./menu.js"
import contactTab from "./contact.js"

const content = document.querySelector("#content");
const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const contactBtn = document.querySelector("#contact-btn");
let selectedBtn;

function selectedBtnCheck() {
    if(selectedBtn === "home") {
        menuBtn.removeAttribute("class")
        contactBtn.removeAttribute("class")
        homeBtn.setAttribute("class", "pressed-btn")
    } else if(selectedBtn === "menu") {
        contactBtn.removeAttribute("class")
        homeBtn.removeAttribute("class")
        menuBtn.setAttribute("class", "pressed-btn")
    } else if(selectedBtn === "contact") {
        homeBtn.removeAttribute("class")
        menuBtn.removeAttribute("class")
        contactBtn.setAttribute("class", "pressed-btn")
    }
}
class RestaurantTabs {
    static home() {
        content.innerHTML = "";
        content.removeAttribute("class");
        content.setAttribute("id","content");
        homeTab();
        selectedBtn = "home";
        selectedBtnCheck();
    }
    static menu() {
        content.innerHTML = "";
        content.removeAttribute("id");
        content.setAttribute("class", "menu-content");
        menuTab();
        selectedBtn = "menu";
        selectedBtnCheck();
    }
    static contact() {
        content.innerHTML = "";
        content.removeAttribute("class");
        content.setAttribute("id", "content");
        contactTab();
        selectedBtn = "contact";
        selectedBtnCheck();
    }
}
homeTab();
homeBtn.addEventListener("click", RestaurantTabs.home)
menuBtn.addEventListener("click", RestaurantTabs.menu)
contactBtn.addEventListener("click", RestaurantTabs.contact)