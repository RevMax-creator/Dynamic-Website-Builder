document.title = "Dynamic Website Builder"
// Selecting contianer
let cont = document.getElementsByClassName("container")[0]
// Adding flex to contianer
const concss = (e) => {
    e.style.display = "flex"
    e.style.flexDirection = "column"
}

concss(cont)

const replace0s = (num) => {
    if (num > 1000 && num < 100000) {
        console.log(String(Math.floor(num % 1000)))
        return String(Math.floor(num / 1000)) + "K views"
    }
    else if (num > 100000) {
        return String(Math.floor(num / 100000)) + "M views"
    }
    else if (num == 0) { return String(num) + " view" }
    return String(num) + " views"
}

function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    // Creating a Box
    let box = document.createElement("div")
    box.classList.add("box")
    let imageBox = document.createElement("div")
    imageBox.classList.add("image-box")
    let contentBox = document.createElement("div")
    contentBox.classList.add("content-box")
    cont.insertAdjacentElement("beforeend", box)
    box.insertAdjacentElement("afterbegin", imageBox)
    box.insertAdjacentElement("beforeend", contentBox)

    box.style.display = "flex"
    box.style.backgroundColor = "black"

    imageBox.style.backgroundImage = `url('${thumbnail}')`
    imageBox.style.backgroundPosition = "left center"
    imageBox.style.backgroundRepeat = "no-repeat"
    imageBox.style.margin = "15px"
    imageBox.style.width = "246px"
    imageBox.style.height = "138px"
    imageBox.style.borderRadius = "6px"

    imageBox.insertAdjacentHTML("afterbegin", `<p class = "duration" >${duration}</p>`)
    let durtn = document.querySelectorAll(".duration").forEach(durtn => {
    durtn.style.margin = "116px 4px 17px 206px";
    durtn.style.borderRadius = "3px";
    durtn.style.backgroundColor = "rgba(0,0,0,0.56)"
    durtn.style.backgroundPosition = "center center";
    durtn.style.color = "white";
    durtn.style.fontSize = "10px";
    durtn.style.fontWeight = "bold";
    durtn.style.padding = "2px";
    durtn.style.position = "relative";})

    contentBox.style.color = "white"
    contentBox.style.fontFamily = "Helvetica"

    contentBox.insertAdjacentHTML("afterbegin", `<h3>${title}</h3><span>${cName}<ul> <li>${replace0s(views)}</li><li>${monthsOld} months old </li></ul></span>`)
    
    let ularng = document.querySelectorAll("ul").forEach(ularng => { 
    ularng.style.display = "inline-flex";
    ularng.style.justifyContent = "space-between";
    ularng.style.margin = "0px";
    ularng.style.width = "18vw";
    ularng.style.paddingLeft = "2.5vw";})

}

createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
createCard("Your First HTML Website | Sigma Web Dev video #3", "CodeWithHarry", 120000, 12, "28:31", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")