const menuElement = document.querySelector("#menu")

fetch("https://codice-boca.web.app/menu")
.then(response => response.json()) //getting raw data
.then(cleanData => {
    const menuCards = cleanData.map((menuItem) => {
        console.log("menuItem here", menuItem)
        return `<div class="menu-item">
        <h3>${menuItem.title}</h3>
        <p></p>
        <p>${menuItem.description}</p>
    </div>`
    })

    menuElement.innerHTML = menuCards.join('')
})

.catch(err => console.error(err))