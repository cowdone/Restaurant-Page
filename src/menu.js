import img_1 from "./assets/Fried_Chicken_Basket-1.jpg"
import img_2 from "./assets/chicken-and-waffles-12.jpg"
import img_3 from "./assets/spicy-fried-chicken-strips-3056880-hero-01-e5bad43e0d3441749f17c1b98b5486c2.jpg"
import img_4 from "./assets/Fried-Chicken-Biscuit-1.jpg"
import img_5 from "./assets/DK6A1031-680x1020.jpg"
import img_6 from "./assets/honey-buffalo-chicken-wings-678x1024.jpg"

export default function menuTab() {
    const container = document.querySelector(".menu-content")
    const menuHeading = document.createElement("h1")
    menuHeading.classList.add("menu-heading")
    menuHeading.textContent = "----Menu----"
    container.appendChild(menuHeading)
    const footer = document.querySelector("footer")
    const gitLink = document.createElement("a")
    gitLink.setAttribute("href", "https://github.com/cowdone/Restaurant-Page")
    gitLink.setAttribute("target", "_blank")
    gitLink.textContent = "- View on Github"
    footer.textContent = "By Daniel Balderas -";
    footer.appendChild(gitLink)
    const attributeToAuthor = document.createElement("a")
    attributeToAuthor.setAttribute("href", "https://www.flaticon.com/free-icons/fried-chicken")
    attributeToAuthor.setAttribute("title", "fried chicken icons")
    attributeToAuthor.setAttribute("target", "_blank")
    attributeToAuthor.textContent = "- Fried chicken icon created by ultimatearm - Flaticon"
    footer.appendChild(attributeToAuthor)
    
    for(let i = 1; i <= 6; i++ ){
        const gridItem = document.createElement("div")
        gridItem.classList.add("grid-item")

        const flexContainer = document.createElement("div")
        flexContainer.classList.add("flex-container")

         const flexContainer2 = document.createElement("div")
        flexContainer2.classList.add("flex-container-2")

        const img = document.createElement("img")
        img.classList.add(`menu-img`)

        const nameOfDish = document.createElement("h1")
        nameOfDish.classList.add(`dish`)

        const priceOfDish = document.createElement("p")
        priceOfDish.classList.add(`price`)

        const dishDescription = document.createElement("p")
        dishDescription.classList.add(`description`)
        function appendElements() {
            container.appendChild(gridItem)
            gridItem.appendChild(flexContainer)
            flexContainer.appendChild(img)
            flexContainer.appendChild(flexContainer2)
            flexContainer2.appendChild(nameOfDish)
            flexContainer2.appendChild(priceOfDish)
            flexContainer2.appendChild(dishDescription)
        }
        if(i === 1) {
            nameOfDish.textContent = "Classic Fried Chicken Basket"
            priceOfDish.textContent = "$12.99"
            dishDescription.textContent = "Crispy, golden-brown fried chicken served with a side of seasoned fries and a tangy dipping sauce. The perfect meal for anyone craving a timeless favorite."
            img.setAttribute("src", img_1)
            appendElements();
        } else if(i === 2) {
            nameOfDish.textContent = "Southern Chicken & Waffles"
            priceOfDish.textContent = "$15.49"
            dishDescription.textContent = "A delicious pairing of crispy fried chicken and fluffy waffles drizzled with warm maple syrup. The perfect balance of savory and sweet."
            img.setAttribute("src",img_2)
            appendElements();
        } else if(i === 3) {
            nameOfDish.textContent = "Spicy Chicken Tenders"
            priceOfDish.textContent = "$11.99"
            dishDescription.textContent = "Tender, juicy chicken strips with a bold spicy breading. Served with a side of creamy ranch dressing to cool things down a bit."
            img.setAttribute("src",img_3)
            appendElements();
        } else if(i === 4) {
            nameOfDish.textContent = "Chicken and Biscuit Sandwich"
            priceOfDish.textContent = "$6.50"
            dishDescription.textContent = "A tender fried chicken breast nestled between two flaky buttermilk biscuits, topped with honey butter and a dash of hot sauce for a spicy kick."
            img.setAttribute("src",img_4)
            appendElements();
        } else if(i === 5) {
            nameOfDish.textContent = "Fried Chicken Po' Boy"
            priceOfDish.textContent = "$9.99"
            dishDescription.textContent = "A classic New Orleans-style sandwich with crispy fried chicken, shredded lettuce, pickles, and spicy mayo, all served on a toasted hoagie roll."
            img.setAttribute("src",img_5)
            appendElements();
        } else if(i === 6) {
            nameOfDish.textContent = "Honey Buffalo Chicken Wings"
            priceOfDish.textContent = "$12.99"
            dishDescription.textContent = "Indulge in our Honey Buffalo Chicken Wings, featuring a bold buffalo sauce with a touch of honey to satisfy both your spicy and sweet cravings. Crispy on the outside, tender and juicy on the inside—these wings are the perfect choice for those who crave flavor-packed satisfaction with every bite. Perfect for sharing (or not!)."
            img.setAttribute("src",img_6)
            appendElements();
        }
    }
    
}
