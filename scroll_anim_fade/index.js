sections = document.querySelectorAll(".section")
const numberOfSections = sections.length

scrollElement = document.querySelector(".scroll-progress")
var scrollAmount = 1
var lastSectionIndex = 0
const SCROLL_INCREMENT = 1
const MIN_SCROLL_AMT = 1
const MAX_SCROLL_AMT = 80


const sectionScrollLength = MAX_SCROLL_AMT / numberOfSections

window.addEventListener("wheel", async (event) => {
    // Manage scroll amount
    if (event.deltaY > 0) {
        scrollAmount += SCROLL_INCREMENT
    } else {
        scrollAmount -= SCROLL_INCREMENT
    }
    if (scrollAmount < MIN_SCROLL_AMT) {
        scrollAmount = MIN_SCROLL_AMT
    }
    if (scrollAmount > MAX_SCROLL_AMT) {
        scrollAmount = MAX_SCROLL_AMT
    }

    await checkSection()
    scrollElement.style.width = scrollAmount + "vw";
})

async function waitSomeTime(t) {
    return new Promise((resolve) => {
        setTimeout(() => { resolve(1) }, t)
    })
}

async function addFadeOut(section) {
    section.classList.add("fade-out")
    await waitSomeTime(400)
    section.classList.remove("fade-out")
}

async function addFadeInInv(section) {
    section.classList.add("fade-in-inv")
    await waitSomeTime(400)
    section.classList.remove("fade-in-inv")
}

async function checkSection() {
    const sectionIndex = Math.floor((scrollAmount - 1) / sectionScrollLength)
    if (sectionIndex > lastSectionIndex) {
        lastSectionIndex = sectionIndex

        await addFadeOut(sections[sectionIndex - 1])
        sections[sectionIndex - 1].classList.add("not-display")

        sections[sectionIndex].classList.add("fade-in")
        sections[sectionIndex].classList.remove("not-display")
        await waitSomeTime(400)
        sections[sectionIndex].classList.remove("fade-in")

    }
    else if (sectionIndex < lastSectionIndex) {
        lastSectionIndex = sectionIndex

        await addFadeInInv(sections[sectionIndex + 1])
        sections[sectionIndex + 1].classList.add("not-display")

        sections[sectionIndex].classList.add("fade-out-inv")
        sections[sectionIndex].classList.remove("not-display")
        await waitSomeTime(400)
        sections[sectionIndex].classList.remove("fade-out-inv")
    }
    console.log(sectionIndex)

}