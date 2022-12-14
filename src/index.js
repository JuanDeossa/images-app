import registerImage from "./lazy"
const URLs={
    randomFox:"https://randomfox.ca/floof/"
}

async function getData(url) {
    try {
        const res=await fetch(url)
        const data=await res.json()
        return data
    } catch (error) {
        throw new Error(error)
    }
}

const createCardNode=(url)=>{
    const card=document.createElement("div")
    const img=document.createElement("img")
    // img.loading="lazy"
    img.className="mx-auto p-2 rounded-3xl"
    img.width="300"
    img.dataset.src=url
    registerImage(img)
    card.appendChild(img)
    return card
}

async function renderCard() {
    const {image}=await getData(URLs.randomFox)
    content.appendChild(createCardNode(image))
    clear.classList.remove("hidden")
}

// window.addEventListener("load",renderCard)
addFox.addEventListener("click",renderCard)
clear.addEventListener("click",clearContent)

function clearContent() {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
    clear.classList.add("hidden")
}