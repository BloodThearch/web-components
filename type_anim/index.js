async function typeAnimIn(typeAnimElement, stringToType) {
    for (let i = 0; i < stringToType.length; i++) {
        await new Promise((resolve) => {
            setTimeout(() => { 
                typeAnimElement.textContent += stringToType[i]
                resolve(1)
            }, 200)
        })
    }
}

async function typeAnimOut(typeAnimElement, stringToType) {
    for (let i = 0; i < stringToType.length; i++) {
        await new Promise((resolve) => {
            setTimeout(() => {
                typeAnimElement.textContent = typeAnimElement.textContent.slice(0, -1)
                resolve(1)
            }, 200)
        })
    }
}

async function typeAnim(typeAnimElement, stringsToType) {
    let i=0;
    while (true)
    {
        await typeAnimIn(typeAnimElement, stringsToType[i])
        await new Promise((resolve) => { // Gap between after fade in and before fade out
            setTimeout(()=>{resolve(1)},500)
        })
        await typeAnimOut(typeAnimElement, stringsToType[i])
        i++;
        if (i%stringsToType.length==0) {
            i=0
        }
    }
}   

const typeAnimElement = document.querySelector(".type-anim")
const stringsToType = ["Gautam", "Shubhankar", "Ajitesh"]
typeAnim(typeAnimElement, stringsToType)