import restaurantImg from "./assets/mamas-fried-chicken_audit1819_beauty_197-9d9a60dbcede4c7984c6d670fba69e08.jpg"

export default function homeTab() {
    const container = document.querySelector("#content")

    const heading = document.createElement("h1")
    heading.textContent = "Daniel's Fried Chicken"
    heading.classList.add("home-heading")

    const imgContainer = document.createElement("div")
    imgContainer.classList.add("img-container")

    const img = document.createElement("img")
    img.setAttribute("src", restaurantImg)
    img.classList.add("home-img")

    const aboutText = document.createElement("p")
    aboutText.classList.add("about-text")
    aboutText.textContent = "At Daniel's Fried Chicken, we're all about serving up the best fried chicken with a side of great customer service. Every piece is cooked to crispy perfection and seasoned just right, making each bite better than the last. This restaurant is owned by Daniel who makes the recipe so that the chicken always comes out perfect."

    const hoursText = document.createElement("p")
    hoursText.classList.add("detail-text")
    hoursText.textContent = "Hours: 9AM - 11PM"

    const daysText = document.createElement("p")
    daysText.classList.add("detail-text")
    daysText.textContent = "Open Days: Monday - Saturday"

    const locationText = document.createElement("p")
    locationText.classList.add("detail-text")
    locationText.textContent = "Chicken Street, New York"

    const footer = document.querySelector("footer")
    const gitLink = document.createElement("a")
    gitLink.setAttribute("href", "https://github.com/cowdone/Restaurant-Page")
    gitLink.setAttribute("target", "_blank")
    gitLink.textContent = "- View on Github -"
    footer.textContent = "By Daniel Balderas -";
    footer.appendChild(gitLink)
    const attributeToAuthor = document.createElement("a")
    attributeToAuthor.setAttribute("href", "https://www.flaticon.com/free-icons/fried-chicken")
    attributeToAuthor.setAttribute("title", "fried chicken icons")
    attributeToAuthor.setAttribute("target", "_blank")
    attributeToAuthor.textContent = "- Fried chicken icon created by ultimatearm - Flaticon"
    footer.appendChild(attributeToAuthor)

    container.appendChild(heading)
    container.appendChild(imgContainer)
    imgContainer.appendChild(img)
    imgContainer.appendChild(aboutText)
    container.appendChild(hoursText)
    container.appendChild(daysText)
    container.appendChild(locationText)

}