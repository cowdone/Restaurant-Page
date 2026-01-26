import img_1 from "./assets/Fried_Chicken_Basket-1.jpg"

export default function menuTab() {
    const container = document.querySelector(".menu-content")
    const menuHeading = document.createElement("h1")
    menuHeading.classList.add("menu-heading")
    menuHeading.textContent = "~-Menu-~"
    container.appendChild(menuHeading)
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
        if(i === 1) {
            container.appendChild(gridItem)
            gridItem.appendChild(flexContainer)
            flexContainer.appendChild(img)
            flexContainer.appendChild(flexContainer2)
            nameOfDish.textContent = "Classic Fried Chicken Basket"
            flexContainer2.appendChild(nameOfDish)
            priceOfDish.textContent = "$12.99"
            flexContainer2.appendChild(priceOfDish)
            dishDescription.textContent = "Crispy, golden-brown fried chicken served with a side of seasoned fries and a tangy dipping sauce. The perfect meal for anyone craving a timeless favorite."
            flexContainer2.appendChild(dishDescription)
            img.setAttribute("src", img_1)
        }
    }
    
}
