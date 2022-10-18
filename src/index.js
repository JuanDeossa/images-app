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
    img.className="mx-auto p-2 rounded-3xl"
    img.width="300"
    img.src=url
    card.appendChild(img)
    return card
}





