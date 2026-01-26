import "./styles.css"
import homeTab from "./home.js"
import menuTab from "./menu.js"
const content = document.querySelector("#content");
const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
let selectedBtn;
function selectedBtnCheck() {
    if(selectedBtn === "home") {
        menuBtn.removeAttribute("class")
        homeBtn.setAttribute("class", "pressed-btn")
    } else if(selectedBtn === "menu") {
        homeBtn.removeAttribute("class")
        menuBtn.setAttribute("class", "pressed-btn")
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
}
homeTab();
homeBtn.addEventListener("click", RestaurantTabs.home)
menuBtn.addEventListener("click", RestaurantTabs.menu)