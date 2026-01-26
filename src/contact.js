export default function contactTab() {
    const container = document.querySelector("#content")

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

    const contactHeading = document.createElement("h1")
    contactHeading.setAttribute("id", "contact-heading")
    contactHeading.textContent = "----Contact Us----"

    const contactMessage = document.createElement("p")
    contactMessage.setAttribute("id", "contact-message")
    contactMessage.textContent = "We'd love to hear from you! contact us through the information below."

    const contactAddress = document.createElement("p")
    contactAddress.setAttribute("class", "contact-info")
    contactAddress.textContent = "Address: Chicken Street, New York"

    const contactPhone = document.createElement("p")
    contactPhone.setAttribute("class", "contact-info")
    contactPhone.textContent = "Phone: +1 (360) 742-9181"

    const contactEmail = document.createElement("p")
    contactEmail.setAttribute("class", "contact-info")
    contactEmail.textContent = "Email: danielschicken@gmail.com"

    container.appendChild(contactHeading)
    container.appendChild(contactMessage)
    container.appendChild(contactAddress)
    container.appendChild(contactPhone)
    container.appendChild(contactEmail)
}